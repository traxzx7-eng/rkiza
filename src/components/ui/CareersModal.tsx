"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Send } from "lucide-react";

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CareersModal({ isOpen, onClose }: CareersModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="glass-dark relative w-full max-w-lg rounded-3xl p-8 overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
            >
              <X size={20} />
            </button>

            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white font-tajawal mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-slate-300">سنتواصل معك في أقرب وقت ممكن.</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white font-tajawal mb-2">انضم لفريق ركيزة</h3>
                  <p className="text-slate-400 text-sm">أرسل بياناتك وسيرتك الذاتية لبناء مسيرة مهنية استثنائية.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">الاسم الكامل</label>
                    <input required type="text" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-slate-600" placeholder="محمد أحمد" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">البريد الإلكتروني</label>
                      <input required type="email" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-all placeholder:text-slate-600" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">رقم الهاتف</label>
                      <input required type="tel" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-all placeholder:text-slate-600" placeholder="+218 9X XXX XXXX" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">رسالة مختصرة (اختياري)</label>
                    <textarea rows={3} className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-all placeholder:text-slate-600" placeholder="تحدث باختصار عن شغفك وتجربتك..."></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">السيرة الذاتية</label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-gold-500/50 hover:bg-white/5 transition-all cursor-pointer group">
                      <Upload className="mx-auto text-slate-500 group-hover:text-gold-500 mb-2 transition-colors" size={24} />
                      <p className="text-sm text-slate-400 group-hover:text-slate-300">اضغط لرفع ملف (PDF, DOCX)</p>
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 rounded-xl mt-4 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : "إرسال الطلب"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
