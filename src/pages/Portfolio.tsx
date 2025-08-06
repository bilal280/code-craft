import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, portfolioItems } from '../data/portfolio';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
              معرض <span className="text-blue-600">أعمالنا</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg mb-8"
            >
              نماذج من المشاريع التي قمنا بتنفيذها لعملائنا تعكس خبرتنا وقدرتنا على تحويل الأفكار إلى منتجات رقمية متميزة
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedItem(item.id)}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Item Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {portfolioItems.find(item => item.id === selectedItem) && (
                <>
                  <div className="relative h-80">
                    <img 
                      src={portfolioItems.find(item => item.id === selectedItem)?.image} 
                      alt={portfolioItems.find(item => item.id === selectedItem)?.title} 
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="absolute top-4 right-4 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-colors"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="p-8" dir="rtl">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold">
                        {portfolioItems.find(item => item.id === selectedItem)?.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                        {categories.find(cat => cat.id === portfolioItems.find(item => item.id === selectedItem)?.category)?.name}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {portfolioItems.find(item => item.id === selectedItem)?.description}
                    </p>
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-bold mb-3">تفاصيل المشروع</h4>
                      <p className="text-gray-600 mb-4">
                        قمنا بتصميم وتطوير هذا المشروع باستخدام أحدث التقنيات لتحقيق أهداف العميل وتوفير تجربة مستخدم متميزة. استغرق المشروع 8 أسابيع للانتهاء من جميع المراحل بدءًا من التصميم وحتى الإطلاق.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-gray-600">
                        <div>
                          <span className="font-bold block">التقنيات المستخدمة:</span>
                          <span>React, Node.js, MongoDB</span>
                        </div>
                        <div>
                          <span className="font-bold block">مدة التنفيذ:</span>
                          <span>8 أسابيع</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center transition duration-300">
                        عرض المشروع كاملاً
                        <ArrowLeft size={18} className="mr-2" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
