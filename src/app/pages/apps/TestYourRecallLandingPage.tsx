import React from 'react';
import { Link } from 'react-router';
import { SEO } from '../../components/SEO';

import screen1 from './images/tyrc/screen-1.png';
import screen2 from './images/tyrc/screen-2.png';
import screen3 from './images/tyrc/screen-3.png';
import screen4 from './images/tyrc/screen-4.png';
import screen5 from './images/tyrc/screen-5.png';

const PREVIEWS = [
  { src: screen1, alt: 'App preview 1' },
  { src: screen2, alt: 'App preview 2' },
  { src: screen3, alt: 'App preview 3' },
  { src: screen4, alt: 'App preview 4' },
  { src: screen5, alt: 'App preview 5' },
];

export default function TestYourRecallLandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="Test Your Recall"
        description="Daily word memory challenge. Climb the leaderboard and challenge friends. Train your brain in under a minute. Same daily words, one global leaderboard."
        path="/apps/test-your-recall"
      />
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Test Your Recall</h1>
          <p className="text-lg md:text-xl text-[#ff6b35] font-semibold mb-4">Daily Word Memory Challenges</p>
          <p className="text-gray-300 leading-relaxed mb-10">
            Daily word memory challenge. Climb the leaderboard and challenge friends. Train your brain in under a minute.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-12">
        <div className="max-w-7xl mx-auto overflow-x-auto pb-4">
          <div className="flex w-max min-w-full justify-center gap-4">
            {PREVIEWS.map(({ src, alt }) => (
              <div key={alt} className="flex-shrink-0">
                <img
                  src={src}
                  alt={alt}
                  className="h-[28rem] w-auto rounded-xl border border-white/10 object-cover shadow-[0_0_24px_rgba(255,255,255,0.18),0_0_48px_rgba(255,107,53,0.14)]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1535]/50 to-[#0a0a1e]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-gray-300 text-center text-lg mb-8">
            Same daily words. One global leaderboard. See how you stack up.
          </p>
          <ul className="space-y-4 text-gray-300 mb-8">
            <li>
              <span className="font-semibold text-white">DAILY CHALLENGE</span> — One round per day, same words for everyone. Climb the ranks.
            </li>
            <li>
              <span className="font-semibold text-white">VERSUS MODE</span> — Challenge a friend. Same round, same words. Winner takes the bragging rights.
            </li>
            <li>
              <span className="font-semibold text-white">STREAKS & BADGES</span> — Play under a minute a day. Build a streak and earn badges.
            </li>
            <li>
              <span className="font-semibold text-white">QUICK PLAY & CUSTOM</span> — Practice with Quick Play (Easy/Medium/Hard) or custom word count and length. Train your brain at your own pace.
            </li>
          </ul>
          <p className="text-gray-300 text-center mb-10">
            Train your brain in under a minute a day. Download and join the leaderboard.
          </p>
          <div className="flex flex-col items-center gap-4">
            {/*<button
              type="button"
              className="px-8 py-3 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold cursor-pointer"
              aria-label="Download and join the leaderboard"
            >
              Download and join the leaderboard
            </button>*/}
            <Link
              to="/apps/test-your-recall/policy"
              className="text-gray-400 hover:text-[#ff6b35] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
