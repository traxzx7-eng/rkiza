import sys
import os

file_path = r'C:\Users\MO\.gemini\antigravity\scratch\rakiza-website\src\app\page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Insert Trane Section
trane_section = '''
      {/* TRANE PARTNERSHIP SECTION */}
      <section className="py-24 bg-slate-50 dark:bg-charcoal-900/50 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-8 leading-tight">
              شركة الركيزة الدائمة هي وكيل لشركة Trane المتخصصة في تصنيع أنظمة التدفئة والتهوية وتكييف الهواء
            </h2>
            <div className="flex justify-center mb-10">
              <img src="/image_3d69c4.png" alt="Trane Logo" className="h-24 md:h-32 object-contain" />
            </div>
            <p className="text-lg text-charcoal-800 dark:text-white/90 font-plex leading-relaxed text-justify md:text-center">
              تُعد شركة &quot;ترين&quot; (Trane) إحدى الشركات العالمية الرائدة في تصميم وتصنيع أنظمة التدفئة والتهوية وتكييف الهواء (HVAC)، بالإضافة إلى توفير حلول متقدمة في أنظمة الإطفاء ومكافحة الحريق لضمان سلامة المنشآت. تتمثل وظيفتها الأساسية في خلق بيئات داخلية صحية وآمنة عبر تقديم أنظمة متكاملة للمباني السكنية والتجارية والصناعية بكفاءة طاقة عالية. وإلى جانب تفوقها الهندسي، تولي الشركة اهتماماً كبيراً بمجال التدريب من أجل بناء خبراء وكوادر فنية متخصصة قادرة على إدارة وصيانة هذه الأنظمة المعقدة. وبذلك، تقدم الشركة حلولاً شاملة تسهم في تحسين جودة الحياة ورفع مستوى الأمان داخل المنشآت المختلفة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-charcoal-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 dark:border-white/5 flex flex-col group">
              <div className="h-64 overflow-hidden bg-slate-100">
                <img src="/image_3d629d.jpg" alt="Rooftop Unit (RTU)" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-4">Rooftop Unit (RTU)</h3>
                <p className="text-charcoal-800 dark:text-white/80 font-plex mb-6 flex-grow">هو جهاز تكييف متكامل (Package Unit) يتم تركيبه على سطح المبنى، ويحتوي داخل وحدة واحدة.</p>
                <div className="space-y-3 mt-auto pt-6 border-t border-slate-100 dark:border-white/10 font-plex">
                  <div>
                    <span className="font-bold text-accent-500 text-sm">الاستخدامات: </span>
                    <span className="text-sm text-charcoal-800 dark:text-white/70">المولات، المطاعم، المدارس، المساجد، المستودعات.</span>
                  </div>
                  <div>
                    <span className="font-bold text-accent-500 text-sm">المميزات: </span>
                    <span className="text-sm text-charcoal-800 dark:text-white/70">تركيب سريع، صيانة سهلة، تكلفة أولية منخفضة، مناسب للمساحات المفتوحة.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-charcoal-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 dark:border-white/5 flex flex-col group">
              <div className="h-64 overflow-hidden bg-slate-100">
                <img src="/image_3d62bc.jpg" alt="نظام Chiller" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-4">نظام Chiller</h3>
                <p className="text-charcoal-800 dark:text-white/80 font-plex mb-6 flex-grow">التشيلر لا يبرد الهواء مباشرة، بل يبرد الماء، ثم يتم توزيع الماء البارد إلى وحدات مناولة الهواء (AHU) أو وحدات FCU.</p>
                <div className="space-y-3 mt-auto pt-6 border-t border-slate-100 dark:border-white/10 font-plex">
                  <div>
                    <span className="font-bold text-accent-500 text-sm">الاستخدامات: </span>
                    <span className="text-sm text-charcoal-800 dark:text-white/70">المستشفيات، الفنادق، الأبراج، المطارات، المصانع.</span>
                  </div>
                  <div>
                    <span className="font-bold text-accent-500 text-sm">المميزات: </span>
                    <span className="text-sm text-charcoal-800 dark:text-white/70">كفاءة عالية للمباني الكبيرة، عمر تشغيلي طويل، مناسب للأحمال الكبيرة.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-charcoal-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 dark:border-white/5 flex flex-col group">
              <div className="h-64 overflow-hidden bg-slate-100">
                <img src="/image_3d62db.jpg" alt="نظام VRF" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-4">نظام VRF (Variable Refrigerant Flow)</h3>
                <p className="text-charcoal-800 dark:text-white/80 font-plex mb-6 flex-grow">نظام يستخدم وسيط التبريد (الفريون) مباشرة بين الوحدة الخارجية والوحدات الداخلية، ويغير كمية الفريون حسب احتياج كل غرفة.</p>
                <div className="space-y-3 mt-auto pt-6 border-t border-slate-100 dark:border-white/10 font-plex">
                  <div>
                    <span className="font-bold text-accent-500 text-sm">الاستخدامات: </span>
                    <span className="text-sm text-charcoal-800 dark:text-white/70">الفلل، المكاتب، الفنادق، العيادات، المباني متعددة الغرف.</span>
                  </div>
                  <div>
                    <span className="font-bold text-accent-500 text-sm">المميزات: </span>
                    <span className="text-sm text-charcoal-800 dark:text-white/70">توفير كبير في استهلاك الكهرباء، تحكم مستقل لكل غرفة، تشغيل هادئ، تمديدات أقل من نظام التشيلر، مرونة في التوسعة.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-charcoal-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 dark:border-white/5 flex flex-col group">
              <div className="h-64 overflow-hidden bg-slate-100">
                <img src="/image_3d6aba.png" alt="Fire &amp; Life Safety" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-4">Fire &amp; Life Safety</h3>
                <p className="text-charcoal-800 dark:text-white/80 font-plex mb-6 flex-grow">تلتزم شركة Trane بتوفير بيئات آمنة وصحية داخل المباني تعمل أنظمتها بالتكامل مع أنظمة إنذار الحريق وإدارة المباني، حيث تقوم بإيقاف وحدات التكييف تلقائيا عند حدوث حريق، وإغلاق مخمدات الحريق والدخان وتشغيل أنظمة سحب الدخان وضغط السلالم للمساعدة في حماية الأرواح وتقليل انتشار الدخان.</p>
                <div className="space-y-3 mt-auto pt-6 border-t border-slate-100 dark:border-white/10 font-plex">
                  {/* Empty uses/features area */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

'''

