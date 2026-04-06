'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Lead = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
  status: string;
};

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setLeads(data);
    if (error) console.error(error);
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase.from('leads').update({ status: newStatus }).eq('id', id);
    if (!error) {
      fetchLeads();
    }
  };

  return (
    <div className="p-10 text-white font-outfit max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-black mb-2">Project Leads</h1>
          <p className="text-white/40 uppercase tracking-widest text-sm font-bold">Review incoming inquiries</p>
        </div>
        <button onClick={fetchLeads} className="px-6 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-sm font-bold uppercase tracking-widest">
          Refresh Data
        </button>
      </div>

      {loading ? (
        <p className="text-white/40 text-lg">Loading database entries...</p>
      ) : leads.length === 0 ? (
        <div className="glass rounded-3xl p-20 text-center border border-white/5">
          <p className="text-white/40 text-xl font-medium">No leads found in the database.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {leads.map((lead) => (
            <div key={lead.id} className="glass border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{lead.name}</h2>
                    <a href={`mailto:${lead.email}`} className="text-accent underline text-lg">{lead.email}</a>
                  </div>
                  <span className="text-white/40 text-sm">{new Date(lead.created_at).toLocaleDateString()}</span>
                </div>
                
                <div className="flex gap-6 mt-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Company</p>
                    <p className="font-medium text-lg">{lead.company || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Industry</p>
                    <p className="font-medium text-lg">{lead.industry || 'N/A'}</p>
                  </div>
                </div>

                <div>
                   <p className="text-xs uppercase tracking-widest text-white/40 mb-2 mt-4">Specs & Requirements</p>
                   <div className="bg-white/5 p-4 rounded-xl text-white/80 whitespace-pre-wrap">{lead.message}</div>
                </div>
              </div>

              <div className="w-full md:w-48 flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-white/40">Status</p>
                  <select 
                    value={lead.status}
                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                    className={`w-full p-3 rounded-lg font-bold uppercase text-xs tracking-widest outline-none border focus:border-white ${
                      lead.status === 'new' ? 'bg-red-500/20 text-red-500 border-red-500/30' : 
                      lead.status === 'contacted' ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30' : 
                      'bg-green-500/20 text-green-500 border-green-500/30'
                    }`}
                  >
                    <option value="new" className="bg-black text-white">● New</option>
                    <option value="contacted" className="bg-black text-white">● Contacted</option>
                    <option value="closed" className="bg-black text-white">● Closed</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
