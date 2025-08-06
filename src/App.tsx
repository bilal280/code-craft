import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './index.css';

export function App() {
  useEffect(() => {
    // Load fonts
    const tajawalFont = document.createElement('link');
    tajawalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap';
    tajawalFont.rel = 'stylesheet';
    document.head.appendChild(tajawalFont);

    const arefRuqaaFont = document.createElement('link');
    arefRuqaaFont.href = 'https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&display=swap';
    arefRuqaaFont.rel = 'stylesheet';
    document.head.appendChild(arefRuqaaFont);

    return () => {
      document.head.removeChild(tajawalFont);
      document.head.removeChild(arefRuqaaFont);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col" style={{ fontFamily: '"Tajawal", sans-serif' }}>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
