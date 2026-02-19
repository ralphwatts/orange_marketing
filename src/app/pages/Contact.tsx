import React, { useState } from 'react';
import { useSearchParams } from 'react-router';
import { SEO } from '../components/SEO';

const serviceOptions = [
  'Web Development & Design',
  'App Development',
  'AI Integration & Automation',
  'AI Training / Personal AI Tutoring',
  'AI Assessment',
  'Internet Marketing',
  'Analytics & Growth',
  'Strategy & Consulting',
  'Lead Generation',
  'Other',
];

function getInitialSelectedFromInterest(interest: string | null): string[] {
  if (interest === 'ai-training') return ['AI Training / Personal AI Tutoring'];
  if (interest === 'ai-assessment') return ['AI Assessment'];
  return [];
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const interest = searchParams.get('interest');
  const [selectedServices, setSelectedServices] = useState<string[]>(() =>
    getInitialSelectedFromInterest(interest)
  );

  const toggleService = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="Contact"
        description="Get in touch with Orange Digital. Tell us about your business and we'll get back to you soon. Palm Beach County, FL."
        path="/contact"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'Contact | Orange Digital',
          description: 'Get in touch with Orange Digital. Tell us about your business.',
          url: baseUrl + '/contact',
        })}
      />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Get in <span className="text-[#ff6b35]">Touch</span>
          </h1>
          <p className="text-gray-400 mb-6">
            Tell us about your business and we&apos;ll get back to you soon.
          </p>

          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            {interest && (
              <input type="hidden" name="interest" value={interest} />
            )}

            {/* Honeypot - hidden from users, bots fill it */}
            <p className="absolute -left-[9999px] w-1 h-1 overflow-hidden" aria-hidden="true">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                placeholder="(555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                placeholder="Your company"
              />
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-300 mb-3">
                Services interested in
              </span>
              <div className="grid grid-cols-2 gap-3">
                {serviceOptions.map((value) => (
                  <label
                    key={value}
                    className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-white transition-colors"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={value}
                      checked={selectedServices.includes(value)}
                      onChange={() => toggleService(value)}
                      className="w-4 h-4 rounded border-white/20 bg-[#1a1a2e] text-[#ff6b35] focus:ring-[#ff6b35] focus:ring-offset-0 focus:ring-2"
                    />
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
