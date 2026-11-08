import { blogPosts } from '../data/blog';

/**
 * Sitemap for podcastbahrain.com — served at /sitemap.xml.
 *
 * The site previously had NO sitemap.xml at all (404), so Google could only
 * discover pages by crawling. This is generated from the same `blogPosts`
 * source that renders the pages, so a post can never appear in the sitemap
 * without also having a real page behind it.
 *
 * Implemented as a Pages Router route with getServerSideProps so the file is
 * served from the root path where Google looks for it.
 */

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/portfolio', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq', changefreq: 'monthly', priority: '0.8' },
  { path: '/booking', changefreq: 'monthly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
];

const BASE_URL = 'https://www.podcastbahrain.com';

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function getServerSideProps({ res }) {
  const urls = [
    ...STATIC_ROUTES.map((route) => ({
      // The homepage canonical is emitted with a trailing slash, so the
      // sitemap must use the exact same URL — otherwise the sitemap and the
      // canonical disagree on the home page.
      loc: route.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${route.path}`,
      changefreq: route.changefreq,
      priority: route.priority,
    })),
    ...blogPosts.map((post) => ({
      loc: `${BASE_URL}/blog/${post.slug}`,
      lastmod: post.dateISO,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${xmlEscape(url.loc)}</loc>${
      url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''
    }
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  res.write(body);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
