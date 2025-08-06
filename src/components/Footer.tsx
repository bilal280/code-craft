import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-blue-400">&#123;</span>
              <span className="mx-1">كود<span className="text-amber-400">كرافت</span></span>
              <span className="text-blue-400">&#125;</span>
            </div>
            <p className="text-gray-300 mb-4">
              نحوّل الأفكار إلى واقع رقمي متميز من خلال تقديم خدمات تطوير وتصميم المواقع والتطبيقات بأعلى المعايير العالمية.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-amber-400">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition duration-300">الرئيسية</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">خدماتنا</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition duration-300">أعمالنا</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">اتصل بنا</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-amber-400">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white transition duration-300">تطوير المواقع الإلكترونية</li>
              <li className="text-gray-300 hover:text-white transition duration-300">تطوير التطبيقات</li>
              <li className="text-gray-300 hover:text-white transition duration-300">تصميم واجهات المستخدم</li>
              <li className="text-gray-300 hover:text-white transition duration-300">الصيانة والدعم الفني</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-amber-400">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="ml-2 text-blue-400" />
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="ml-2 text-blue-400" />
                <span className="text-gray-300">+966 11 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="ml-2 text-blue-400" />
                <span className="text-gray-300">info@codecraft.sa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} كودكرافت. تصميم وتطوير بكل شغف</p>
        </div>
      </div>
    </footer>
  );
}
