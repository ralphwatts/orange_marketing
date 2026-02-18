import { Target, Check, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from '../../components/SEO';

export default function LeadGeneration() {
  const offerings = [
    'Lead magnets and landing pages that convert visitors into leads',
    'Forms and capture points across your website and campaigns',
    'Lead scoring and routing so your team focuses on the best opportunities',
    'Follow-up automation so no lead goes cold',
    'Paid and organic lead channels that fill your pipeline',
    'CRM integration so every lead is tracked and nurtured',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="Lead Generation"
        description="Systems and campaigns that fill your pipeline with qualified leads. Landing pages, forms, automation, and CRM integration. Orange Digital, Palm Beach County, FL."
        path="/services/lead-generation"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'Lead Generation | Orange Digital',
          description: 'Systems and campaigns that fill your pipeline with qualified leads so you can focus on closing.',
          url: baseUrl + '/services/lead-generation',
        })}
      />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="w-14 h-14 bg-[#ff6b35]/20 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-7 h-7 text-[#ff6b35]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lead <span className="text-[#ff6b35]">Generation</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Systems and campaigns that fill your pipeline with qualified leads so you can focus on closing. We build the capture and nurture side so you don&apos;t miss opportunities.
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
            <Users className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">More Qualified Leads</h3>
            <p className="text-gray-400 text-sm">Capture and score leads so your team talks to the right people first.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <Zap className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Automated Follow-Up</h3>
            <p className="text-gray-400 text-sm">Nurture sequences and reminders so no lead goes cold.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <ArrowRight className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Full Funnel</h3>
            <p className="text-gray-400 text-sm">From first touch to closed deal—one system, one pipeline.</p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-[#1a1a2e] border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fill Your Pipeline?</h2>
            <p className="text-gray-400 mb-8">Book a free strategy call and we&apos;ll show you how to build a lead system that converts.</p>
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
