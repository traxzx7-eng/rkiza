"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";

export default function CeoMessage() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
              <div className="text-gold-500 text-6xl font-serif leading-none mb-4">"</div>
              <p className="text-xl md:text-2xl text-navy-900 font-bold font-tajawal leading-snug mb-8">
                {content.ceo.highlight}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-ibm-plex">
                {content.ceo.message}
              </p>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="font-bold text-navy-900 font-tajawal">{content.ceo.name.split(" — ")[0]}</p>
                <p className="text-sm text-slate-500">{content.ceo.name.split(" — ")[1]}</p>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gold-500/20 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="aspect-[4/5] bg-navy-900 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
