-- Create the leads table for Zentrix Labs contact forms
create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  company text,
  industry text,
  message text,
  status text default 'new' -- new, contacted, closed
);

-- Enable RLS (Row Level Security)
alter table public.leads enable row level security;

-- Create policy to allow anonymous inserts (for public contact form)
create policy "Allow anonymous submissions" 
on public.leads for insert 
with check (true);

-- Create policy to allow authenticated reads (for your future admin dashboard)
create policy "Allow authenticated reads" 
on public.leads for select 
using (auth.uid() is not null);
