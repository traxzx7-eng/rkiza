'use client';
import { motion } from 'framer-motion';
import { Droplet, Landmark, Radio, HardHat, Globe2, Briefcase } from 'lucide-react';

const sectors = [
  {
    num: '01',
    icon: Droplet,
    title: 'النفط والغاز',
    desc: 'رسم نماذج التشغيل التي تلبي أعلى متطلبات الامتثال والسلامة الفنية، تعزيز الكفاءة التشغيلية والخدمات في إدارة العقود والحوكمة الاستشارية.',
  },
  {
    num: '02',
    icon: Landmark,
    title: 'الحكومة والقطاع العام',
    desc: 'تحديث الكيانات العامة وصنع قرارات تشكيل النتائج ومصاحبة الوزارات والهيئات والمؤسسات السيادية في التخطيط الاستراتيجي والحوكمة الفعالة.',
  },
  {
    num: '03',
    icon: Radio,
    title: 'الاتصالات',
    desc: 'تشهد تكنولوجيات الاتصالات والبيانات تحولات متسارعة، ندعم المشغلين ومؤسسات القطاع في التحول الرقمي الشامل.',
  },
  {
    num: '04',
    icon: HardHat,
    title: 'البناء والبنية التحتية',
    desc: 'تطلب مشاريع البنية التحتية الكبرى والإنشاءات والخدمات الفنية إدارة احترافية وعقود محكمة للتعامل مع بيئات التنفيذ المعقدة.',
  },
  {
    num: '05',
    icon: Globe2,
    title: 'المنظمات الدولية',
    desc: 'التعاون المتزايد للمنظمات الدولية والإقليمية مع الهيئات الحكومية الليبية ومؤسسات المجتمع المدني لدعم جهود التنمية والتحول الاقتصادي.',
  },
  {
    num: '06',
    icon: Briefcase,
    title: 'الأعمال والتجارة',
    desc: 'تواجه الشركات الناشئة والمتوسطة والكبرى في القطاع الخاص تحديات استراتيجية ومالية وتنظيمية مستمرة للنمو والاستدامة وتطوير أعمالها.',
  },
];

export default function Sectors() {
  return (
    <div className="min-h-screen bg-ivory pt-24 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-primary-900 rounded-b-[4rem] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 pt-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">القطاعات والخبرات النامية</h1>
          <p className="text-lg text-primary-100 font-plex">
            خبرات متعمقة ومصممة خصيصاً لتلبية متطلبات وتحديات كل قطاع على حدة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.num}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg shadow-charcoal-900/5 hover:shadow-xl transition-all border border-slate-100 group relative overflow-hidden"
              >
                <div className="absolute -left-12 -top-12 text-slate-50 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-0">
                  <Icon size={160} strokeWidth={1} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-900 flex items-center justify-center group-hover:bg-primary-900 group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-bold text-slate-200 group-hover:text-accent-400 transition-colors">{sector.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">{sector.title}</h3>
                  <p className="text-charcoal-800 text-sm leading-relaxed font-plex">{sector.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
