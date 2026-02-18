import { Link } from 'react-router';
import { Code2, Zap, BarChart3, MessageSquare, Check, Clock, Target, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SEO } from '../components/SEO';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Websites & Funnels That Convert',
      description: 'Sites and landing pages built to turn visitors into leads and buyers.',
    },
    {
      icon: Zap,
      title: 'AI & Automation That Cuts Busywork',
      description: 'Workflows and tools that automate follow-up and repetitive tasks so you scale without adding staff.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Growth Systems',
      description: 'Data and marketing systems that show where growth comes from and how to get more of it.',
    },
    {
      icon: MessageSquare,
      title: 'Strategy & Roadmaps',
      description: 'Clear plans and ongoing support so you know what to build next and stay ahead.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="Services"
        description="Custom systems for business growth: web development, AI & automation, analytics, and strategy. We help businesses automate operations and convert more leads. Palm Beach County, FL."
        path="/services"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'Services | Orange Digital',
          description: 'Custom systems for business growth: web development, AI & automation, analytics, and strategy.',
          url: baseUrl + '/services',
        })}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Smarter<br />
              Systems.<br />
              <span className="text-[#ff6b35]">Simpler Sales.</span><br />
              Less Busywork.
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              We help businesses automate their operations and grow faster with custom systems that actually work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer">
                  Get Your Free Strategy Call
                </button>
              </Link>
              {/* <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors font-semibold cursor-pointer">
                See How It Works
              </button> */}
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-white/10">
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">ROLLER</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#ff6b35]/20 rounded-lg">
                    <span className="text-sm">📧 Deliver the Message</span>
                    <span className="text-xs text-gray-500">Today</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm">📞 Follow up call</span>
                    <span className="text-xs text-gray-500">Tomorrow</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm">✅ Send contract</span>
                    <span className="text-xs text-gray-500">Friday</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Most Small Businesses Are Held<br />Back by Their Systems
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#1a1a2e] p-8 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wasting Time</h3>
              <p className="text-gray-400">
                Hours spent on manual tasks, data entry, and following up with leads instead of growing your business.
              </p>
            </div>
            <div className="bg-[#1a1a2e] p-8 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-[#ff6b35]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Missing Leads</h3>
              <p className="text-gray-400">
                Potential customers slip through the cracks because you don't have time to follow up consistently.
              </p>
            </div>
            <div className="bg-[#1a1a2e] p-8 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Team Bottlenecks</h3>
              <p className="text-gray-400">
                Your team is overwhelmed with repetitive tasks and can't focus on what they do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.08),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            We Build the Systems That Grow<br />Your Business
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1622127921946-f58d7ef32593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhcHRvcCUyMGRlc2slMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxMzY0ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business workspace" 
                className="rounded-2xl shadow-2xl w-full ring-1 ring-white/10"
              />
              <div className="absolute bottom-6 left-6 bg-[#1a1a2e] rounded-lg p-4 border-l-4 border-green-500 border border-white/10">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Lead Captured & Qualified</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Build the Foundation</h3>
              <p className="text-lg text-gray-400 mb-6">
                We create custom CRM and workflow systems tailored to your business - no cookie-cutter solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Custom pipeline built for your sales process</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Automated lead capture from all sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Team dashboards and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Integration with your existing tools</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Automate Follow-Up */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-6">Automate the Follow-Up</h3>
              <p className="text-lg text-gray-400 mb-6">
                Never let a lead go cold again. Our systems handle follow-ups automatically so you can focus on closing deals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Smart Email Sequences</div>
                    <div className="text-sm text-gray-400">Personalized emails sent at the right time</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Instant Notifications</div>
                    <div className="text-sm text-gray-400">Get alerted when leads take action</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-[#1a1a2e] border border-white/10 text-white rounded-2xl p-8">
                <div className="space-y-3 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">10:00 AM</div>
                    <div className="font-semibold">Welcome email sent ✓</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">2:00 PM</div>
                    <div className="font-semibold">Follow-up scheduled</div>
                  </div>
                  <div className="bg-[#ff6b35]/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Tomorrow</div>
                    <div className="font-semibold">SMS reminder queued</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Integration */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback 
                src="/images/blake-wisz-GFrBMipOd_E-unsplash.jpg"
                alt="AI Dashboard" 
                className="rounded-2xl shadow-2xl w-full ring-1 ring-white/10"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Integrate AI & Scale</h3>
              <p className="text-lg text-gray-400 mb-6">
                Add AI-powered tools to handle customer inquiries, qualify leads, and provide instant support 24/7.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <span className="text-gray-400">AI chatbot for instant customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Smart lead qualification and scoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Automated appointment scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We're Not Just a<br />Marketing Agency.
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              We're system builders. We don't just run ads - we build the infrastructure that turns leads into revenue and helps your business run on autopilot.
            </p>
            <p className="text-gray-400">
              Most agencies send you leads and walk away. We build the systems that nurture, qualify, and convert those leads while freeing up your time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-[#ff6b35] mb-3" />
              <div className="text-2xl font-bold mb-1">Growth</div>
              <div className="text-sm text-gray-400">Focused</div>
            </div>
            <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
              <Zap className="w-8 h-8 text-[#ff6b35] mb-3" />
              <div className="text-2xl font-bold mb-1">Automated</div>
              <div className="text-sm text-gray-400">Systems</div>
            </div>
            <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
              <Users className="w-8 h-8 text-[#ff6b35] mb-3" />
              <div className="text-2xl font-bold mb-1">Team</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
              <Target className="w-8 h-8 text-[#ff6b35] mb-3" />
              <div className="text-2xl font-bold mb-1">Results</div>
              <div className="text-sm text-gray-400">Driven</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            What This Means for You
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold text-[#ff6b35] mb-3">5x</div>
              <div className="text-xl font-semibold mb-2">More Leads Converted</div>
              <div className="text-gray-400">With automated follow-up and nurturing</div>
            </div>
            <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold text-[#ff6b35] mb-3">30%</div>
              <div className="text-xl font-semibold mb-2">Time Saved</div>
              <div className="text-gray-400">On manual tasks and admin work</div>
            </div>
            <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold text-[#ff6b35] mb-3">10h+</div>
              <div className="text-xl font-semibold mb-2">Per Week Recovered</div>
              <div className="text-gray-400">To focus on growing your business</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6 text-left">
              <h4 className="font-bold mb-2">Never Lose Sleep</h4>
              <p className="text-gray-400 text-sm">Your system works 24/7, capturing and nurturing leads even when you're not available.</p>
            </div>
            <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6 text-left">
              <h4 className="font-bold mb-2">Easy to Manage</h4>
              <p className="text-gray-400 text-sm">Simple dashboards show exactly what's happening in your business at a glance.</p>
            </div>
            <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6 text-left">
              <h4 className="font-bold mb-2">Scales With You</h4>
              <p className="text-gray-400 text-sm">Handle 10x more leads without hiring more team members.</p>
            </div>
            <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6 text-left">
              <h4 className="font-bold mb-2">Predictable Growth</h4>
              <p className="text-gray-400 text-sm">Know exactly how many leads you need to hit your revenue goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Trusted by Business Owners
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a2e] rounded-xl p-8 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ff6b35]">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-3">
                "This system completely transformed how we handle leads. We went from losing 60% of our inquiries to following up with 100% of them automatically."
              </p>
              <p className="text-sm text-gray-500 mb-6">Result: 100% follow-up rate</p>
              <div className="flex items-center gap-3">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcGVyc29ufGVufDF8fHx8MTc3MTMwNjE4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sarah M."
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-sm text-gray-500">Home Services</div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1a2e] rounded-xl p-8 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ff6b35]">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-3">
                "I got 15 hours back every week. The automated follow-ups alone have paid for the system 10x over. Best investment I've made."
              </p>
              <p className="text-sm text-gray-500 mb-6">Result: 15 hrs/week saved</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-400">JC</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">John Chen</div>
                  <div className="text-sm text-gray-500">Real Estate</div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1a2e] rounded-xl p-8 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ff6b35]">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-3">
                "Finally, a team that understands small business. They built exactly what we needed - no bloat, no complexity. Just results."
              </p>
              <p className="text-sm text-gray-500 mb-6">Result: Custom system delivered in 6 weeks</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-400">MP</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Maria Perez</div>
                  <div className="text-sm text-gray-500">Law Firm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-[#1a1a2e] border border-white/10 text-white rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Growth?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a free strategy call and we'll show you exactly how to build a system that grows your business on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold text-lg cursor-pointer">
                  Book Your Free Call
                </button>
              </Link>
              {/* <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors font-semibold text-lg cursor-pointer">
                See Case Studies
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
