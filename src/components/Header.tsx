import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { path: '/', name: 'الرئيسية' },
  { path: '/services', name: 'خدماتنا' },
  { path: '/portfolio', name: 'أعمالنا' },
  { path: '/contact', name: 'اتصل بنا' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="text-blue-600 font-bold text-2xl flex items-center gap-2 relative">
              <motion.span 
                className="text-blue-600"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 5 }}
              >
                &#123;
              </motion.span>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-800 to-amber-500 bg-clip-text text-transparent bg-size-200 animate-gradient">
                كود<span className="text-amber-500">كرافت</span>
              </div>
              <motion.span 
                className="text-blue-600"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 5 }}
              >
                &#125;
              </motion.span>
              <motion.span 
                className="absolute -top-1 -right-3 text-amber-500 text-sm"
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
              >
                ⚙️
              </motion.span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-8 ml-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.path} className="mx-2">
                <Link
                  to={link.path}
                  className={`relative block text-gray-700 hover:text-blue-600 transition duration-300 py-2 px-1 ${
                    location.pathname === link.path ? 'text-blue-600 font-bold' : ''
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </li>
            )).reverse()}
          </ul>
          <div className="border border-blue-500 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg transition duration-300 hover:shadow-md">
            <a href="#" className="text-sm font-medium">ابدأ مشروعك</a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg py-4"
        >
          <ul className="flex flex-col space-y-3 px-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-4 rounded-md ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            )).reverse()}
            <li className="pt-2">
              <a
                href="#"
                className="block bg-blue-600 text-white text-center py-2 px-4 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                ابدأ مشروعك
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
