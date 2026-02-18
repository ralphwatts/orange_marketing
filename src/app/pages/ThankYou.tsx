import { Link } from 'react-router';
import { CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="Thank You"
        description="Thanks for reaching out to Orange Digital. We'll get back to you soon. Palm Beach County, FL."
        path="/thank-you"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'Thank You | Orange Digital',
          description: 'Your message was sent successfully. We\'ll be in touch soon.',
          url: baseUrl + '/thank-you',
        })}
      />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#ff6b35]/20 text-[#ff6b35] mb-8">
            <CheckCircle className="w-12 h-12" aria-hidden />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Message <span className="text-[#ff6b35]">Received</span>
          </h1>
          <p className="text-gray-400 mb-10 text-lg">
            Thanks for getting in touch. We'll review your message and get back to you within 1–2 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold text-center cursor-pointer"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#1a1a2e] border border-white/10 text-white rounded-lg hover:bg-white/5 transition-colors font-semibold text-center cursor-pointer"
            >
              Send Another Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
