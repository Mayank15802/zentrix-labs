-- CMS Configuration Tables

-- 1. Site Settings (Phone, WhatsApp, Instagram)
create table if not exists public.settings (
  id integer primary key default 1,
  whatsapp_number text not null default '918278816103',
  phone_number text not null default '+91 8278816103',
  email_address text not null default 'mayank.dogra.developer@gmail.com',
  instagram_link text not null default 'https://www.instagram.com/zentrix_labs/'
);

-- Insert the default row
insert into public.settings (id) values (1) on conflict (id) do nothing;

-- 2. Projects Table
create table if not exists public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  category text not null,
  challenge text not null,
  solution text not null,
  result text not null,
  tech_stack text[] not null default '{}',
  image_url text
);

-- 3. Services Table
create table if not exists public.services (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  short_desc text not null,
  long_desc text not null,
  icon_name text not null default 'Code',
  bg_gradient text not null default 'from-blue-500/20 to-purple-500/20'
);

-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

-- Enable RLS on all tables
alter table public.settings enable row level security;
alter table public.projects enable row level security;
alter table public.services enable row level security;

-- PUBLIC READ ACCESS: Anyone can read settings, projects, and services
create policy "Allow public read settings" on public.settings for select using (true);
create policy "Allow public read projects" on public.projects for select using (true);
create policy "Allow public read services" on public.services for select using (true);

-- ADMIN FULL ACCESS: Only logged-in users (you) can insert, update, or delete
create policy "Allow admin full access settings" on public.settings for all using (auth.uid() is not null);
create policy "Allow admin full access projects" on public.projects for all using (auth.uid() is not null);
create policy "Allow admin full access services" on public.services for all using (auth.uid() is not null);
