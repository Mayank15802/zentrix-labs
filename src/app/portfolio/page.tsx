'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, MessageSquare } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import CustomCursor from '@/components/ui/CustomCursor';
import Link from 'next/link';

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [projectsRes, settingsRes] = await Promise.all([
        supabase.from('projects').select('*').order('created_at', { ascending: false }),
        supabase.from('settings').select('*').eq('id', 1).single()
      ]);
      
      if (projectsRes.data) setProjects(projectsRes.data);
      if (settingsRes.data) setSettings(settingsRes.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const WHATSAPP_LINK = `https://wa.me/${settings.whatsapp_number || '918278816103'}`;
  const EMAIL_LINK = `mailto:${settings.email_address || 'mayank.dogra.developer@gmail.com'}`;
  const INSTAGRAM_LINK = settings.instagram_link || 'https://www.instagram.com/zentrix_labs/';

  return (
    <main className="min-h-screen bg-[#020202] text-white relative overflow-x-hidden">
      <CustomCursor />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-green-500/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-accent mb-8">
             System Deployments
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-outfit mb-10 tracking-tight leading-none text-glow uppercase">Architectures of <span className="text-accent underline decoration-4 underline-offset-8">Authority</span></h1>
          <p className="text-white/40 text-xl leading-relaxed max-w-3xl mx-auto italic font-light">
            We don't build portfolios. We build irrefutable proof of technical superiority.
          </p>
        </motion.div>
      </section>

      {/* Projects Timeline */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="space-y-40">
          {loading ? (
             <div className="text-center text-white/40 font-bold uppercase tracking-widest">Loading secure architectures...</div>
          ) : projects.length === 0 ? (
             <div className="text-center text-white/40 font-bold uppercase tracking-widest">No architectures deployed yet.</div>
          ) : (
            projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12"
              >
                {/* Visual Half */}
                <div className={`lg:col-span-7 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] glass rounded-[40px] border border-white/10 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
                    {project.image_url ? (
                      <img 
                        src={project.image_url} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/20 font-bold uppercase tracking-widest font-outfit text-2xl group-hover:scale-105 transition-transform duration-700">Classified Preview</div>
                    )}
                    
                    <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                       {project.tech_stack?.slice(0, 3).map((tech: string, i: number) => (
                         <div key={i} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">{tech}</div>
                       ))}
                       {project.tech_stack?.length > 3 && (
                         <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">+{project.tech_stack.length - 3}</div>
                       )}
                    </div>
                  </div>
                </div>

                {/* Content Half */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                   <div className="mb-8">
                     <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">{project.category}</span>
                     <h2 className="text-4xl lg:text-5xl font-black font-outfit leading-tight mb-6">{project.title}</h2>
                   </div>

                   <div className="space-y-8">
                     <div className="relative pl-6 border-l-2 border-white/10">
                       <h3 className="text-xs uppercase tracking-widest text-white/30 font-bold mb-2">The Absolute Benchmark</h3>
                       <p className="text-white/60 leading-relaxed">{project.challenge}</p>
                     </div>

                     <div className="relative pl-6 border-l-2 border-accent">
                       <h3 className="text-xs uppercase tracking-widest text-accent font-bold mb-2">Architectural Engineering</h3>
                       <p className="text-white/80 leading-relaxed font-medium">{project.solution}</p>
                     </div>
                     
                     <div className="relative pl-6 border-l-2 border-green-500/50">
                       <h3 className="text-xs uppercase tracking-widest text-green-500 font-bold mb-2">Operational Dominance</h3>
                       <p className="text-white leading-relaxed italic">{project.result}</p>
                     </div>
                   </div>

                   <div className="mt-10">
                     <Link href="/contact" className="inline-flex items-center gap-3 text-white font-bold hover:text-accent transition-colors group">
                        <span className="uppercase tracking-[0.2em] text-sm">Deploy Similar Architecture</span>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                     </Link>
                   </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CTA Line */}
      <section className="py-40 border-t border-white/5 bg-[#010101] text-center px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black font-outfit mb-8">Secure Your Market Position Today.</h2>
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
              <MessageSquare className="w-5 h-5" /> Execute Strategy Call
            </button>
          </div>
      </section>
    </main>
  );
}
