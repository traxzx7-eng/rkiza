'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { value: '2021', label: 'عام التأسيس والانطلاق' },
  { value: '+6', label: 'قطاعات حيوية ممتدة' },
  { value: '100%', label: 'الالتزام بالمعايير الدولية' },
];

const pillars = [
  {
    num: '01',
    title: 'الذكاء المحلي',
    desc: 'معرفة لا مثيل لها بالبيئة التنظيمية المعقدة وثقافة الأعمال وديناميكيات السوق.',
  },
  {
    num: '02',
    title: 'المعايير العالمية',
    desc: 'تتوافق منهجياتنا مع الأطر الدولية الرائدة بما في ذلك PMI و CIMA و ISO.',
  },
  {
    num: '03',
    title: 'عمق قطاعي',
    desc: 'ممارسات متخصصة في الطاقة والاستثمار والخدمات العامة والبنية التحتية والرعاية الصحية.',
  },
  {
    num: '04',
    title: 'التركيز على النتائج',
    desc: 'كل مشروع قياس نتائج ملموسة — نمو الإيرادات أو تخفيض التكاليف أو رأس المال البشري.',
  },
];

export default function Home() {
  const [ceoOpen, setCeoOpen] = useState(false);

  return (
    <>
      {/* HERO MODULE */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-ivory">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#275A53 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-primary-900 leading-[1.2] mb-8"
            >
              حين تصبح القرارات أكثر تعقيداً، تحتاج إلى ركيزة أكثر وضوحاً.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-charcoal-800 font-plex leading-relaxed mb-12 max-w-3xl"
            >
              نرفض نموذج المستشارين الذين يحطون فجأة وينشرون أخباراً جاهزة ثم يرحلون. بدلاً من ذلك نندمج مع عملائنا ونتعلم سياقهم الخاص.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-accent-500/30 text-lg">
                تواصل معنا
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-primary-900 border border-primary-900/20 font-bold rounded-lg transition-colors shadow-sm text-lg group">
                استكشف خدماتنا
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT & MISSION MODULE */}
      <section id="about" className="py-24 bg-white dark:bg-charcoal-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-4xl">
            <span className="text-accent-500 font-bold tracking-wider text-sm mb-4 block">من نحن وما نمثله - ليبيون في العمق، عالميون في الكفاءة</span>
            <p className="text-2xl leading-relaxed text-charcoal-800 dark:text-white font-plex">
              تأسست ركيزة بطرابلس، عام 2021، على رسالة واضحة: أن تجلب إلى السوق الليبية جودة الاستشارات الدولية الرائدة ومدعمة على أيدي محترفين يعرفونها حق المعرفة من الداخل. ركيزة — يعبر عن الأساس والركيزة والروابط النقية والصلبة التي تشكل ركائز طموحات الأعمال. منذ تأسيسنا في يونيو 2021، عملنا مع جهات حكومية ومؤسسات خاصة وشركات متعددة الجنسيات ورواد أعمال، عبر أكثر القطاعات حيوية في ليبيا.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={pillar.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-ivory dark:bg-charcoal-800 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-white/5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all"
              >
                <div className="text-4xl font-bold text-accent-500/30 dark:text-accent-500/50 mb-6 font-plex">{pillar.num}</div>
                <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-4">{pillar.title}</h3>
                <p className="text-charcoal-800 dark:text-white/80 leading-relaxed text-sm">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC STATISTICS PANEL */}
      <section className="py-20 bg-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#275A53 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x-reverse md:divide-x divide-slate-200">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="pt-8 md:pt-0 flex flex-col items-center justify-center"
              >
                <div className="text-5xl md:text-7xl font-bold text-accent-500 mb-4 font-sans tracking-tight">{stat.value}</div>
                <div className="text-lg font-medium text-charcoal-800">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO EXECUTIVE MESSAGE MODULE */}
      <section className="py-24 bg-ivory dark:bg-charcoal-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 w-full">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-charcoal-900 shadow-xl group">
                <img 
                  src="/ceo.png" 
                  alt="معاذ خالد - المؤسس التنفيذي" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent p-8">
                  <h4 className="text-white font-bold text-xl mb-1">معاذ خالد</h4>
                  <p className="text-accent-400 text-sm">المؤسس التنفيذي</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 w-full pt-8">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-accent-400 mb-8 leading-tight">
                ردَم الهوة بين أرقى الممارسات الدولية وواقع السوق المحلية.
              </h2>
              <div className="prose prose-lg text-charcoal-800 dark:text-white/90 font-plex max-w-none">
                <p className="mb-6 leading-relaxed">
                  حين أسست ركيزة، كان الدافع إلى ذلك ملاحظة بسيطة. ففي كثير من المؤسسات، تتوافر الخبرة الفنية ويشترك منطلق المشاريع الطموحة، لكن غالباً ما تكون هناك حلقة مفقودة في التخطيط الاستراتيجي أو الحوكمة المحكمة أو التنفيذ المنهجي.
                </p>
                
                <motion.div
                  initial={false}
                  animate={{ height: ceoOpen ? 'auto' : 0, opacity: ceoOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mb-6 leading-relaxed">
                    لست غايتنا مجرد تقديم خدمات استشارية، بل أن نغدو شريكاً موثوقاً يعين المؤسسات على اتخاذ قرارات أرشد، وإدارة التعقيد التجاري، وترسيخ الحوكمة، وإنجاز المشاريع بثقة. نحن نؤمن بأن المعايير العالمية ليست قالباً جامداً يُفرض على أي سياق، بل هي ممارسات تُكيّف بحكمة لتلائم الواقع المحلي.
                  </p>
                  <p className="leading-relaxed">
                    نسعى دائماً لنكون الركيزة التي تعتمد عليها في رحلة نموك المستدام.
                  </p>
                </motion.div>

                <button 
                  onClick={() => setCeoOpen(!ceoOpen)}
                  className="mt-6 flex items-center gap-2 text-accent-500 font-bold hover:text-accent-600 transition-colors"
                >
                  {ceoOpen ? 'إغلاق الكلمة' : 'اقرأ الكلمة كاملة'}
                  <ChevronDown className={`h-5 w-5 transition-transform ${ceoOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EXTENDED CONTENT MODULES */}
      
      {/* 1. التحدي ودورنا */}
      <section className="py-24 bg-white dark:bg-charcoal-800 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-primary-900 dark:text-accent-400 mb-6">التحدي</h3>
              <div className="prose prose-lg text-charcoal-800 dark:text-white/90 font-plex">
                <p className="font-bold text-xl mb-4">لماذا تتعثر بعض المشاريع رغم توفر الخبرات؟</p>
                <p className="mb-4">غالبًا لا يكون السبب نقصًا في المعرفة أو الموارد، بل غياب الترابط بين:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 marker:text-accent-500">
                  <li>الأهداف الاستراتيجية</li>
                  <li>الأنظمة والإجراءات</li>
                  <li>الحوكمة والمسؤوليات</li>
                  <li>التنفيذ والمتابعة</li>
                </ul>
                <p className="leading-relaxed">ليس بسبب نقص في الكفاءة الفنية، وإنما لغياب المواءمة الكاملة مع الأهداف والمتطلبات. عندما لا تعمل هذه العناصر ضمن منظومة واحدة، تظهر الفجوات، وتتزايد المخاطر، وتصبح القرارات أكثر صعوبة. وهنا يأتي دور ركيزة.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-primary-900 dark:text-accent-400 mb-6">دورنا</h3>
              <div className="prose prose-lg text-charcoal-800 dark:text-white/90 font-plex p-8 bg-ivory dark:bg-charcoal-900 rounded-2xl border-r-4 border-accent-500 shadow-sm">
                <p className="font-bold text-xl mb-4 text-charcoal-900 dark:text-white">نربط بين الرؤية والتنفيذ.</p>
                <p className="leading-relaxed">لا تقدم ركيزة حلولًا نظرية فقط، بل تعمل مع المؤسسات لفهم واقعها، وتحليل تحدياتها، وتصميم حلول عملية قابلة للتطبيق. نحن نؤمن بأن القيمة الحقيقية لا تكمن في تقديم التوصية، بل في القدرة على تحويلها إلى أثر ملموس.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. خدماتنا Grid */}
      <section className="py-24 bg-ivory dark:bg-charcoal-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">خدماتنا</h2>
            <p className="text-xl text-charcoal-800 dark:text-white/80 font-plex">حلول استشارية مبنية على الفهم والتنفيذ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "إدارة العقود",
                desc: "العقود ليست مجرد وثائق قانونية، بل أدوات استراتيجية لحماية القيمة وإدارة المخاطر. نساعد المؤسسات على بناء منظومة متكاملة لإدارة العقود تضمن وضوح الالتزامات، وتحسن التحكم، وتعزز الامتثال.",
                tags: ["إعداد وصياغة العقود", "مراجعة وتحليل العقود", "تطوير سياسات وإجراءات إدارة العقود", "إدارة دورة حياة العقود", "دعم المناقصات وطلبات تقديم العروض", "إدارة التغييرات والمطالبات التعاقدية"]
              },
              {
                title: "الاستشارات الإدارية ودراسات الجدوى",
                desc: "القرارات الكبيرة تحتاج إلى رؤية واضحة وتحليل دقيق. ندعم المؤسسات في تقييم الفرص، وتحليل الخيارات، وبناء الأسس التي تساعد على اتخاذ قرارات أكثر ثقة.",
                tags: ["دراسات الجدوى", "التحليل الاستراتيجي", "استشارات الأعمال", "استشارات المشتريات وسلاسل الإمداد", "تقييم المبادرات والمشاريع"]
              },
              {
                title: "إدارة المشاريع والتميز التشغيلي",
                desc: "نجاح المشروع لا يعتمد فقط على الخطة، بل على القدرة على التنفيذ المنضبط. نساعد المؤسسات على تحسين إدارة مشاريعها وعملياتها من خلال منهجيات واضحة وأدوات فعالة للمتابعة والتحسين.",
                tags: ["إدارة المشاريع", "تطوير منهجيات إدارة المشاريع", "تحسين العمليات", "إدارة المخاطر", "مؤشرات الأداء الرئيسية", "تحسين الكفاءة التشغيلية"]
              },
              {
                title: "التطوير المؤسسي والحوكمة",
                desc: "المؤسسات القوية تُبنى على أنظمة واضحة ومسؤوليات محددة. ندعم المؤسسات في تطوير بنيتها الإدارية، وتعزيز الحوكمة، وبناء أنظمة عمل أكثر كفاءة واستدامة.",
                tags: ["تطوير السياسات والإجراءات", "إعداد الأدلة الفنية", "إجراءات التشغيل القياسية (SOPs)", "الحوكمة المؤسسية والفنية", "تطوير الأنظمة الإدارية"]
              }
            ].map((srv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-charcoal-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-white/5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-accent-500/20 text-primary-900 dark:text-accent-400 flex items-center justify-center font-bold text-lg shrink-0">{idx + 1}</div>
                  <h3 className="text-2xl font-bold text-primary-900 dark:text-white">{srv.title}</h3>
                </div>
                <p className="text-charcoal-800 dark:text-white/80 mb-6 font-plex leading-relaxed">{srv.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {srv.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-charcoal-700 text-charcoal-800 dark:text-white/90 text-sm rounded-full border border-slate-200 dark:border-white/10">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. لماذا ركيزة والقطاعات */}
      <section className="py-24 bg-white relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-8">لماذا ركيزة؟</h2>
              <p className="text-xl mb-8 text-charcoal-800 font-plex">لأننا لا نقدم حلولًا جاهزة، بل نبني حلولًا تناسب واقعك. نعتمد على مزيج من:</p>
              <div className="space-y-6">
                {[
                  { t: "الخبرة التنفيذية", d: "فهم عملي للتحديات التي تواجه المؤسسات، وليس مجرد معرفة نظرية." },
                  { t: "التفكير الاستراتيجي", d: "ربط القرارات اليومية بالأهداف طويلة المدى." },
                  { t: "المنهجية المنظمة", d: "أسلوب واضح يبدأ من التشخيص وينتهي بقياس الأثر." },
                  { t: "الشراكة الحقيقية", d: "نعمل مع العميل، وليس فقط من أجله." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent-500 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary-900 text-lg mb-1">{item.t}</h4>
                      <p className="text-charcoal-800 font-plex leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-ivory p-8 rounded-3xl border border-slate-100 shadow-sm h-fit">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">القطاعات التي نخدمها</h3>
              <p className="text-charcoal-800 mb-8 font-plex leading-relaxed">خبرات متعددة، وفهم عميق لطبيعة كل قطاع.</p>
              <div className="flex flex-wrap gap-3">
                {["النفط والغاز", "الاتصالات وتقنية المعلومات", "القطاع الحكومي", "الخدمات اللوجستية", "البنية التحتية", "المؤسسات الاستثمارية والخاصة"].map((sector, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white hover:bg-slate-50 transition-colors rounded-lg text-sm font-medium border border-slate-200 text-charcoal-900 shadow-sm">{sector}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. منهجيتنا */}
      <section className="py-24 bg-white dark:bg-charcoal-800 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">منهجيتنا</h2>
            <p className="text-xl text-accent-500 font-plex font-bold tracking-wide">نفهم. نحلل. نصمم. ننفذ. نقيس.</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-slate-200 dark:bg-charcoal-700 z-0"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
              {[
                { title: "الفهم", desc: "نبدأ بفهم أهداف المؤسسة، وبيئتها، والتحديات التي تواجهها." },
                { title: "التحليل", desc: "نحدد الفجوات، ونحلل الأسباب، ونرسم فرص التحسين." },
                { title: "التصميم", desc: "نبني حلولًا عملية تتوافق مع احتياجات المؤسسة." },
                { title: "التنفيذ", desc: "ندعم التطبيق لضمان تحويل الخطط إلى واقع." },
                { title: "القياس", desc: "نقيس النتائج ونضمن تحقيق القيمة المستهدفة." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-charcoal-900 p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-50 dark:border-white/5 text-center relative group hover:-translate-y-2 transition-transform h-full"
                >
                  <div className="w-12 h-12 mx-auto bg-primary-900 dark:bg-charcoal-800 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md group-hover:bg-accent-500 transition-colors relative z-10 border dark:border-white/10">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xl font-bold text-primary-900 dark:text-white mb-3">{step.title}</h4>
                  <p className="text-sm text-charcoal-800 dark:text-white/80 font-plex leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. رؤيتنا ومعرفتنا */}
      <section className="py-24 bg-ivory dark:bg-charcoal-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary-900 dark:bg-charcoal-800 text-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center border dark:border-white/5"
          >
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">رؤيتنا ومعرفتنا</h2>
              <h3 className="text-2xl md:text-3xl text-accent-400 font-bold mb-8">المعرفة التي تصنع قرارات أفضل.</h3>
              <p className="text-lg md:text-xl text-primary-50 dark:text-white/90 leading-relaxed font-plex max-w-3xl mx-auto">
                نشارك رؤيتنا وخبراتنا في مجالات العقود، والحوكمة، والمشاريع، والتطوير المؤسسي لمساعدة المؤسسات على مواجهة التحديات واتخاذ قرارات أكثر وعيًا.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
