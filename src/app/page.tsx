'use client';

import React from 'react';
import Scene from '@/components/ui/HeroScene';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Code, Palette, Zap, Building2, Briefcase, Rocket, Scissors, MessageCircle, TrendingUp } from 'lucide-react';
import CustomCursor from '@/components/ui/CustomCursor';
import Link from 'next/link';

const INSTAGRAM_LINK = "https://www.instagram.com/zentrix_labs/";
const WHATSAPP_LINK = "https://wa.me/918278816103";

export default function Home() {
  const industries = [
    {
      title: "Salon & Wellness Brands",
      icon: <Scissors className="w-8 h-8 text-blue-400" />,
      desc: "Revolutionizing the grooming and beauty industry through advanced digital integration. We specialize in building low-friction booking engines and automated customer retention systems that transform casual visitors into high-LTV (Lifetime Value) clients for premium salon brands.",
      color: "from-blue-500/20 to-purple-500/20",
      longDesc: "From luxury urban retreats to boutique medical spas, we architect the digital logic that handles scheduling, recurring payments, and automated marketing, allowing your staff to focus entirely on premium service delivery without administrative friction."
    },
    {
      title: "Builders & Real Estate",
      icon: <Building2 className="w-8 h-8 text-green-400" />,
      desc: "Engineered for high-stakes property development and architectural firms. We construct high-fidelity project showcases that serve as visual authority platforms, specifically designed to capture leads from serious investors and government contractors.",
      color: "from-green-500/20 to-blue-500/20",
      longDesc: "In the competitive real estate market, your digital presence must reflect the scale and precision of your physical assets. We create high-fidelity, high-speed portfolios that project unwavering credibility and technical superiority to your target market."
    },
    {
      title: "Gaming & E-Sports",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      desc: "Delivering high-performance architecture for the competitive gaming elite. From tournament management systems to real-time community hubs, we build the low-latency infrastructure required to handle thousands of concurrent interactions with surgical precision.",
      color: "from-yellow-500/20 to-orange-500/20",
      longDesc: "Stay ahead in the rapid-deployment world of gaming with resilient systems designed for massive scale. Our engineering team ensures your platform maintains 99.9% uptime while delivering a high-fidelity experience to your most demanding users."
    },
    {
      title: "Offices & Enterprises",
      icon: <Briefcase className="w-8 h-8 text-orange-400" />,
      desc: "Eliminating operational fallibility through custom ERP systems and industrial-grade automation. We integrate biometric security and advanced HR tools directly into your office workflow, streamlining data integrity and maximizing billable workforce efficiency.",
      color: "from-orange-500/20 to-red-500/20",
      longDesc: "Manual errors are a cost your enterprise cannot afford. We develop custom software that automates hyper-specific business logic, ensuring that your data is accurate, your premises are secure, and your operations are optimized for global scale."
    },
    {
      title: "Startups & Foundations",
      icon: <Rocket className="w-8 h-8 text-pink-400" />,
      desc: "Accelerating the journey from conceptual prototype to mission-critical infrastructure. We engineer MVPs with a focus on production-ready scalability, ensuring that your technology is prepared for the millions of users your growth strategy demands.",
      color: "from-pink-500/20 to-orange-500/20",
      longDesc: "Don't let technical debt decelerate your growth. Our engineering team builds the scalable, high-performance backbone that allows your startup to pivot and scale aggressively without the need for expensive, time-consuming infrastructure rebuilds."
    },
    {
      title: "E-Commerce Giants",
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      desc: "Crafting sovereign digital marketplaces designed for aggressive conversion and massive user retention. We optimize every millisecond of the consumer journey, utilizing custom-tailored search and personalization engines to maximize order values.",
      color: "from-cyan-500/20 to-blue-500/20",
      longDesc: "Experience the revenue impact of high-converting commerce engines built free from third-party platform constraints. We provide total control over your digital storefront, ensuring a premium brand experience that drives consistent repeat business."
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 flex justify-between items-center max-w-7xl mx-auto backdrop-blur-md bg-black/10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-2xl text-white">Z</div>
          <span className="font-outfit font-bold text-2xl tracking-tighter uppercase whitespace-nowrap">Zentrix <span className="text-accent">Labs</span></span>
        </div>
        <div className="hidden md:flex gap-10 items-center font-medium text-sm tracking-widest uppercase text-white/60">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <button 
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-105"
          >
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4 pt-20">
        <Scene />
        <div className="relative z-10 text-center max-w-5xl mx-auto mt-[-10vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">Founded by IITian Experts | Scaling Global Brands</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-outfit font-black tracking-tight mb-8 leading-[0.9] text-glow"
          >
            We Build <span className="text-accent underline decoration-white/20 underline-offset-8">High-Performance</span> <br className="hidden md:block" /> Systems for Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-3xl mx-auto"
          >
            Zentrix Labs specializes in crafting scalable digital architectures and high-impact custom software for serious businesses. We don't just deliver code; we deliver digital engines built for real-world reliability and massive growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <button 
              onClick={() => window.open('https://wa.me/918278816103', '_blank')}
              className="px-10 py-5 bg-accent rounded-full font-bold text-lg flex items-center gap-3 overflow-hidden group relative shadow-[0_0_30px_rgba(0,128,255,0.4)]"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <Link 
              href="/portfolio"
              className="px-10 py-5 glass rounded-full font-bold text-lg flex items-center gap-3 border border-white/20 hover:border-white/50 transition-all hover:bg-white/5"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2, duration: 2 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 rotate-180 [writing-mode:vertical-lr]">Scroll Exploration</span>
        </motion.div>
      </section>

      {/* Built for Every Business Section */}
      <section className="py-40 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
             <h2 className="text-4xl md:text-7xl font-outfit font-black mb-8 uppercase tracking-tight">Built for <span className="text-accent underline decoration-white/10 underline-offset-8">Every Industry</span></h2>
             <p className="text-white/50 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">Whether you are a local salon or a national enterprise, we engineer digital solutions that capture your market and automate your daily complexity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -20, scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative group p-12 rounded-[40px] glass glass-hover bg-gradient-to-br ${item.color} flex flex-col h-full overflow-hidden`}
              >
                <div className="mb-10 p-6 rounded-3xl bg-black/40 w-fit group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold font-outfit mb-6 tracking-tight">{item.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <p className="text-white/30 text-sm leading-relaxed mb-10 italic">{item.longDesc}</p>
                <button 
                  onClick={() => window.open('https://wa.me/918278816103', '_blank')}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent group-hover:text-white transition-colors duration-500 text-left"
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </button>

                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Background glow enhancement */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/5 blur-[200px] rounded-full pointer-events-none" />
      </section>

      {/* Scale & Confidence Section */}
      <section className="py-40 bg-[#020202] overflow-hidden relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
               <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 glass rounded-full text-accent font-bold text-sm tracking-[0.3em] uppercase mb-10"
               >
                 Scale & Authority
               </motion.div>
               <h2 className="text-5xl md:text-8xl font-black font-outfit mb-10 leading-none">
                 <span className="text-white/20">25+</span> <br /> Successful <br /> <span className="text-glow">Deployments</span>
               </h2>
               <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-xl">
                 While most of our high-stake projects remain under strict confidentiality, our impact is felt across multiple industries. We build the silent engines that power market leaders.
               </p>
               <div className="grid grid-cols-2 gap-10">
                 <div>
                    <h4 className="text-4xl font-bold font-outfit text-white mb-2">99.9%</h4>
                    <span className="text-xs uppercase tracking-widest text-white/30 font-bold">System Uptime</span>
                 </div>
                 <div>
                    <h4 className="text-4xl font-bold font-outfit text-white mb-2">500k+</h4>
                    <span className="text-xs uppercase tracking-widest text-white/30 font-bold">Daily Active Users</span>
                 </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <div className="space-y-6">
                 <button 
                  onClick={() => window.open('https://wa.me/918278816103', '_blank')}
                  className="h-[300px] w-full text-left glass rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group"
                 >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                    <div className="relative z-20">
                       <Globe className="w-8 h-8 text-accent mb-4" />
                       <h5 className="text-xl font-bold mb-2">Global Presence</h5>
                       <p className="text-white/40 text-sm">Scaling local brands to international dominance.</p>
                    </div>
                    <div className="absolute inset-0 bg-blue-500/5 group-hover:scale-110 transition-transform duration-700" />
                 </button>
                 <button 
                  onClick={() => window.open('https://wa.me/918278816103', '_blank')}
                  className="h-[350px] w-full text-left glass rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group"
                 >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                    <div className="relative z-20">
                       <MessageCircle className="w-8 h-8 text-green-400 mb-4" />
                       <h5 className="text-xl font-bold mb-2">AI Chatbots</h5>
                       <p className="text-white/40 text-sm">Automating client intent with 24/7 intelligent engagement.</p>
                    </div>
                    <div className="absolute inset-0 bg-green-500/5 group-hover:scale-110 transition-transform duration-700" />
                 </button>
              </div>
              <div className="space-y-6 md:mt-12">
                 <button 
                  onClick={() => window.open('https://wa.me/918278816103', '_blank')}
                  className="h-[350px] w-full text-left glass rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group"
                 >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                    <div className="relative z-20">
                       <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                       <h5 className="text-xl font-bold mb-2">Business Tools</h5>
                       <p className="text-white/40 text-sm">Custom ERPs and biometrics for massive operational efficiency.</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-500/5 group-hover:scale-110 transition-transform duration-700" />
                 </button>
                 <button 
                  onClick={() => window.open('https://wa.me/918278816103', '_blank')}
                  className="h-[300px] w-full text-left glass rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group"
                 >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                    <div className="relative z-20">
                       <Rocket className="w-8 h-8 text-pink-400 mb-4" />
                       <h5 className="text-xl font-bold mb-2">Startup MVPs</h5>
                       <p className="text-white/40 text-sm">Rapid development with production-ready scalability.</p>
                    </div>
                    <div className="absolute inset-0 bg-pink-500/5 group-hover:scale-110 transition-transform duration-700" />
                 </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative */}
        <div className="absolute -left-20 top-1/2 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none rotate-12" />
      </section>

      {/* Services Grid Overlay Section */}
      <section id="services" className="py-32 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-6 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-outfit font-black mb-10 leading-tight">Digital Solutions <br /> That Actually <br /> <span className="text-white/20">Work</span></h2>
            <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-xl">We don't just build websites; we design growth-driven systems that automate your success and amplify your brand's authority.</p>
            <div className="space-y-8">
              {[
                { label: "Website Development", icon: <Globe className="w-6 h-6" /> },
                { label: "Custom Software", icon: <Code className="w-6 h-6" /> },
                { label: "UI / UX Design", icon: <Palette className="w-6 h-6" /> },
                { label: "Business Automation", icon: <Zap className="w-6 h-6" /> }
              ].map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => window.open('https://wa.me/918278816103', '_blank')}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-bold font-outfit text-white/30 group-hover:text-white transition-colors duration-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass rounded-[40px] flex items-center justify-center p-20 overflow-hidden group">
               <div className="w-full h-full bg-accent/20 rounded-[40px] blur-[80px]" />
               <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-[2px] border-dashed border-white/10 rounded-full scale-[0.6]"
               />
               <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-[2px] border-dashed border-accent/20 rounded-full scale-[0.8]"
               />
               <div className="text-center z-10">
                 <h4 className="text-9xl font-black font-outfit mb-4 opacity-10 font-outfit">IIT</h4>
                 <p className="text-sm tracking-[0.5em] font-bold text-accent uppercase">Precision Engineering</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 text-center bg-black border-t border-white/5 relative">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-8xl font-black font-outfit mb-12 tracking-tighter leading-none">Ready to <span className="text-accent">Scale?</span></h2>
            <p className="text-white/40 text-xl md:text-2xl mb-16 leading-relaxed">
              Join the 25+ businesses that have chosen Zentrix Labs for their mission-critical digital systems. Let's move your business to the next level.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => window.open('https://wa.me/918278816103', '_blank')}
                className="px-12 py-6 bg-accent text-white font-bold text-xl rounded-full hover:shadow-[0_0_50px_rgba(0,128,255,0.8)] hover:scale-105 transition-all flex items-center gap-4"
              >
                Book a Demo <Zap className="w-6 h-6 fill-white" />
              </button>
              <Link 
                href="https://www.instagram.com/zentrix_labs/" 
                target="_blank"
                className="px-12 py-6 glass border border-white/20 text-white font-bold text-xl rounded-full hover:bg-white/5 transition-all flex items-center gap-4"
              >
                Follow us @zentrix_labs <TrendingUp className="w-6 h-6" />
              </Link>
            </div>
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
               <p className="text-white/20 text-xs tracking-[0.3em] uppercase mb-4">Direct Communication</p>
               <Link 
                href="/contact"
                className="px-8 py-4 glass border border-white/10 rounded-2xl text-white font-bold hover:bg-white hover:text-black transition-all flex items-center gap-3"
               >
                 <MessageCircle className="w-5 h-5" /> Secure Project Inquiry
               </Link>
            </div>
          </div>
          {/* Background Glow */}
          <div className="absolute inset-0 bg-accent/5 blur-[200px] pointer-events-none" />
      </section>

      {/* Floating WhatsApp CTA */}
      <button
        onClick={() => window.open('https://wa.me/918278816103', '_blank')}
        className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageCircle className="w-8 h-8 text-white fill-white" />
        <span className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-sm font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Chat with Mayank</span>
      </button>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center bg-black">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-white">Z</div>
              <span className="font-outfit font-bold text-xl tracking-tighter uppercase whitespace-nowrap">Zentrix Labs</span>
            </div>
            <Link href="/admin" className="hover:text-white transition-colors cursor-pointer text-white/20 text-sm tracking-widest uppercase mb-10 block">© 2026 Zentrix Labs. Precision Crafted by IITians.</Link>
            <div className="flex justify-center gap-10 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
               <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
               <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
               <Link href={INSTAGRAM_LINK} target="_blank" className="hover:text-accent transition-colors">Instagram</Link>
            </div>
         </div>
      </footer>
    </main>
  );
}
