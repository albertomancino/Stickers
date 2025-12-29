import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.3";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

const ALLOWED_ORIGINS = ["https://<your-gh-username>.github.io", "http://localhost:8000"];

function corsHeaders(origin?: string) {
  const allowed = origin && ALLOWED_ORIGINS.some(o => origin.startsWith(o));
  const hdrOrigin = allowed ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": hdrOrigin || "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "GET, OPTIONS"
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders(req.headers.get("origin") || undefined) });
  }

  const headers = { "Content-Type": "application/json", ...corsHeaders(req.headers.get("origin") || undefined) };

  if (req.method !== "GET") {
    return new Response(JSON.stringify({ ok: false, error: "Metodo non consentito" }), { status: 405, headers });
  }

  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  if (!token) {
    return new Response(JSON.stringify({ ok: false, error: "Token mancante" }), { status: 400, headers });
  }

  const { data, error } = await supabase.from("shares").select("*").eq("token", token).single();
  if (error || !data) {
    return new Response(JSON.stringify({ ok: false, error: "Token non trovato" }), { status: 404, headers });
  }

  if (data.expires_at && new Date(data.expires_at).getTime() < Date.now()) {
    return new Response(JSON.stringify({ ok: false, error: "Link scaduto" }), { status: 410, headers });
  }

  return new Response(JSON.stringify({
    ok: true,
    type: data.type,
    payload: data.payload,
    meta: {
      ownerId: data.owner_id,
      ownerName: data.owner_name,
      albumName: data.album_name,
      total: data.total,
      expiresAt: data.expires_at,
      createdAt: data.created_at
    }
  }), { headers });
});
