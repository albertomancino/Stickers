-- Schema for shared snapshots
create extension if not exists "pgcrypto";

create table if not exists public.shares (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('profile','album')),
  token text not null unique,
  payload jsonb not null,
  owner_id text,
  owner_name text,
  album_name text,
  total integer,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end
$$;

drop trigger if exists trg_shares_updated on public.shares;
create trigger trg_shares_updated
before update on public.shares
for each row execute procedure public.touch_updated_at();

alter table public.shares enable row level security;

-- No direct client access; only Edge Functions should use service role.
create policy "deny all" on public.shares for all using (false);
