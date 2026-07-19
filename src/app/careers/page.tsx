'use client';
import { motion } from 'framer-motion';
import { UploadCloud, Send, User, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Careers() {
  const [fileName, setFileName] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex items-center pt-20 pb-16">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-primary-900 z-0">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #14b8a6 0%, transparent 50%)', backgroundSize: '100% 100%' }}></div>
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent-500/20 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teal-500/20 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            نبني صرحاً استثنائياً<br/>
            <span className="text-accent-400 text-3xl md:text-4xl">اصنع مستقبل الأعمال في ليبيا.</span>
          </h1>
          <p className="text-primary-50 font-plex text-lg">
            نبحث دائماً عن الكفاءات الاستثنائية التي تشاركنا رؤيتنا وشغفنا بالتميز.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-dark rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-50"></div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 block" htmlFor="name">الاسم الكامل</label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-white/40">
                    <User className="h-5 w-5" />
                  </div>
                  <input 
                    type="text" 
                    id="name"
                    className="block w-full pl-3 pr-10 py-3 border border-white/10 rounded-xl leading-5 bg-white/5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all font-sans"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 block" htmlFor="phone">رقم الهاتف</label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-white/40">
                    <Phone className="h-5 w-5" />
                  </div>
                  <input 
                    type="tel" 
                    id="phone"
                    className="block w-full pl-3 pr-10 py-3 border border-white/10 rounded-xl leading-5 bg-white/5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all font-sans"
                    placeholder="رقم الهاتف"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 block" htmlFor="email">البريد الإلكتروني</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-white/40">
                  <Mail className="h-5 w-5" />
                </div>
                <input 
                  type="email" 
                  id="email"
                  className="block w-full pl-3 pr-10 py-3 border border-white/10 rounded-xl leading-5 bg-white/5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all font-sans text-left"
                  placeholder="example@domain.com"
                  dir="ltr"
                />
              </div>
            </div>

            {/* CV Upload */}
            <div className="space-y-2 pt-2">
              <label className="text-sm font-medium text-white/80 block">السيرة الذاتية (CV)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white/20 border-dashed rounded-xl hover:bg-white/5 hover:border-accent-400 transition-all group relative cursor-pointer">
                <input 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFileName(e.target.files[0].name);
                    }
                  }}
                />
                <div className="space-y-2 text-center">
                  <div className="mx-auto h-12 w-12 text-white/40 group-hover:text-accent-400 transition-colors flex items-center justify-center bg-white/5 rounded-full mb-4">
                    <UploadCloud className="h-6 w-6" />
                  </div>
                  <div className="text-sm text-white/70">
                    <span className="text-accent-400 font-bold group-hover:underline">اضغط هنا لرفع الملف</span> أو قم بسحبه وإفلاته
                  </div>
                  <p className="text-xs text-white/40 font-plex">
                    PDF, DOC, DOCX حتى 10 ميجابايت
                  </p>
                  {fileName && (
                    <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-accent-500/20 text-accent-300 text-xs font-medium border border-accent-500/30">
                      {fileName}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal-900 focus:ring-accent-500 transition-all active:scale-[0.98]"
              >
                إرسال الطلب
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
