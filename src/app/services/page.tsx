'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, MessageSquare, Zap } from 'lucide-react';
import { IconMap } from '@/app/admin/services/page';
import { supabase } from '@/lib/supabase';
import CustomCursor from '@/components/ui/CustomCursor';
import Link from 'next/link';

export default function Services() {
  const [services, setServices] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [servicesRes, settingsRes] = await Promise.all([
        supabase.from('services').select('*').order('created_at', { ascending: true }),
        supabase.from('settings').select('*').eq('id', 1).single()
      ]);
      
      if (servicesRes.data) setServices(servicesRes.data);
      if (settingsRes.data) setSettings(settingsRes.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const WHATSAPP_LINK = `https://wa.me/${settings.whatsapp_number || '918278816103'}`;
  const EMAIL_LINK = `mailto:${settings.email_address || 'mayank.dogra.developer@gmail.com'}`;
  const INSTAGRAM_LINK = settings.instagram_link || 'https://www.instagram.com/zentrix_labs/';

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <CustomCursor />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-accent mb-8">
            <Zap className="w-4 h-4" />
            Specialized Services
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-outfit mb-10 tracking-tight leading-none text-glow">How We Scale Your business With <span className="text-accent">Technology</span></h1>
          <p className="text-white/40 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light">
            We don't build websites. We engineer mission-critical, high-performance digital ecosystems designed to dominate.
          </p>
        </motion.div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10 space-y-32">
        {loading ? (
          <div className="text-center text-white/40 font-bold tracking-widest uppercase">Loading Architectures...</div>
        ) : services.length === 0 ? (
          <div className="text-center text-white/40 font-bold tracking-widest uppercase">No services configured yet.</div>
        ) : (
          services.map((service, idx) => {
            const IconComponent = IconMap[service.icon_name] || IconMap.Code;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Index & Visual */}
                <div className="lg:col-span-5 relative">
                  <div className={`aspect-square glass rounded-[40px] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bg_gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                    <span className="absolute top-8 left-8 text-6xl font-black text-white/5 font-outfit uppercase">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <IconComponent className="w-24 h-24 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black font-outfit leading-tight">{service.title}</h2>
                    <p className="text-xl text-accent font-medium tracking-wide">{service.short_desc}</p>
                  </div>

                  <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light">
                    {service.long_desc.split('\n').map((paragraph: string, i: number) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="pt-8">
                    <Link href="/contact" className="inline-flex items-center gap-3 text-white font-bold hover:text-accent transition-colors group">
                      <span className="uppercase tracking-[0.2em] text-sm hidden md:inline">Request Specification</span>
                      <span className="uppercase tracking-[0.2em] text-sm md:hidden">Details</span>
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                        <ArrowLeft className="w-4 h-4 rotate-135" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </section>

      {/* CTA Line */}
      <section className="py-40 border-t border-white/5 bg-[#020202] text-center px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black font-outfit mb-8">Ready to Elevate Your Infrastructure?</h2>
          <div className="flex justify-center gap-6 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
             <button onClick={() => window.open(WHATSAPP_LINK)} className="hover:text-accent transition-colors">WhatsApp Consult</button>
             <span>|</span>
             <button onClick={() => window.open(INSTAGRAM_LINK)} className="hover:text-accent transition-colors">Instagram Direct</button>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase">Connect Directly</p>
            <button 
              onClick={() => window.location.href = EMAIL_LINK}
              className="px-10 py-5 glass border border-white/10 rounded-2xl text-white font-bold hover:bg-white hover:text-black transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(0,128,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
            >
              <MessageSquare className="w-5 h-5" /> Email Our Strategy Team
            </button>
          </div>
      </section>
    </main>
  );
}
