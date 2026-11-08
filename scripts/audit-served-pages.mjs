#!/usr/bin/env node
/**
 * SEO audit for podcastbahrain.com.
 *
 * Audits the RUNNING server (not the build output) and reports the
 * denominator explicitly as "pages served HTTP 200" — the number of pages
 * that exist and are indexable. A clean report against the wrong denominator
 * hides real defects.
 *
 * Usage: node scripts/audit-served-pages.mjs http://localhost:3127
 */

const BASE = process.argv[2] || 'http://localhost:3127';
const HOST = 'https://www.podcastbahrain.com';

const STATIC_ROUTES = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/faq',
  '/booking',
  '/blog',
];

const BLOG_SLUGS = [
  'why-bahrain-is-perfect-for-podcasting',
  'tips-for-hotel-room-recordings',
  'choosing-the-right-microphone',
  'multi-camera-setups',
  'podcast-marketing-gcc',
  'business-podcasts-middle-east',
];

const ROUTES = [
  ...STATIC_ROUTES,
  ...BLOG_SLUGS.map((s) => `/blog/${s}`),
];

const ASSETS = [
  '/og-image.jpg',
  '/images/grid.svg',
  '/images/video-poster.jpg',
  '/images/portfolio/setup1.jpg',
  '/images/portfolio/setup2.jpg',
  '/images/portfolio/setup3.jpg',
  '/images/services/1.jpg',
  '/images/services/2.jpg',
  '/images/services/3.jpg',
  '/images/blog/bahrain-podcasting.jpg',
  '/images/blog/business-podcasts.jpg',
  '/images/blog/hotel-recording.jpg',
  '/images/blog/microphone-selection.jpg',
  '/images/blog/multi-camera.jpg',
  '/images/blog/podcast-marketing.jpg',
];

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.log(`  FAIL  ${msg}`);
};
const pass = (msg) => console.log(`  ok    ${msg}`);

function attr(html, name, value) {
  const re = new RegExp(
    `<meta[^>]*${name}\\s*=\\s*["']${value}["'][^>]*>`,
    'i'
  );
  return re.test(html);
}

function metaContent(html, name) {
  const re = new RegExp(
    `<meta[^>]*(?:name|property)=["']${name}["'][^>]*content=["']([^"']*)["']`,
    'i'
  );
  const m = html.match(re);
  return m ? m[1] : null;
}

function canonicalOf(html) {
  const m = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

function titleOf(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return m ? m[1].trim() : null;
}

function jsonLdBlocks(html) {
  const out = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      out.push(JSON.parse(m[1]));
    } catch (e) {
      out.push({ __parseError: String(e) });
    }
  }
  return out;
}

console.log(`\n=== podcastbahrain.com SEO audit ===`);
console.log(`target: ${BASE}\n`);

console.log(`--- routes (${ROUTES.length}) ---`);
const served = [];

for (const route of ROUTES) {
  const res = await fetch(`${BASE}${route}`);
  const html = await res.text();
  const status = res.status;

  if (status !== 200) {
    fail(`${route} -> HTTP ${status}`);
    continue;
  }
  served.push({ route, html });

  const title = titleOf(html);
  const canonical = canonicalOf(html);
  const description = metaContent(html, 'description');
  const ogTitle = metaContent(html, 'og:title');
  const ogUrl = metaContent(html, 'og:url');
  const ogImage = metaContent(html, 'og:image');
  const ogType = metaContent(html, 'og:type');
  const twitterCard = metaContent(html, 'twitter:card');
  const noindex = attr(html, 'name', 'robots') && /noindex/i.test(html);

  const expectedUrl = route === '/' ? `${HOST}/` : `${HOST}${route}`;

  if (!title) fail(`${route}: missing <title>`);
  else if (title.length < 10 || title.length > 75)
    fail(`${route}: title length ${title.length} out of range`);

  if (!description) fail(`${route}: missing meta description`);
  else if (description.length < 50 || description.length > 300)
    fail(`${route}: description length ${description.length} out of range`);

  if (!canonical) fail(`${route}: missing canonical`);
  else if (canonical !== expectedUrl)
    fail(`${route}: canonical ${canonical} != ${expectedUrl}`);

  if (!ogTitle) fail(`${route}: missing og:title`);
  else if (ogTitle !== title) fail(`${route}: og:title != title`);

  if (!ogUrl) fail(`${route}: missing og:url`);
  else if (ogUrl !== expectedUrl) fail(`${route}: og:url ${ogUrl} != ${expectedUrl}`);

  if (!ogImage) fail(`${route}: missing og:image`);
  else if (!ogImage.startsWith(HOST)) fail(`${route}: og:image not on own host`);

  if (!ogType) fail(`${route}: missing og:type`);
  if (!twitterCard) fail(`${route}: missing twitter:card`);
  if (noindex) fail(`${route}: marked noindex but is in the sitemap`);

  if (route.startsWith('/blog/') && route !== '/blog') {
    if (ogType !== 'article') fail(`${route}: og:type should be article, got ${ogType}`);
  }
}

