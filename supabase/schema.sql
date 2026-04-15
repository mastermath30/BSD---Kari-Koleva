-- ============================================================
-- Kari Koleva — Supabase Schema
-- Paste this into the Supabase SQL Editor and run it.
-- ============================================================

-- Types
create type public.order_status as enum (
  'inquiry', 'confirmed', 'in_progress', 'completed', 'cancelled'
);

create type public.product_type as enum ('commission', 'print');

-- ── Profiles ─────────────────────────────────────────────────
-- Extends auth.users. Created automatically via trigger on signup.
create table public.profiles (
  id           uuid references auth.users(id) on delete cascade primary key,
  username     text unique not null,
  display_name text,
  is_admin     boolean not null default false,
  created_at   timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- ── Orders ───────────────────────────────────────────────────
create table public.orders (
  id                  uuid primary key default gen_random_uuid(),
  user_id             uuid references public.profiles(id) on delete cascade not null,
  product_type        public.product_type not null default 'commission',
  product_description text,
  status              public.order_status not null default 'inquiry',
  admin_notes         text,
  payment_reference   text,   -- PayPal transaction ID etc.
  payment_amount      numeric(10, 2),
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

alter table public.orders enable row level security;

-- ── Reviews ──────────────────────────────────────────────────
create table public.reviews (
  id         uuid primary key default gen_random_uuid(),
  order_id   uuid references public.orders(id) on delete cascade not null unique,
  user_id    uuid references public.profiles(id) on delete cascade not null,
  rating     integer not null check (rating >= 1 and rating <= 5),
  body       text not null,
  approved   boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.reviews enable row level security;

-- ── Triggers ─────────────────────────────────────────────────

-- Auto-create a profile row when a new auth user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, display_name)
  values (
    new.id,
    new.raw_user_meta_data->>'username',
    nullif(new.raw_user_meta_data->>'display_name', '')
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Auto-update orders.updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger orders_updated_at
  before update on public.orders
  for each row execute procedure public.handle_updated_at();

-- ── RLS Policies ─────────────────────────────────────────────

-- Helper: is the current user an admin?
create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and is_admin = true
  );
$$ language sql security definer stable;

-- profiles
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id or public.is_admin());

create policy "Users can update own profile (non-admin fields)"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id and is_admin = false);

create policy "Admins can update any profile"
  on public.profiles for update
  using (public.is_admin());

-- orders
create policy "Users can read own orders"
  on public.orders for select
  using (auth.uid() = user_id or public.is_admin());

create policy "Admins can insert orders"
  on public.orders for insert
  with check (public.is_admin());

create policy "Admins can update orders"
  on public.orders for update
  using (public.is_admin());

-- reviews
create policy "Anyone can read approved reviews"
  on public.reviews for select
  using (approved = true or auth.uid() = user_id or public.is_admin());

create policy "Users can submit review for their completed order"
  on public.reviews for insert
  with check (
    auth.uid() = user_id
    and exists (
      select 1 from public.orders
      where id = order_id
        and user_id = auth.uid()
        and status = 'completed'
    )
  );

create policy "Admins can update reviews"
  on public.reviews for update
  using (public.is_admin());

create policy "Admins can delete reviews"
  on public.reviews for delete
  using (public.is_admin());
