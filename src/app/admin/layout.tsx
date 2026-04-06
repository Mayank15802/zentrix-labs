'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Users, Folders, Megaphone, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (!session && pathname !== '/admin/login') {
        router.push('/admin/login');
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session && pathname !== '/admin/login') {
        router.push('/admin/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [pathname, router]);

  if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-outfit text-2xl font-bold">Authenticating...</div>;

  if (!session && pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-black text-white flex font-outfit">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#050505] p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-xl text-white">Z</div>
          <span className="font-bold text-xl tracking-tighter uppercase">Admin <span className="text-accent">Panel</span></span>
        </div>

        <button 
          onClick={async () => {
            await supabase.auth.signOut();
            router.push('/');
          }}
          className="mb-8 w-full py-2 bg-white/5 border border-white/10 rounded-lg text-center text-xs font-bold uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all flex justify-center items-center gap-2"
        >
          <LogOut className="w-4 h-4" /> Exit to Website
        </button>

        <nav className="space-y-2 flex-grow">
          <Link href="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${pathname === '/admin' ? 'bg-accent/10 text-accent font-bold' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
             <Users className="w-5 h-5" /> Leads
          </Link>
          <Link href="/admin/projects" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${pathname === '/admin/projects' ? 'bg-accent/10 text-accent font-bold' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
             <Folders className="w-5 h-5" /> Projects
          </Link>
          <Link href="/admin/services" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${pathname === '/admin/services' ? 'bg-accent/10 text-accent font-bold' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
             <Megaphone className="w-5 h-5" /> Services
          </Link>
          <Link href="/admin/settings" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${pathname === '/admin/settings' ? 'bg-accent/10 text-accent font-bold' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
             <Settings className="w-5 h-5" /> Global Settings
          </Link>
        </nav>

        <button 
          onClick={async () => await supabase.auth.signOut()}
          className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors mt-auto font-medium"
        >
          <LogOut className="w-5 h-5" /> Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
