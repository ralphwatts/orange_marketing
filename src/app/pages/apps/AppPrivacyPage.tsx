import { Link, useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { SEO } from '../../components/SEO';

import testYourRecallContent from './policies/test-your-recall.md?raw';

const POLICIES: Record<string, { title: string; content: string }> = {
  'test-your-recall': {
    title: 'Test Your Recall',
    content: testYourRecallContent,
  },
};

export default function AppPrivacyPage() {
  const { appName } = useParams<{ appName: string }>();
  const policy = appName ? POLICIES[appName] : null;

  if (!policy) {
    return (
      <div className="min-h-screen bg-[#0a0a1e] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">App not found</h1>
          <p className="text-gray-400 mb-6">The page you're looking for doesn't exist.</p>
          <Link to="/" className="text-[#ff6b35] hover:text-[#ff5520] font-semibold">
            Go to home
          </Link>
        </div>
      </div>
    );
  }

  const { title, content } = policy;
  const path = `/apps/${appName}`;

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title={`Privacy Policy – ${title}`}
        description={`Privacy Policy for ${title}, a mobile application from Orange Digital.`}
        path={path}
      />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e] via-[#1a1535] to-[#0a0a1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,53,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="[&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mb-6 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-white/10 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-[#ff6b35] [&_a]:no-underline hover:[&_a]:text-[#ff5520] hover:[&_a]:underline [&_ul]:text-gray-300 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:text-gray-300 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1 [&_hr]:border-white/10 [&_hr]:my-8 [&_strong]:text-white">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </div>
      </section>
    </div>
  );
}
