import { TrendingUp, Check, Search, DollarSign, Target } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from '../../components/SEO';

export default function InternetMarketing() {
  const offerings = [
    'SEO & GEO—get found when local customers search',
    'Paid ads (Google, Meta, etc.) that drive qualified leads',
    'Lead generation funnels and landing pages',
    'Data-driven strategy and ongoing optimization',
    'Analytics and reporting so you know what works',
    'Integration with your CRM and sales process',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="Internet Marketing"
        description="SEO, GEO, paid ads, and lead generation. Get found locally and turn clicks into customers. Orange Digital, Palm Beach County, FL."
        path="/services/internet-marketing"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'Internet Marketing | Orange Digital',
          description: 'SEO, GEO, paid ads, and lead generation for local and regional growth.',
          url: baseUrl + '/services/internet-marketing',
        })}
      />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="w-14 h-14 bg-[#ff6b35]/20 rounded-xl flex items-center justify-center mb-6">
            <TrendingUp className="w-7 h-7 text-[#ff6b35]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Internet <span className="text-[#ff6b35]">Marketing</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            SEO, GEO, paid ads, and lead generation—focused on getting you in front of the right people and turning clicks into customers. We don't just run campaigns; we build systems that grow your pipeline.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Offer</h2>
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
            <Search className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">SEO + GEO</h3>
            <p className="text-gray-400 text-sm">Rank where it matters—search and local—so customers find you first.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <DollarSign className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Paid Ads</h3>
            <p className="text-gray-400 text-sm">Targeted campaigns on Google, Meta, and more that drive leads.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <Target className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Lead Generation</h3>
            <p className="text-gray-400 text-sm">Funnels and landing pages that capture and qualify leads.</p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-[#1a1a2e] border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Pipeline?</h2>
            <p className="text-gray-400 mb-8">Let's build a marketing system that turns traffic into revenue.</p>
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
