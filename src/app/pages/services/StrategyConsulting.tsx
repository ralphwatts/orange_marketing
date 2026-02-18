import { MessageSquare, Check, Map, Handshake, Lightbulb } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from '../../components/SEO';

export default function StrategyConsulting() {
  const offerings = [
    'Digital strategy aligned with your business goals',
    'Roadmap and prioritization so you know what to build next',
    'Process review to find bottlenecks and opportunities',
    'Tech stack and tool recommendations that fit your budget',
    'Quarterly reviews to keep your plan on track',
    'Implementation support so strategy turns into action',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="Strategy & Consulting"
        description="Clear plans and ongoing support so you know what to build next and stay ahead. Digital strategy, roadmaps, and implementation. Orange Digital, Palm Beach County, FL."
        path="/services/strategy-consulting"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'Strategy & Consulting | Orange Digital',
          description: 'Clear plans and ongoing support so you know what to build next and stay ahead.',
          url: baseUrl + '/services/strategy-consulting',
        })}
      />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="w-14 h-14 bg-[#ff6b35]/20 rounded-xl flex items-center justify-center mb-6">
            <MessageSquare className="w-7 h-7 text-[#ff6b35]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Strategy <span className="text-[#ff6b35]">& Consulting</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Clear plans and ongoing support so you know what to build next and stay ahead. No fluff—just actionable roadmaps.
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
            <Map className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Roadmaps That Stick</h3>
            <p className="text-gray-400 text-sm">Prioritized plans you can execute—not decks that sit in a drawer.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <Handshake className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Ongoing Partnership</h3>
            <p className="text-gray-400 text-sm">Quarterly reviews and support so your strategy stays on track.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <Lightbulb className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">No Fluff</h3>
            <p className="text-gray-400 text-sm">Concrete recommendations and next steps, not generic advice.</p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-[#1a1a2e] border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get a Clear Plan?</h2>
            <p className="text-gray-400 mb-8">Book a free strategy call and we&apos;ll map out your next steps together.</p>
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
