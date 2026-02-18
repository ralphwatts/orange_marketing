import { useEffect } from 'react';

const SITE_NAME = 'Orange Digital';

export interface SEOProps {
  title: string;
  description: string;
  /** Path for canonical and og:url (e.g. "/services", "/locations/wellington"). No trailing slash. */
  path?: string;
  /** Schema.org JSON-LD object(s). Single object or array. Injected as one script. */
  schema?: Record<string, unknown> | Record<string, unknown>[];
  /** Optional: build schema with absolute base URL (called in useEffect). Use for Organization, WebSite, WebPage url. */
  getSchema?: (baseUrl: string) => Record<string, unknown> | Record<string, unknown>[];
}

function getOrigin(): string {
  if (typeof window === 'undefined') return '';
  return window.location.origin;
}

export function SEO({ title, description, path = '', schema, getSchema }: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${getOrigin()}${canonicalPath}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (nameOrProperty: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${nameOrProperty}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, nameOrProperty);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:type', 'website', true);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    const resolvedSchema = getSchema ? getSchema(getOrigin()) : schema;
    if (resolvedSchema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(
        Array.isArray(resolvedSchema)
          ? { '@context': 'https://schema.org', '@graph': resolvedSchema }
          : { '@context': 'https://schema.org', ...resolvedSchema }
      );
      script.setAttribute('data-seo-schema', 'true');
      document.head.appendChild(script);
    }

    return () => {
      const prev = document.querySelector('script[data-seo-schema="true"]');
      if (prev?.parentNode) prev.parentNode.removeChild(prev);
    };
  }, [fullTitle, description, canonicalUrl, schema, getSchema]);

  return null;
}
