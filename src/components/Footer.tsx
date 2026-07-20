import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-900 text-ivory pt-16 pb-8 border-t-4 border-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                className="w-10 h-10 object-contain rounded-lg shadow-sm bg-white p-1" 
                alt="ركيزة" 
              />
              <span className="text-xl font-bold text-white font-sans tracking-tight">الركيزة الدائمة</span>
            </div>
            <p className="text-sm text-gray-400 font-plex leading-relaxed">
              استشارات استراتيجية واستشارات استثمارية لجيل جديد من الأعمال الليبية.
              <br />
              <span className="text-accent-400 font-medium mt-2 block text-xs">
                خبرة محلية بمعايير عالمية — Local knowledge, international standards.
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-accent-400 transition-colors">الرئيسية</Link></li>
              <li><Link href="/services" className="hover:text-accent-400 transition-colors">خدماتنا</Link></li>
              <li><Link href="/sectors" className="hover:text-accent-400 transition-colors">القطاعات</Link></li>
              <li><Link href="/careers" className="hover:text-accent-400 transition-colors">التوظيف</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-4">معلومات التواصل</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                <span>طرابلس - ليبيا، شارع جرابة، منطقة بن عاشور</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@rakiza.ly" className="hover:text-accent-400 transition-colors" dir="ltr">info@rakiza.ly</a>
                  <a href="mailto:careers@rakiza.ly" className="hover:text-accent-400 transition-colors" dir="ltr">careers@rakiza.ly</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-500 shrink-0" />
                <a href="tel:+218912200921" className="hover:text-accent-400 transition-colors" dir="ltr">+218 91 220 0921</a>
              </li>
            </ul>

            {/* Interactive Map Placeholder */}
            <div className="mt-6 w-full h-32 bg-primary-800 rounded-lg overflow-hidden relative border border-primary-800">
              {/* Fake Map Background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#14b8a6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-accent-500/30 text-xs text-accent-400 flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> موقعنا على الخريطة
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-primary-800 text-center text-sm text-primary-100/60">
          <p>© 2026 الركيزة الدائمة للخدمات الفنية والاستشارية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
