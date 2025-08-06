import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Code, Globe, LayoutDashboard, Smartphone, Sparkles, Wrench, Zap } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  const codeRef = useRef<HTMLDivElement>(null);

  // Simulate code typing effect
  useEffect(() => {
    if (!codeRef.current) return;

    const codeExample = `// مثال لكود برمجي
function بناءموقع(فكرة) {
  تحليل(فكرة);
  تصميم(فكرة);
  تطوير(فكرة);
  return موقع_متميز;
}
// نجعل أفكارك حقيقة
const موقعك = بناءموقع(فكرتك);`;

    let index = 0;
    const interval = setInterval(() => {
      if (codeRef.current) {
        codeRef.current.textContent = codeExample.substring(0, index);
        index++;
        
        if (index > codeExample.length) {
          clearInterval(interval);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <ParticlesBackground color="#3b82f6" type="links" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 to-white/95 z-0"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-right"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-shadow">
                نحوِّل <motion.span 
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="gradient-blue-gold relative"
                >
                  الأفكار
                  <motion.span 
                    className="absolute -top-6 -right-6 text-amber-500" 
                    animate={{rotate: [0, 10, 0], scale: [1, 1.2, 1]}}
                    transition={{duration: 3, repeat: Infinity}}
                  >
                    <Sparkles size={24} />
                  </motion.span>
                </motion.span> إلى{" "}
                <span className="text-amber-500 relative">
                  واقع رقمي
                  <svg className="absolute h-3 w-full bottom-0 left-0" viewBox="0 0 200 8">
                    <motion.path 
                      d="M0,5 Q40,0 80,5 Q120,10 160,5 Q180,2 200,5" 
                      stroke="#d97706" 
                      strokeWidth="3" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                نصمم ونطور مواقع وتطبيقات تجمع بين الإبداع والوظيفة لنمنحك تجربة رقمية متميزة
                تناسب احتياجات عملك. مع فريق من المحترفين الذين يحولون رؤيتك إلى واقع.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-200/50 group"
                  >
                    <Zap size={18} className="ml-2 group-hover:animate-pulse" />
                    ابدأ مشروعك
                    <ArrowLeft size={18} className="mr-2 transition-transform duration-300 group-hover:translate-x-[-4px]" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/portfolio"
                    className="bg-white/80 backdrop-blur border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    استعرض أعمالنا
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900 rounded-xl p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-sm text-gray-400">script.js</div>
                </div>
                <div 
                  ref={codeRef}
                  className="text-green-400 font-mono text-sm whitespace-pre-wrap h-[200px] overflow-hidden"
                ></div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-full h-full border-4 border-amber-400 rounded-xl -z-10 translate-x-5 translate-y-5"></div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -z-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-200 rounded-full opacity-20 -z-10 blur-3xl"></div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-blue relative overflow-hidden">
        <div className="diamond-pattern absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 relative inline-block"
            >
              خدماتنا <span className="text-blue-600">المتميزة</span>
              <motion.div 
                className="fancy-divider mt-3"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-700 max-w-2xl mx-auto text-lg"
            >
              نقدم مجموعة متكاملة من الخدمات الاحترافية لتطوير وتصميم المواقع والتطبيقات
              لتلبية جميع احتياجاتك الرقمية بأعلى معايير الجودة والإبداع
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="تطوير المواقع" 
              description="مواقع إلكترونية احترافية متوافقة مع جميع الأجهزة"
              icon={<Globe className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard 
              title="تطوير التطبيقات" 
              description="تطبيقات iOS وAndroid مع تجربة مستخدم سلسة"
              icon={<Smartphone className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard 
              title="تصميم الواجهات" 
              description="واجهات عصرية تركز على تحسين تجربة المستخدم"
              icon={<LayoutDashboard className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard 
              title="الصيانة والدعم" 
              description="دعم فني مستمر لضمان استمرارية عمل منتجك"
              icon={<Wrench className="w-8 h-8 text-blue-500" />}
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition duration-300"
            >
              استعرض جميع خدماتنا
              <ArrowLeft size={18} className="mr-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="bg-blue-600 rounded-lg p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">لماذا كودكرافت؟</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 ml-3 bg-blue-500 rounded-full p-1">
                        <Code size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold">خبرة تقنية متميزة</h4>
                        <p className="text-blue-100">فريق من المطورين ذوي الخبرة في أحدث التقنيات</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 ml-3 bg-blue-500 rounded-full p-1">
                        <Smartphone size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold">تصميم متوافق</h4>
                        <p className="text-blue-100">تصاميم متوافقة مع جميع الأجهزة والشاشات</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 ml-3 bg-blue-500 rounded-full p-1">
                        <LayoutDashboard size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold">تجربة مستخدم مميزة</h4>
                        <p className="text-blue-100">تركيز على تجربة المستخدم لزيادة التفاعل</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-400 rounded-lg -z-10"></div>
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-right">
              <h2 className="text-3xl font-bold mb-6">نضع الاحتراف والجودة في كل تفاصيل المشروع</h2>
              <p className="text-gray-600 mb-6">
                في كودكرافت، نؤمن بأن التفاصيل هي ما يصنع الفرق. لذلك نحرص على تقديم خدمات تتميز بالدقة والجودة العالية، ونستخدم أحدث التقنيات لضمان مواكبة مشروعك للتطورات التكنولوجية.
              </p>
              <p className="text-gray-600 mb-8">
                نعمل معك خطوة بخطوة منذ لحظة طرح الفكرة وحتى إطلاق المنتج النهائي، ونقدم الدعم المستمر لضمان نجاح مشروعك على المدى الطويل.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                اطلب استشارة مجانية
                <ArrowLeft size={18} className="mr-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Service Card Component
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card service-card rounded-xl p-6 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <motion.div 
          animate={{ 
            rotate: isHovered ? [0, 5, -5, 0] : 0,
            scale: isHovered ? [1, 1.1, 1] : 1 
          }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-500 to-blue-700 w-18 h-18 rounded-xl flex items-center justify-center mb-6 p-4 shadow-lg"
        >
          {icon}
        </motion.div>
        <motion.div 
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-2 -right-2 bg-amber-400 text-white p-1 rounded-full"
        >
          <Check size={16} />
        </motion.div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="mt-4 pt-2 border-t border-gray-100">
        <motion.a 
          href="#" 
          className="text-blue-600 font-medium text-sm inline-flex items-center animated-border"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          المزيد من التفاصيل
          <ArrowLeft size={14} className="mr-1" />
        </motion.a>
      </div>
    </motion.div>
  );
}
