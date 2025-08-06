import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Code, Globe, LayoutDashboard, Smartphone, Wrench } from 'lucide-react';

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe':
        return <Globe className="w-10 h-10 text-blue-600" />;
      case 'smartphone':
        return <Smartphone className="w-10 h-10 text-blue-600" />;
      case 'layout':
        return <LayoutDashboard className="w-10 h-10 text-blue-600" />;
      case 'tool':
        return <Wrench className="w-10 h-10 text-blue-600" />;
      default:
        return <Code className="w-10 h-10 text-blue-600" />;
    }
  };

  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              خدماتنا <span className="text-blue-600">المتميزة</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg mb-8"
            >
              نقدم مجموعة متكاملة من الخدمات الاحترافية في مجال تطوير المواقع والتطبيقات لمساعدتك على تحقيق أهدافك الرقمية
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="bg-blue-50 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 text-gray-600">
                    {index === 0 && (
                      <>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>تصميم وتطوير مواقع الويب الاحترافية</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>مواقع متوافقة مع جميع الأجهزة</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>محسنة لمحركات البحث SEO</span>
                        </li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>تطبيقات أندرويد وiOS</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>تطبيقات الويب التفاعلية</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>حلول تكاملية بين الأنظمة المختلفة</span>
                        </li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>تصميم واجهات المستخدم الإبداعية</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>تجربة مستخدم سهلة ومريحة</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>التصميم المبني على أساس بحث المستخدمين</span>
                        </li>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>صيانة دورية للمواقع والتطبيقات</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>دعم فني على مدار الساعة</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          <span>تحديثات مستمرة للأمان والأداء</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">منهجية العمل</h2>
            <p className="text-gray-600">
              نتبع منهجية عمل منظمة تضمن تحقيق أفضل النتائج لمشروعك الرقمي من البداية وحتى النهاية
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Process Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
            
            {/* Process Steps */}
            <ProcessStep 
              number="1" 
              title="تحليل المتطلبات" 
              description="نبدأ بفهم احتياجاتك وأهدافك لتحديد المتطلبات الأساسية للمشروع"
            />
            <ProcessStep 
              number="2" 
              title="التصميم" 
              description="نصمم واجهات المستخدم مع التركيز على سهولة الاستخدام والجاذبية البصرية"
            />
            <ProcessStep 
              number="3" 
              title="التطوير" 
              description="نقوم بتنفيذ المشروع باستخدام أحدث التقنيات والممارسات البرمجية"
            />
            <ProcessStep 
              number="4" 
              title="الاختبار والإطلاق" 
              description="نختبر المنتج بدقة للتأكد من جودته ونطلقه بعد التأكد من جاهزيته"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Process Step Component
function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex-1 relative p-6 md:px-4"
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 z-10">
          {number}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
