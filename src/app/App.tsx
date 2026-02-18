import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';
import { Logo } from './components/Logo';
import { MapPin, ChevronDown } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WebDevelopment from './pages/services/WebDevelopment';
import AppDevelopment from './pages/services/AppDevelopment';
import AIIntegration from './pages/services/AIIntegration';
import InternetMarketing from './pages/services/InternetMarketing';
import AnalyticsGrowth from './pages/services/AnalyticsGrowth';
import StrategyConsulting from './pages/services/StrategyConsulting';
import LeadGeneration from './pages/services/LeadGeneration';
import LocationPage from './pages/locations/LocationPage';
import ThankYou from './pages/ThankYou';
import ThankYouAudit from './pages/ThankYouAudit';
import FreeAudit from './pages/FreeAudit';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a1e] text-white font-['Inter',sans-serif]">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-white/10 bg-[#0a0a1e]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <Logo />
              <span className="text-xl font-bold">Orange Digital</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200`}
                >
                  <div className="bg-[#1a1a2e] border border-white/10 rounded-lg py-2 min-w-[220px] shadow-xl">
                    <Link
                      to="/services"
                      className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                    >
                      All Services
                    </Link>
                    <Link
                      to="/services/web-development"
                      className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                    >
                      Web Development & Design
                    </Link>
                    <Link
                      to="/services/app-development"
                      className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                    >
                      App Development
                    </Link>
                    <Link
                      to="/services/ai-integration"
                      className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                    >
                      AI Integration & Automation
                    </Link>
                    <Link
                      to="/services/internet-marketing"
                      className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                    >
                      Internet Marketing
                    </Link>
                    <Link
                      to="/services/analytics-growth"
                      className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                    >
                      Analytics & Growth
                    </Link>
                    <Link
                      to="/services/strategy-consulting"
                      className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                    >
                      Strategy & Consulting
                    </Link>
                    <Link
                      to="/services/lead-generation"
                      className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                    >
                      Lead Generation
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
            <Link to="/contact" className="text-white hover:text-white transition-colors">
              <button className="px-6 py-2.5 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/ai-integration" element={<AIIntegration />} />
            <Route path="/services/internet-marketing" element={<InternetMarketing />} />
            <Route path="/services/analytics-growth" element={<AnalyticsGrowth />} />
            <Route path="/services/strategy-consulting" element={<StrategyConsulting />} />
            <Route path="/services/lead-generation" element={<LeadGeneration />} />
            <Route path="/locations/:locationSlug" element={<LocationPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/free-audit" element={<FreeAudit />} />
            <Route path="/thank-you-audit" element={<ThankYouAudit />} />
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
              <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <Link to="/free-audit" className="text-gray-400 hover:text-white transition-colors">
                  Free Audit
                </Link>
                <Link to="/locations/palm-beach-county" className="text-gray-400 hover:text-white transition-colors">
                  Palm Beach County
                </Link>
                <Link to="/locations/wellington" className="text-gray-400 hover:text-white transition-colors">
                  Wellington, FL
                </Link>
                <Link to="/locations/royal-palm-beach" className="text-gray-400 hover:text-white transition-colors">
                  Royal Palm Beach, FL
                </Link>
              </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
