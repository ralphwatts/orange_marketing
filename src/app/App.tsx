import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { Logo } from './components/Logo';
import { Globe, MapPin } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a1e] text-white font-['Inter',sans-serif]">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-white/10 bg-[#0a0a1e]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <Logo />
              <span className="text-xl font-bold">Orange Digital</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            <button className="px-6 py-2.5 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold">
              Get Started
            </button>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="relative border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Link to="/" className="flex items-center gap-3">
                <Logo />
                <span className="text-xl font-bold">Orange Digital</span>
              </Link>

              <div className="flex items-center gap-6 text-white text-sm">
              <span className='flex'><MapPin className="w-3 h-3 text-[#ff6b35] mt-1 mr-1" /> Palm Beach County, FL</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