console.log(
  `  pages served HTTP 200: ${served.length} / ${ROUTES.length}`
);

console.log(`\n--- structured data ---`);
for (const { route, html } of served) {
  const blocks = jsonLdBlocks(html);
  if (!blocks.length) {
    fail(`${route}: no JSON-LD`);
    continue;
  }
  for (const b of blocks) {
    if (b.__parseError) {
      fail(`${route}: JSON-LD does not parse — ${b.__parseError}`);
      continue;
    }
    if (b['@type'] === 'BlogPosting') {
      if (!b.headline) fail(`${route}: BlogPosting missing headline`);
      if (!b.image?.startsWith(HOST))
        fail(`${route}: BlogPosting image not absolute on own host`);
      if (!b.datePublished) fail(`${route}: BlogPosting missing datePublished`);
      if (!b.author?.name) fail(`${route}: BlogPosting missing author`);
    }
    if (b['@type'] === 'ProfessionalService' || b['@type'] === 'Organization') {
      if (b.name !== 'Premiera Live')
        fail(`${route}: org name is "${b.name}", expected "Premiera Live"`);
      if (b.legalName && b.legalName !== 'Bahrain Nights Premiera Live')
        fail(`${route}: legalName is "${b.legalName}"`);
    }
    if (JSON.stringify(b).includes('aggregateRating'))
      fail(`${route}: JSON-LD contains aggregateRating`);
    if (JSON.stringify(b).includes('"Review"'))
      fail(`${route}: JSON-LD contains a Review type`);
  }
}
pass('structured data checked on all served pages');

console.log(`\n--- sitemap ---`);
const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
const sitemap = await sitemapRes.text();
if (sitemapRes.status !== 200) {
  fail(`sitemap.xml -> HTTP ${sitemapRes.status}`);
} else {
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  pass(`sitemap lists ${locs.length} URLs`);
  for (const loc of locs) {
    if (!loc.startsWith(HOST)) fail(`sitemap <loc> not on own host: ${loc}`);
  }
  for (const route of ROUTES) {
    const expected = route === '/' ? `${HOST}/` : `${HOST}${route}`;
    if (!locs.includes(expected)) fail(`sitemap missing ${expected}`);
  }
  for (const loc of locs) {
    if (loc.includes('podcastbahrain.com/"')) fail(`sitemap has malformed loc: ${loc}`);
  }
}

console.log(`\n--- robots.txt ---`);
const robotsRes = await fetch(`${BASE}/robots.txt`);
const robots = await robotsRes.text();
if (robotsRes.status !== 200) {
  fail(`robots.txt -> HTTP ${robotsRes.status}`);
} else {
  if (!robots.includes(`Sitemap: ${HOST}/sitemap.xml`))
    fail('robots.txt missing correct Sitemap directive');
  if (!/User-agent:\s*\*/i.test(robots)) fail('robots.txt missing User-agent');
  else pass('robots.txt present with sitemap directive');
}

console.log(`\n--- assets ---`);
for (const asset of ASSETS) {
  const res = await fetch(`${BASE}${asset}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (res.status !== 200) {
    fail(`${asset} -> HTTP ${res.status}`);
  } else if (buf.length === 0) {
    fail(`${asset} -> 0 bytes (broken image)`);
  } else if (buf.length > 200 * 1024 && /\.(jpg|jpeg|png)$/i.test(asset)) {
    fail(`${asset} -> ${(buf.length / 1024).toFixed(0)}KB exceeds the 200KB repo guideline`);
  } else {
    pass(`${asset} (${(buf.length / 1024).toFixed(0)}KB)`);
  }
}

console.log(`\n--- internal links ---`);
for (const { route, html } of served) {
  const hrefs = [...html.matchAll(/href=["'](\/[^"'#?]*)["']/g)].map((m) => m[1]);
  for (const href of new Set(hrefs)) {
    if (href.startsWith('/_next') || href.startsWith('/images') || href.startsWith('/videos'))
      continue;
    if (href === '/contact') fail(`${route} still links to /contact (404)`);
  }
}

console.log(
  failures === 0
    ? `\n=== PASS — 0 failures across ${served.length} served pages ===\n`
    : `\n=== FAIL — ${failures} failure(s) ===\n`
);
process.exit(failures === 0 ? 0 : 1);
