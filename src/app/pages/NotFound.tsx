import { Link } from 'react-router';
import { SEO } from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Orange Digital – Palm Beach County, FL."
        path="/404"
        getSchema={(baseUrl) => ({
          '@type': 'WebPage',
          name: 'Page Not Found | Orange Digital',
          description: 'The requested page could not be found.',
          url: baseUrl + '/404',
        })}
      />
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden py-12">
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#ff6b35]">404</span> – Page Not Found
          </h1>
          <p className="text-gray-400 mb-10 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5520] transition-colors font-semibold text-center cursor-pointer"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
