'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-ivory dark:bg-charcoal-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-6">تواصل معنا</h1>
          <p className="text-xl text-charcoal-800 dark:text-white/80 font-plex max-w-2xl mx-auto">
            نحن هنا لنستمع إلى تحدياتك، ونبني معاً مساراً نحو التميز التشغيلي والنمو المستدام.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-primary-900 dark:text-accent-400 mb-8">معلومات التواصل</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-charcoal-800 text-primary-900 dark:text-accent-500 flex items-center justify-center shrink-0 border dark:border-white/5">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-2">العنوان</h3>
                  <p className="text-charcoal-800 dark:text-white/80 font-plex leading-relaxed">
                    طرابلس، ليبيا<br />
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-charcoal-800 text-primary-900 dark:text-accent-500 flex items-center justify-center shrink-0 border dark:border-white/5">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-2">الهاتف</h3>
                  <p className="text-charcoal-800 dark:text-white/80 font-plex" dir="ltr">
                    +218 XX XXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-charcoal-800 text-primary-900 dark:text-accent-500 flex items-center justify-center shrink-0 border dark:border-white/5">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-2">البريد الإلكتروني</h3>
                  <p className="text-charcoal-800 dark:text-white/80 font-plex">
                    info@rakiza.ly
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary-900 dark:bg-charcoal-800 rounded-3xl text-white border dark:border-white/10">
              <h3 className="text-xl font-bold mb-4">ساعات العمل</h3>
              <ul className="space-y-3 font-plex text-white/80">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>الأحد - الخميس</span>
                  <span>09:00 ص - 05:00 م</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>الجمعة - السبت</span>
                  <span>مغلق</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-charcoal-800 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 dark:border-white/10"
          >
            <h2 className="text-3xl font-bold text-primary-900 dark:text-white mb-8">أرسل رسالة</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-charcoal-800 dark:text-white/90 mb-2">الاسم الكامل *</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all font-plex bg-slate-50 dark:bg-charcoal-900 focus:bg-white dark:focus:bg-charcoal-900/80 dark:text-white"
                    placeholder="أدخل اسمك الكريم"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-charcoal-800 dark:text-white/90 mb-2">الجهة / الشركة</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all font-plex bg-slate-50 dark:bg-charcoal-900 focus:bg-white dark:focus:bg-charcoal-900/80 dark:text-white"
                    placeholder="اسم شركتك"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-charcoal-800 dark:text-white/90 mb-2">البريد الإلكتروني *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all font-plex bg-slate-50 dark:bg-charcoal-900 focus:bg-white dark:focus:bg-charcoal-900/80 dark:text-white"
                    placeholder="example@domain.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-charcoal-800 dark:text-white/90 mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all font-plex bg-slate-50 dark:bg-charcoal-900 focus:bg-white dark:focus:bg-charcoal-900/80 dark:text-white text-right"
                    placeholder="09X XXX XXXX"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-charcoal-800 dark:text-white/90 mb-2">الموضوع</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all font-plex bg-slate-50 dark:bg-charcoal-900 focus:bg-white dark:focus:bg-charcoal-900/80 dark:text-white"
                  placeholder="موضوع الرسالة"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-charcoal-800 dark:text-white/90 mb-2">الرسالة *</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all font-plex bg-slate-50 dark:bg-charcoal-900 focus:bg-white dark:focus:bg-charcoal-900/80 dark:text-white resize-none"
                  placeholder="كيف يمكننا مساعدتك؟"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-accent-500/30 dark:shadow-none"
              >
                <span>إرسال الرسالة</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
