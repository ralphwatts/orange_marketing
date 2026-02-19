import {
  GraduationCap,
  FileSearch,
  Check,
  Calendar,
  FileText,
  MessageSquare,
  Target,
  Clock,
  DollarSign,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from '../components/SEO';

const assessmentSteps = [
  { icon: Calendar, title: 'Book & 45-min interview', body: 'We meet on Zoom to uncover your biggest bottlenecks and goals.' },
  { icon: FileText, title: 'We analyze your bottlenecks', body: 'Your transcript is analyzed to find the right AI tools for your business.' },
  { icon: FileSearch, title: 'You get a polished report', body: 'A custom report with tool recommendations and next steps.' },
  { icon: MessageSquare, title: '30-min review & next steps', body: 'We walk through the report and you can add implementation or tutoring.' },
];

export default function AITraining() {
  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="AI Training & Personal AI Tutoring for Executives"
        description="Personal AI tutor and AI assessment for executives, entrepreneurs, and small business owners. High-leverage AI skills, 1-on-1 or assessment-first. Orange Digital, Palm Beach County, FL."
        path="/ai-training"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'AI Training & Personal AI Tutoring | Orange Digital',
          description: 'Personal AI tutoring and AI assessments for executives and business owners who want to leverage AI without generic courses.',
          url: baseUrl + '/ai-training',
        })}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] border border-[#ff6b35]/50 rounded-full mb-8">
            <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-wider">
              Personal AI Tutoring & Assessments
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI training that fits <span className="text-[#ff6b35]">your role</span>, not a one-size-fits-all course.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            High-leverage skills, 1-on-1 or assessment-first. In person or remote—so you can implement AI where it matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?interest=ai-assessment">
              <button className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer">
                Get your AI assessment
              </button>
            </Link>
            <Link to="/contact?interest=ai-training">
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors font-semibold cursor-pointer">
                Book a free 30-minute call
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who this is for</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Senior leaders, founders, and small business owners who need to leverage the latest AI—but don&apos;t have time for generic courses or want tailored, high-ROI help. You&apos;d rather invest in skills that pay off quickly and can often be expensed as personal development.
          </p>
        </div>
      </section>

      {/* Two offers */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Two ways to get started</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Offer A — AI Assessment */}
            <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-8 flex flex-col">
              <div className="w-14 h-14 bg-[#ff6b35]/20 rounded-xl flex items-center justify-center mb-6">
                <FileSearch className="w-7 h-7 text-[#ff6b35]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Assessment</h3>
              <p className="text-gray-400 mb-4 flex-grow">
                A 45-minute Zoom interview where we uncover your biggest bottlenecks. We analyze the conversation and deliver a custom report with off-the-shelf AI tools that solve your pain points—then a 30-minute review call to break it down and discuss implementation or ongoing tutoring.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="text-2xl font-bold text-[#ff6b35]">$999</span>
                <span className="text-gray-500 text-sm self-center">One-time</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Check className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                  6+ hours per week returned for many clients
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Check className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                  Average tool cost ~$40/month
                </li>
              </ul>
              <Link to="/contact?interest=ai-assessment" className="mt-auto">
                <button className="w-full px-6 py-3 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer">
                  Get your assessment
                </button>
              </Link>
            </div>

            {/* Offer B — Personal AI Tutoring */}
            <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-8 flex flex-col">
              <div className="w-14 h-14 bg-[#ff6b35]/20 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-[#ff6b35]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Personal AI Tutoring</h3>
              <p className="text-gray-400 mb-4 flex-grow">
                1–2 hours per week with a dedicated tutor, plus recorded video modules between sessions so you keep building skills. In person or remote. Built for executives and entrepreneurs who want high-leverage AI skills without becoming technical—often expensable through your business.
              </p>
              <p className="text-gray-500 text-sm mb-6">Investment tailored to your goals.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Check className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                  1–2 hours per week + modules
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Check className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                  In person or remote
                </li>
              </ul>
              <Link to="/contact?interest=ai-training" className="mt-auto">
                <button className="w-full px-6 py-3 bg-transparent border border-[#ff6b35]/50 text-[#ff6b35] rounded-lg hover:bg-[#ff6b35]/10 transition-colors font-semibold cursor-pointer">
                  Book a free 30-min call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works (Assessment) */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">How the AI Assessment works</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Four simple steps from first call to actionable report and next steps.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentSteps.map((step, i) => (
              <div key={i} className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 bg-[#ff6b35]/20 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-[#ff6b35]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes / proof */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What you can expect</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-10 h-10 text-[#ff6b35]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#ff6b35] mb-1">6+ hrs</div>
              <div className="text-gray-400 text-sm">Per week returned (typical)</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <DollarSign className="w-10 h-10 text-[#ff6b35]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#ff6b35] mb-1">~$40</div>
              <div className="text-gray-400 text-sm">Avg. monthly tool cost</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Target className="w-10 h-10 text-[#ff6b35]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#ff6b35] mb-1">10+</div>
              <div className="text-gray-400 text-sm">Assessments completed</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-10 h-10 text-[#ff6b35]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#ff6b35] mb-1">High ROI</div>
              <div className="text-gray-400 text-sm">Positive outcomes & retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to leverage AI without the guesswork?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Get your AI assessment or book a free 30-minute call to see if personal tutoring is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?interest=ai-assessment">
              <button className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer">
                Get your assessment
              </button>
            </Link>
            <Link to="/contact?interest=ai-training">
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors font-semibold cursor-pointer">
                Book a free 30-min call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
