import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';
import { Logo } from './components/Logo';
import { ChevronDown, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './components/ui/sheet';
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
import NotFound from './pages/NotFound';
import FreeAudit from './pages/FreeAudit';
import AppPrivacyPage from './pages/apps/AppPrivacyPage';
import AITraining from './pages/AITraining';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const serviceLinks = [
  { to: '/services', label: 'Overview' },
  { to: '/services/web-development', label: 'Web Development & Design' },
  { to: '/services/app-development', label: 'App Development' },
  { to: '/services/ai-integration', label: 'AI Integration & Automation' },
  { to: '/ai-training', label: 'AI Training' },
  { to: '/services/internet-marketing', label: 'Internet Marketing' },
  { to: '/services/analytics-growth', label: 'Analytics & Growth' },
  { to: '/services/strategy-consulting', label: 'Strategy & Consulting' },
  { to: '/services/lead-generation', label: 'Lead Generation' },
];

export default function App() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                      Overview
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
                      to="/ai-training"
                      className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                    >
                      AI Training
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
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden md:inline-block text-white hover:text-white transition-colors">
                <button className="px-6 py-2.5 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer">
                  Get Started
                </button>
              </Link>
              <button
                type="button"
                className="md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="right" className="w-[min(320px,85vw)] border-white/10 bg-[#0a0a1e] p-0 [&_[data-slot=sheet-close]]:text-white [&_[data-slot=sheet-close]]:hover:opacity-100">
            <SheetHeader className="border-b border-white/10 px-6 py-4 text-left">
              <SheetTitle className="text-white font-bold">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col py-4 overflow-y-auto">
              <div className="px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-2">Services</span>
                {serviceLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="px-6 pt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full py-3 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer">
                    Get Started
                  </button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

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
            <Route path="/ai-training" element={<AITraining />} />
            <Route path="/locations/:locationSlug" element={<LocationPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/free-audit" element={<FreeAudit />} />
            <Route path="/thank-you-audit" element={<ThankYouAudit />} />
            <Route path="/apps/:appName" element={<AppPrivacyPage />} />
            <Route path="*" element={<NotFound />} />
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
                <Link to="/ai-training" className="text-gray-400 hover:text-white transition-colors">
                  AI Training
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
