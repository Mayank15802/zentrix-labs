'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap, Award, Globe, BookOpen } from 'lucide-react';
import CustomCursor from '@/components/ui/CustomCursor';
import Link from 'next/link';

export default function About() {
  const WHATSAPP_LINK = "https://wa.me/918278816103";

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <CustomCursor />
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 blur-[200px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[200px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 flex justify-between items-center max-w-7xl mx-auto backdrop-blur-md bg-black/10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-2xl text-white">Z</div>
          <span className="font-outfit font-bold text-2xl tracking-tighter uppercase">Zentrix <span className="text-accent">Labs</span></span>
        </Link>
        <div className="flex gap-10 items-center font-medium text-sm tracking-widest uppercase text-white/60">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <button 
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-white transition-all"
          >
            Inquire
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-block px-6 py-2 glass rounded-full text-accent font-bold text-xs tracking-[0.4em] uppercase mb-8"
        >
          Our Origin & Vision
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-black font-outfit mb-10 tracking-tight leading-none text-glow">The DNA of <span className="text-accent">Innovation</span></h1>
        <p className="text-white/40 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
          Founded by IITians with a mission to bridge the gap between complex engineering and real-world business success.
        </p>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
                <div className="space-y-4">
                    <span className="text-accent font-bold text-sm tracking-[0.3em] uppercase">The Founder's Journey</span>
                    <h2 className="text-4xl md:text-6xl font-black font-outfit leading-tight">Precision Roots, <br />Global <span className="text-white/20">Aspiration</span></h2>
                </div>
                <div className="space-y-8 text-white/60 text-lg md:text-xl leading-relaxed">
                    <p>
                        Zentrix Labs was born from a singular observation: while the world was overflowing with generic digital agencies, there was a profound lack of partners who combined elite engineering precision with a deep understanding of business scalability. Our founder, an IITian with a background in complex systems and high-scale software architecture, built Zentrix Labs to be the antidote to 'status quo' development. We don't just 'build apps'; we engineer the mission-critical digital hearts of modern enterprises.
                    </p>
                    <p>
                        Our engineering philosophy is rooted in the rigorous standards of India's premier technical institutions. We approach every problem through a first-principles lens, stripping away unnecessary complexity to deliver solutions that are not only aesthetically stunning but technically bulletproof. This commitment to 'Precision Engineering' has allowed us to scale from local projects to serving global brands, maintaining a 99.9% system uptime and consistently over-delivering on performance metrics.
                    </p>
                    <p>
                        Today, Zentrix Labs stands as a beacon for businesses that are serious about their digital future. Whether we are automating an enterprise's biometric security flow or architecting a neural-enhanced e-commerce engine, our goal remains unchanged: to empower our clients with technology that isn't just a cost, but a powerful, compounding asset for their growth. We are not just your developers; we are your strategic technology partners, dedicated to engineering your market dominance.
                    </p>
                </div>
            </div>
            
            <div className="relative">
                <div className="aspect-[4/5] glass rounded-[60px] overflow-hidden border border-white/10 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-900/10" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center">
                        <Award className="w-24 h-24 text-accent/20 mb-8" />
                        <h3 className="text-5xl font-black font-outfit mb-4">IITian <br /> Excellence</h3>
                        <p className="text-white/40 uppercase tracking-[0.4em] text-xs font-bold">Standard of Integrity</p>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-accent/20 rounded-tr-[40px]" />
                    <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-accent/20 rounded-bl-[40px]" />
                </div>
            </div>
        </div>
      </section>

      {/* Philosophy Icons */}
      <section className="py-40 bg-[#020202] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
                {
                    title: "First-Principles Thinking",
                    icon: <Target className="w-10 h-10 text-accent" />,
                    desc: "We strip every problem down to its fundamental truths, ensuring that our solutions solve the core issue rather than just treating the symptoms."
                },
                {
                    title: "Unwavering Scalability",
                    icon: <Zap className="w-10 h-10 text-yellow-400" />,
                    desc: "Our architectures are built for the future. We anticipate growth, ensuring your systems handle 100x traffic without a millisecond of lag."
                },
                {
                    title: "Strategic Partnership",
                    icon: <Shield className="w-10 h-10 text-green-400" />,
                    desc: "We prioritize your long-term success over short-term gains, operating as an extension of your own team to ensure total technical alignment."
                }
            ].map((item, i) => (
                <div key={i} className="space-y-6 group">
                    <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-outfit">{item.title}</h3>
                    <p className="text-white/40 leading-relaxed font-light">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-black font-outfit mb-12 tracking-tight">Partner with <br /> <span className="text-accent">Elite Engineering</span></h2>
        <button 
           onClick={() => window.open(WHATSAPP_LINK, '_blank')}
           className="px-12 py-6 bg-accent text-white font-bold text-xl rounded-full hover:shadow-[0_0_50px_rgba(0,128,255,0.8)] transition-all"
        >
            Start Your Story
        </button>
      </section>

      <footer className="py-20 text-center text-white/10 text-[10px] font-bold uppercase tracking-[0.4em] bg-black">
         © 2026 Zentrix Labs. Precision Crafted by Mayank Dogra.
      </footer>
    </main>
  );
}
