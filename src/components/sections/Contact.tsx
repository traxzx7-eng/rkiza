"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import { MapPin, Mail, Phone, ArrowLeft } from "lucide-react";
import CareersModal from "@/components/ui/CareersModal";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <CareersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-10 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 font-tajawal mb-8">تواصل معنا</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 mb-1">العنوان</h4>
                      <p className="text-slate-600">{content.contact.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 mb-1">البريد الإلكتروني</h4>
                      <a href={`mailto:${content.contact.email}`} className="text-slate-600 hover:text-gold-500 transition-colors" dir="ltr">{content.contact.email}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 mb-1">الهاتف</h4>
                      <a href={`tel:${content.contact.phone.replace(/\s+/g, '')}`} className="text-slate-600 hover:text-gold-500 transition-colors" dir="ltr">{content.contact.phone}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Careers Banner */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white relative overflow-hidden group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-tajawal mb-2 text-gold-500">التوظيف</h3>
                  <p className="text-slate-300 text-sm mb-6 max-w-[80%]">{content.contact.careersText}</p>
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-gold-500 transition-colors">
                    {content.contact.careersBtn} <ArrowLeft size={16} />
                  </button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-navy-800 to-navy-900 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 min-h-[400px] lg:min-h-full relative flex items-center justify-center">
              {/* Replace with actual iframe for Google Maps */}
              <div className="absolute inset-0 bg-navy-900/5 mix-blend-multiply"></div>
              <div className="text-center text-slate-500">
                <MapPin size={48} className="mx-auto mb-4 opacity-50" />
                <p className="font-medium">خريطة الموقع</p>
                <p className="text-sm mt-2 opacity-70">Google Maps Embed Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
