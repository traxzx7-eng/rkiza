"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-navy-900 to-navy-900"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-tajawal mb-6 leading-tight max-w-5xl mx-auto"
        >
          {content.hero.headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-ibm-plex"
        >
          {content.hero.subheadline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#contact" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            {content.hero.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
