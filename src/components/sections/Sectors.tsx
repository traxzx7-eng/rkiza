"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";

export default function Sectors() {
  return (
    <section id="sectors" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMjAyRjQyIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0zMC41IDBMNTggMTQuNVY0NS41TDMwLjUgNjAgMyA0NS41VjE0LjV6Ii8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-tajawal mb-4"
            >
              {content.sectors.title}
            </motion.h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.sectors.items.map((sector, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              className="bg-navy-800/50 backdrop-blur-sm border border-navy-700/50 p-8 rounded-2xl hover:bg-navy-800 hover:border-gold-500/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-gold-500 font-tajawal mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-500 group-hover:scale-150 transition-transform"></span>
                {sector.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
