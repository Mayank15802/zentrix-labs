'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Edit2, Trash2, X, Save, Code, Zap, Palette, Server, Globe, Database, Smartphone } from 'lucide-react';

type Service = {
  id: string;
  title: string;
  short_desc: string;
  long_desc: string;
  icon_name: string;
  bg_gradient: string;
};

// Available icons mapping for UI rendering
export const IconMap: Record<string, React.FC<any>> = {
  Code, Zap, Palette, Server, Globe, Database, Smartphone
};

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState<Partial<Service>>({});

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('services').select('*').order('created_at', { ascending: true });
    if (data) setServices(data);
    if (error) console.error(error);
    setLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentService.id) {
      await supabase.from('services').update(currentService as Service).eq('id', currentService.id);
    } else {
      await supabase.from('services').insert([currentService as Service]);
    }
    setIsEditing(false);
    fetchServices();
  };

  const handleDelete = async (id: string) => {
    if(confirm("Are you sure you want to delete this service?")) {
      await supabase.from('services').delete().eq('id', id);
      fetchServices();
    }
  };

  const openEditor = (service?: Service) => {
    if (service) {
      setCurrentService(service);
    } else {
      setCurrentService({ title: '', short_desc: '', long_desc: '', icon_name: 'Code', bg_gradient: 'from-blue-500/20 to-purple-500/20' });
    }
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <div className="p-10 text-white font-outfit max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-black">{currentService.id ? 'Edit Service' : 'New Service'}</h1>
          <button onClick={() => setIsEditing(false)} className="p-2 glass rounded-full hover:bg-white/10 transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSave} className="space-y-6 glass border border-white/10 p-8 rounded-3xl">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Service Title</label>
            <input required type="text" value={currentService.title || ''} onChange={e => setCurrentService({...currentService, title: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Icon Symbol</label>
              <select 
                value={currentService.icon_name || 'Code'} 
                onChange={e => setCurrentService({...currentService, icon_name: e.target.value})} 
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium text-white"
              >
                {Object.keys(IconMap).map(icon => (
                  <option key={icon} value={icon}>{icon}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Background Gradient</label>
              <input required type="text" value={currentService.bg_gradient || ''} onChange={e => setCurrentService({...currentService, bg_gradient: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium" placeholder="from-blue-500/20 to-purple-500/20" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Short Catchy Description</label>
            <textarea required rows={2} value={currentService.short_desc || ''} onChange={e => setCurrentService({...currentService, short_desc: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium" />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Deep Technical / Business Value Description</label>
            <textarea required rows={4} value={currentService.long_desc || ''} onChange={e => setCurrentService({...currentService, long_desc: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium" />
          </div>

          <button type="submit" className="w-full py-4 bg-accent rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,128,255,0.4)] transition-all flex justify-center items-center gap-2">
            <Save className="w-5 h-5" /> Save Service Card
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-10 text-white font-outfit max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-black mb-2">Service Offerings</h1>
          <p className="text-white/40 uppercase tracking-widest text-sm font-bold">Manage the services displayed on your site</p>
        </div>
        <button onClick={() => openEditor()} className="px-6 py-3 bg-accent rounded-xl hover:shadow-[0_0_30px_rgba(0,128,255,0.4)] transition-colors text-sm font-bold flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      {loading ? (
        <p className="text-white/40">Loading services...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(svc => {
            const IconComponent = IconMap[svc.icon_name] || Code;
            return (
              <div key={svc.id} className={`glass border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.bg_gradient} opacity-20 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
                  <p className="text-white/60 text-sm line-clamp-3">{svc.short_desc}</p>
                </div>

                <div className="mt-8 flex gap-3 relative z-10 border-t border-white/10 pt-6">
                  <button onClick={() => openEditor(svc)} className="flex-1 py-3 bg-white/10 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                    <Edit2 className="w-4 h-4" /> Edit
                  </button>
                  <button onClick={() => handleDelete(svc.id)} className="w-14 py-3 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500/20 transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
}