target_insert = '{/* DYNAMIC STATISTICS PANEL */}'
if target_insert in content:
    content = content.replace(target_insert, trane_section + target_insert)

# 2. Add Trane service to Our Services grid
old_service = '              {\n                title: "التطوير المؤسسي والحوكمة",\n                desc: "المؤسسات القوية تُبنى على أنظمة واضحة ومسؤوليات محددة. ندعم المؤسسات في تطوير بنيتها الإدارية، وتعزيز الحوكمة، وبناء أنظمة عمل أكثر كفاءة واستدامة.",\n                tags: ["تطوير السياسات والإجراءات", "إعداد الأدلة الفنية", "إجراءات التشغيل القياسية (SOPs)", "الحوكمة المؤسسية والفنية", "تطوير الأنظمة الإدارية"]\n              }'

new_service = old_service + ',\n              {\n                title: "أنظمة التكييف والسلامة (Trane)",\n                desc: "وكيل معتمد لشركة Trane العالمية لتوريد وتركيب أحدث أنظمة التدفئة، التهوية، تكييف الهواء (HVAC)، وأنظمة مكافحة الحريق المتطورة.",\n                tags: ["أنظمة التدفئة", "التهوية", "تكييف الهواء", "مكافحة الحريق"]\n              }'

if old_service in content:
    content = content.replace(old_service, new_service)
else:
    print('Service target not found!')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
