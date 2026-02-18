import { Smartphone, Check, Layers, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from '../../components/SEO';

export default function AppDevelopment() {
  const offerings = [
    'Native and cross-platform mobile apps (iOS & Android)',
    'Progressive Web Apps (PWAs) for web and mobile',
    'Custom business apps and internal tools',
    'API development and system integrations',
    'App store submission and ongoing updates',
    'Performance tuning and user experience optimization',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="App Development"
        description="Mobile and web applications for your business. Native and cross-platform apps, PWAs, and custom tools. Orange Digital, Palm Beach County, FL."
        path="/services/app-development"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'App Development | Orange Digital',
          description: 'Mobile and web applications that your customers and team actually use.',
          url: baseUrl + '/services/app-development',
        })}
      />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="w-14 h-14 bg-[#ff6b35]/20 rounded-xl flex items-center justify-center mb-6">
            <Smartphone className="w-7 h-7 text-[#ff6b35]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            App <span className="text-[#ff6b35]">Development</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Mobile and web applications that your customers and team actually use. From idea to app store, we build apps that are fast, reliable, and built for growth.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Build for You</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                <span className="text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <Layers className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Cross-Platform</h3>
            <p className="text-gray-400 text-sm">One codebase, iOS and Android—faster and easier to maintain.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <Shield className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
            <p className="text-gray-400 text-sm">Best practices for security, updates, and stability.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <Zap className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Built to Perform</h3>
            <p className="text-gray-400 text-sm">Smooth UX and fast load times that users expect.</p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-[#1a1a2e] border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your App?</h2>
            <p className="text-gray-400 mb-8">From concept to launch, we're here to help.</p>
            <Link to="/contact">
              <button className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
