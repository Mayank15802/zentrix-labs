'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Save } from 'lucide-react';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    whatsapp_number: '',
    phone_number: '',
    email_address: '',
    instagram_link: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('settings').select('*').eq('id', 1).single();
    if (data) setSettings(data);
    if (error) console.error(error);
    setLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    
    const { error } = await supabase.from('settings').update(settings).eq('id', 1);
    
    if (error) {
      setMessage('Error updating settings: ' + error.message);
    } else {
      setMessage('Settings updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
    setSaving(false);
  };

  if (loading) return <div className="p-10 text-white/40">Loading settings...</div>;

  return (
    <div className="p-10 text-white font-outfit max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-2">Global Settings</h1>
      <p className="text-white/40 uppercase tracking-widest text-sm font-bold mb-10">Manage site-wide contact information</p>

      {message && (
        <div className={`p-4 mb-6 rounded-xl font-bold ${message.includes('Error') ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8 glass p-10 rounded-[30px] border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Email Address</label>
            <input 
              type="text" 
              value={settings.email_address}
              onChange={(e) => setSettings({...settings, email_address: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Display Phone Number</label>
            <input 
              type="text" 
              value={settings.phone_number}
              onChange={(e) => setSettings({...settings, phone_number: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">WhatsApp Number (For Links)</label>
            <input 
              type="text" 
              value={settings.whatsapp_number}
              onChange={(e) => setSettings({...settings, whatsapp_number: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white font-medium"
            />
            <p className="text-white/20 text-xs">Ex: 918278816103 (Include country code, no '+')</p>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Instagram URL</label>
            <input 
              type="text" 
              value={settings.instagram_link}
              onChange={(e) => setSettings({...settings, instagram_link: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white font-medium"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={saving}
          className="px-8 py-4 bg-accent rounded-xl text-white font-bold hover:shadow-[0_0_30px_rgba(0,128,255,0.4)] transition-all flex items-center justify-center gap-3 w-full md:w-auto mt-8 disabled:opacity-50"
        >
          {saving ? 'Saving...' : <><Save className="w-5 h-5" /> Save Global Settings</>}
        </button>
      </form>
    </div>
  );
}
