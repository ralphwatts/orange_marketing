import { Zap, Check, Bot, Workflow, MessageSquare } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from '../../components/SEO';

export default function AIIntegration() {
  const offerings = [
    'Workflows and tools that automate repetitive tasks and scale your operations',
    'AI chatbots for instant customer support 24/7',
    'Smart lead qualification and scoring',
    'Automated appointment scheduling and follow-up sequences',
    'Integration with your existing CRM and tools',
    'Custom AI solutions tailored to your business processes',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="AI Integration & Automation"
        description="AI-powered tools and automation: chatbots, lead qualification, workflows, and CRM integration. Orange Digital, Palm Beach County, FL."
        path="/services/ai-integration"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'AI Integration & Automation | Orange Digital',
          description: 'AI-powered tools and automation that handle customer inquiries and qualify leads.',
          url: baseUrl + '/services/ai-integration',
        })}
      />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="w-14 h-14 bg-[#ff6b35]/20 rounded-xl flex items-center justify-center mb-6">
            <Zap className="w-7 h-7 text-[#ff6b35]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AI Integration <span className="text-[#ff6b35]">& Automation</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            We add AI-powered tools and automation that handle customer inquiries, qualify leads, and free your team from busywork—so you can focus on growing your business.
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
            <Bot className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">AI That Works for You</h3>
            <p className="text-gray-400 text-sm">Chatbots and assistants that handle support and qualification 24/7.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <Workflow className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Automated Workflows</h3>
            <p className="text-gray-400 text-sm">Follow-ups, reminders, and tasks that run on autopilot.</p>
          </div>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
            <MessageSquare className="w-10 h-10 text-[#ff6b35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart Sequences</h3>
            <p className="text-gray-400 text-sm">Email and SMS sequences that nurture leads without the manual work.</p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-[#1a1a2e] border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Growth?</h2>
            <p className="text-gray-400 mb-8">Book a free strategy call and we'll show you how to build systems that run on autopilot.</p>
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
