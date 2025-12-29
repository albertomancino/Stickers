// deno-lint-ignore-file no-explicit-any
import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.3";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

const ALLOWED_ORIGINS = ["https://<your-gh-username>.github.io", "http://localhost:8000"];
const MAX_SIZE = 1_000_000; // 1MB

function corsHeaders(origin?: string) {
  const allowed = origin && ALLOWED_ORIGINS.some(o => origin.startsWith(o));
  const hdrOrigin = allowed ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": hdrOrigin || "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  };
}

function randomToken(len = 40) {
  const bytes = new Uint8Array(len);
  crypto.getRandomValues(bytes);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
}

function validatePayload(type: string, payload: any) {
  if (!payload || typeof payload !== "object") return "Payload mancante";
  if (type === "profile" && payload.schema !== "panini-profile/v1") return "Schema profilo non valido";
  if (type === "album" && payload.schema !== "panini-trade/v1") return "Schema album non valido";
  return null;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders(req.headers.get("origin") || undefined) });
  }

  const headers = { "Content-Type": "application/json", ...corsHeaders(req.headers.get("origin") || undefined) };

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Metodo non consentito" }), { status: 405, headers });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "JSON non valido" }), { status: 400, headers });
  }

  const { type, payload, ttlDays = 30 } = body || {};
  if (type !== "profile" && type !== "album") {
    return new Response(JSON.stringify({ ok: false, error: "Tipo non valido" }), { status: 400, headers });
  }
  const err = validatePayload(type, payload);
  if (err) {
    return new Response(JSON.stringify({ ok: false, error: err }), { status: 400, headers });
  }

  const rawSize = new TextEncoder().encode(JSON.stringify(payload)).length;
  if (rawSize > MAX_SIZE) {
    return new Response(JSON.stringify({ ok: false, error: "Payload troppo grande" }), { status: 413, headers });
  }

  const token = randomToken(48);
  const expires = new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1000);

  const ownerId = payload?.owner?.id || payload?.profile?.id || null;
  const ownerName = payload?.owner?.name || payload?.profile?.name || null;
  const albumName = payload?.album?.name || null;
  const total = payload?.album?.total || null;

  const { error } = await supabase.from("shares").insert({
    type,
    token,
    payload,
    expires_at: expires.toISOString(),
    owner_id: ownerId,
    owner_name: ownerName,
    album_name: albumName,
    total
  });

  if (error) {
    return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 500, headers });
  }

  const url = `${req.headers.get("origin") || "https://<your-gh-username>.github.io/<repo>"}/import.html#${token}`;

  return new Response(JSON.stringify({ ok: true, type, token, expiresAt: expires.toISOString(), url }), { headers });
});
