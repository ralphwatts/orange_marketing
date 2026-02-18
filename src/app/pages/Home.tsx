import { Link } from 'react-router';
import { FloatingIcons } from '../components/FloatingIcons';
import { SEO } from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Orange Digital | Save Time & Grow Revenue with AI & Automation"
        description="We help local businesses save time and grow revenue with websites and AI that run on autopilot. Palm Beach County, FL. Digital systems for smarter operations and simpler sales."
        path="/"
        getSchema={(baseUrl) => [
          {
            '@type': 'Organization',
            name: 'Orange Digital',
            url: baseUrl,
            areaServed: { '@type': 'State', name: 'Florida' },
          },
          {
            '@type': 'WebSite',
            name: 'Orange Digital',
            url: baseUrl,
          },
          {
            '@type': 'WebPage',
            name: 'Orange Digital | Save Time & Grow Revenue with AI & Automation',
            description: 'We help local businesses save time and grow revenue with websites and AI that run on autopilot. Palm Beach County, FL.',
            url: baseUrl + '/',
          },
        ]}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.15),transparent_50%)]" />
        <FloatingIcons />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] border border-[#ff6b35]/50 rounded-full mb-8">
            <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-wider">
              Palm Beach County
            </span>
          </div>

          <h1 className="text-6xl font-bold mb-6 leading-tight">
            We help businesses <span className="text-[#ff6b35]">save time </span> 
            and <span className="text-[#ff6b35]">grow revenue</span> with websites and AI that run on autopilot.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Custom websites, automations, and AI-driven systems that save 40% of your time, increase sales, and make marketing simpler.<br/>So you can focus on what you do best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contact">
              <button className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold text-lg cursor-pointer">
                Start Your Project
              </button>
            </Link>
            {/* <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors font-semibold text-lg cursor-pointer">
              View Our Work
            </button> */}
          </div>

          <div className="flex flex-col items-center gap-2 text-gray-500 mb-4">
            <span className="text-sm">We help teams remotely across the globe and locally in and around <span className="text-[#ff6b35]">Palm Beach County, FL </span></span>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#ff6b35] mb-2">32%</div>
              <div className="text-gray-400">Avg. Client Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#ff6b35] mb-2">40%
              </div>
              <div className="text-gray-400">Avg. Time Saved Through Automation</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#ff6b35] mb-2">94%
              </div>
              <div className="text-gray-400">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#ff6b35] mb-2">11Y+</div>
              <div className="text-gray-400">Industry Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section 
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-400 mb-10">
            Trusted by businesses in Palm Beach County
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-12 w-32 rounded bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 text-sm"
                aria-hidden="true"
              >
                Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Case Study Section */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Results That Speak
          </h2>
          <div className="max-w-3xl mx-auto bg-[#1a1a2e] border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="text-sm text-[#ff6b35] font-semibold uppercase tracking-wider mb-3">
              Home repair company
            </div>
            <p className="text-gray-400 mb-4">
              Leads were falling through the cracks; manual follow-up couldn&apos;t keep up.
            </p>
            <p className="text-gray-300 mb-6">
              We built an automated lead capture and follow-up system.
            </p>
            <div className="flex flex-wrap gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#ff6b35]">60% → 100%</div>
                <div className="text-sm text-gray-500">Follow-up rate</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#ff6b35]">15 hrs/week</div>
                <div className="text-sm text-gray-500">Time saved</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#ff6b35]">32%</div>
                <div className="text-sm text-gray-500">Revenue up in 6 months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section 
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.08),transparent_50%)]" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not ready for a call? Get a free Website & Lead Flow Audit
          </h2>
          <p className="text-gray-400 mb-8">
            Share your website URL and we&apos;ll review it and send a short report with 3–5 actionable improvements within 48 hours.
          </p>
          <Link to="/free-audit">
            <button className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold text-lg cursor-pointer">
              Get Your Free Audit
            </button>
          </Link>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with innovative digital solutions.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold text-lg cursor-pointer">
              Let's Talk
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
