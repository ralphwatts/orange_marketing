import { BarChart3, Check, LineChart, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from '../../components/SEO';

export default function AnalyticsGrowth() {
  const offerings = [
    'Dashboards and reporting so you see what matters at a glance',
    'Conversion tracking across your website and campaigns',
    'Funnel analytics to find where leads drop off',
    'Attribution so you know which channels drive revenue',
    'Goal and KPI setup tied to your business outcomes',
    'Ongoing optimization based on data, not guesswork',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="Analytics & Growth"
        description="Data and marketing systems that show where growth comes from and how to get more of it. Dashboards, funnel analytics, and optimization. Orange Digital, Palm Beach County, FL."
        path="/services/analytics-growth"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'Analytics & Growth | Orange Digital',
          description: 'Data and marketing systems that show where growth comes from and how to get more of it.',
          url: baseUrl + '/services/analytics-growth',
        })}
      />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="w-14 h-14 bg-[#ff6b35]/20 rounded-xl flex items-center justify-center mb-6">
            <BarChart3 className="w-7 h-7 text-[#ff6b35]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Analytics <span className="text-[#ff6b35]">& Growth</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Data and marketing systems that show where growth comes from and how to get more of it. We turn numbers into clear next steps.
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
            <LineChart className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Data You Can Use</h3>
            <p className="text-gray-400 text-sm">Dashboards and reports that answer real questions and drive decisions.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <Target className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Funnel Visibility</h3>
            <p className="text-gray-400 text-sm">See where visitors and leads drop off so you can fix the gaps.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <TrendingUp className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Growth Roadmap</h3>
            <p className="text-gray-400 text-sm">Clear goals and KPIs tied to revenue and pipeline growth.</p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-[#1a1a2e] border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow With Data?</h2>
            <p className="text-gray-400 mb-8">Book a free strategy call and we&apos;ll show you how to build analytics that drive real growth.</p>
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
