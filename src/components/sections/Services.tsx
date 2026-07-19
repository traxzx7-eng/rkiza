"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { Briefcase, LineChart, ShieldCheck, Settings, Cpu } from "lucide-react";

const icons = [Briefcase, LineChart, ShieldCheck, Settings, Cpu];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy-900 font-tajawal mb-6"
          >
            {content.services.title}
          </motion.h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.items.map((service, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-navy-900/5 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-navy-900 text-white rounded-xl flex items-center justify-center group-hover:bg-gold-500 transition-colors shadow-lg">
                    <Icon size={24} />
                  </div>
                  <span className="text-4xl font-black text-slate-200 group-hover:text-gold-500/20 transition-colors">{service.id}</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 font-tajawal mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-100 text-center"
        >
          <p className="text-slate-500 font-medium inline-block bg-slate-50 px-6 py-3 rounded-full text-sm">
            {content.services.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
