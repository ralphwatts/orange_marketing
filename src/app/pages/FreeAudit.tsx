import { Link } from 'react-router';
import { SEO } from '../components/SEO';

export default function FreeAudit() {
  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="Free Website & Lead Flow Audit | Orange Digital"
        description="Get a free audit of your website and lead flow. Share your URL and we'll send a short report with 3–5 actionable improvements within 48 hours. Palm Beach County, FL."
        path="/free-audit"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'Free Website & Lead Flow Audit | Orange Digital',
          description: 'Share your website URL and we\'ll review it and send a short report with actionable improvements within 48 hours.',
          url: baseUrl + '/free-audit',
        })}
      />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Free <span className="text-[#ff6b35]">Website & Lead Flow</span> Audit
          </h1>
          <p className="text-gray-400 mb-10">
            Share your website URL and tell us where your leads come from. We&apos;ll review your site and, based on your answers, send you a short report with 3–5 actionable improvements within 48 hours.
          </p>

          <form
            name="audit"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you-audit"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="audit" />

            <p className="absolute -left-[9999px] w-1 h-1 overflow-hidden" aria-hidden="true">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="audit-name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="audit-name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="audit-email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="audit-email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="audit-company" className="block text-sm font-medium text-gray-300 mb-2">
                Company (optional)
              </label>
              <input
                type="text"
                id="audit-company"
                name="company"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="audit-website" className="block text-sm font-medium text-gray-300 mb-2">
                Website URL
              </label>
              <input
                type="url"
                id="audit-website"
                name="website"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                placeholder="https://yourcompany.com"
              />
            </div>

            <div>
              <label htmlFor="audit-lead-source" className="block text-sm font-medium text-gray-300 mb-2">
                Where do most of your leads come from?
              </label>
              <select
                id="audit-lead-source"
                name="lead-source"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
              >
                <option value="">Select one</option>
                <option value="Website form">Website form</option>
                <option value="Google / Search">Google / Search</option>
                <option value="Referrals">Referrals</option>
                <option value="Social media">Social media</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer"
              >
                Get My Free Audit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
