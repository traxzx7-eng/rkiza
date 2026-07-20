'use client';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'الإدارات التجارية وإدارة العقود',
    desc: 'دعم المشتريات والمناقصات، صياغة ومراجعة العقود، المطالبات والنزاعات، حوكمة العقود والموردين.',
  },
  {
    num: '02',
    title: 'الاستراتيجية والاستشارات التجارية',
    desc: 'نمذجة الأعمال، دراسات الجدوى، استراتيجيات دخول السوق، التخطيط المالي وتحليل الاستثمار.',
  },
  {
    num: '03',
    title: 'الحوكمة والتطوير المؤسسي',
    desc: 'إعادة هيكلة الشركات، مراجعة وتطوير السياسات والإجراءات، إدارة التغيير، إدارة المخاطر والامتثال.',
  },
  {
    num: '04',
    title: 'إدارة المشاريع والدعم التشغيلي',
    desc: 'تأسيس مكاتب إدارة المشاريع PMO، جدولة المشاريع ومراقبة التكاليف، ضمان الجودة والامتثال، إدارة سلسلة التوريد.',
  },
  {
    num: '05',
    title: 'استشارات التحول الرقمي والتكنولوجيا',
    desc: 'استراتيجية تقنية المعلومات، اختيار أنظمة المؤسسات (ERP)، حوكمة البيانات والأمن السيبراني، أتمتة العمليات (RPA).',
  },
  {
    num: '06',
    title: 'أنظمة التكييف والسلامة (Trane)',
    desc: 'وكيل معتمد لشركة Trane العالمية لتوريد وتركيب أحدث أنظمة التدفئة، التهوية، تكييف الهواء (HVAC)، وأنظمة مكافحة الحريق المتطورة.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tight">خدماتنا الاستشارية</h1>
          <p className="text-lg text-charcoal-800 font-plex">
            نقدم حلولاً متكاملة تغطي كافة جوانب الأعمال، لضمان النمو المستدام والتشغيل الفعال.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-50 rounded-full group-hover:scale-150 transition-transform duration-500 z-0"></div>
              <div className="relative z-10 flex-grow">
                <span className="text-3xl font-bold text-accent-500 block mb-4 font-sans">{service.num}</span>
                <h3 className="text-lg font-bold text-primary-900 mb-3 leading-snug">{service.title}</h3>
                <p className="text-charcoal-800 text-sm leading-relaxed font-plex">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Ribbon */}
      <div className="bg-primary-900 text-accent-400 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm md:text-base font-bold tracking-wide">
          البحوث والتحليلات واستطلاع الآراء | التدريب والتطوير لبناء قدرات الكوادر البشرية الوطنية والشركات.
        </div>
      </div>
    </div>
  );
}
