'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MessageSquare, Globe, Building2, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import CustomCursor from '@/components/ui/CustomCursor';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const WHATSAPP_LINK = "https://wa.me/918278816103";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: supaError } = await supabase
        .from('leads')
        .insert([formData]);

      if (supaError) throw supaError;
      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError('Could not submit. Check your Supabase credentials or try again later.');
    } finally {
      setLoading(false);
    }
  };

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
            className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-105"
          >
            WhatsApp
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
          Secure Project Inquiry
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-black font-outfit mb-10 tracking-tight leading-none text-glow">Start Your <span className="text-accent">Blueprint</span></h1>
        <p className="text-white/40 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light">
          Fill out the secure form below to initiate an elite technical consultation for your project.
        </p>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto relative z-10">
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-20 text-center space-y-8 border border-accent/20"
          >
            <CheckCircle className="w-24 h-24 text-accent mx-auto" />
            <h2 className="text-4xl font-bold font-outfit">Inquiry Logged</h2>
            <p className="text-white/60 text-lg">Our strategy team has received your metadata. We'll be in touch within 24 operational hours.</p>
            <button 
               onClick={() => setSubmitted(false)}
               className="text-white/40 hover:text-white transition-colors underline underline-offset-4"
            >
                Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Name field */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 flex items-center gap-2">
                   <User className="w-4 h-4 text-accent" /> Full Name
                </label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent transition-all text-lg font-medium"
                  placeholder="John Doe"
                />
              </div>
              {/* Email field */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 flex items-center gap-2">
                   <Globe className="w-4 h-4 text-accent" /> Professional Email
                </label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent transition-all text-lg font-medium"
                  placeholder="john@company.com"
                />
              </div>
              {/* Company field */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 flex items-center gap-2">
                   <Building2 className="w-4 h-4 text-accent" /> Organization Name
                </label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent transition-all text-lg font-medium"
                  placeholder="Company Ltd."
                />
              </div>
              {/* Industry field */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 flex items-center gap-2">
                   <MessageSquare className="w-4 h-4 text-accent" /> Target Industry
                </label>
                <input 
                  type="text" 
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent transition-all text-lg font-medium"
                  placeholder="e.g. E-Commerce, Real Estate"
                />
              </div>
            </div>
            {/* Message field */}
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 flex items-center gap-2">
                 <MessageSquare className="w-4 h-4 text-accent" /> Project Specifications
              </label>
              <textarea 
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent transition-all text-lg font-medium resize-none"
                placeholder="Tell us about the challenges you're facing and your technical vision..."
              />
            </div>

            {error && (
              <p className="text-red-400 font-bold p-6 bg-red-500/10 rounded-2xl border border-red-500/20">{error}</p>
            )}

            <button 
              disabled={loading}
              type="submit" 
              className="w-full py-6 bg-accent rounded-full text-white font-bold text-xl hover:shadow-[0_0_50px_rgba(0,128,255,0.6)] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-4 group"
            >
              {loading ? (
                "Encrypting Payload..."
              ) : (
                <>
                  Transmit Strategy Request <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </section>

      <footer className="py-20 text-center text-white/10 text-[10px] font-bold uppercase tracking-[0.4em] bg-black">
         © 2026 Zentrix Labs. Precision Crafted by Mayank Dogra.
      </footer>
    </main>
  );
}
