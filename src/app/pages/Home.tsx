import { Link } from 'react-router';
import { FloatingIcons } from '../components/FloatingIcons';
import { SEO } from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Orange Digital | Digital Innovation & Automation"
        description="We help local businesses grow with websites, automations, and AI-driven systems. Based in Palm Beach County, FL. Digital innovation and automation for smarter operations and simpler sales."
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
            name: 'Orange Digital | Digital Innovation & Automation',
            description: 'We help local businesses grow with websites, automations, and AI-driven systems. Palm Beach County, FL.',
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
              Digital Innovation
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold mb-6 leading-tight">
            Building <span className="text-[#ff6b35]">Smarter</span>
            <br />
            with  <span className="text-[#ff6b35]">AI & Automation</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            We help local businesses grow by creating websites, automations, and AI-driven systems that save time, increase sales, and make marketing simpler.<br/>So owners can focus on what they do best.
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
              <div className="text-5xl md:text-6xl font-bold text-[#ff6b35] mb-2">250+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#ff6b35] mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#ff6b35] mb-2">50+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#ff6b35] mb-2">11Y</div>
              <div className="text-gray-400">Industry Experience</div>
            </div>
          </div>
        </div>
      </section>

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
