'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { ShieldAlert } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-outfit p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-accent/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center font-bold text-4xl text-white mx-auto mb-6">Z</div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">Zentrix <span className="text-accent">Admin</span></h1>
          <p className="text-white/40 mt-2 text-sm tracking-[0.2em] uppercase font-bold">Secure Authorization Required</p>
        </div>

        <form onSubmit={handleLogin} className="glass rounded-[40px] p-10 border border-white/10 space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm font-bold flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 flex-shrink-0" /> {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] font-bold text-white/50">Admin Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white font-medium"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] font-bold text-white/50">Master Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white font-medium"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-accent rounded-xl text-white font-bold hover:shadow-[0_0_30px_rgba(0,128,255,0.4)] transition-all disabled:opacity-50 mt-4"
          >
            {loading ? 'Authenticating...' : 'Enter System'}
          </button>
        </form>
      </div>
    </div>
  );
}
