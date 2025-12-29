import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.3";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

const ALLOWED_ORIGINS = ["https://albertomancino.github.io", "http://localhost:8000"];

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
  try {
    await supabase.rpc("postgres_version");
  } catch {
    // ignore
  }
  return new Response(JSON.stringify({ ok: true, ts: new Date().toISOString() }), { headers });
});
