/**
 * Site-wide constants — the single source of truth for SEO metadata.
 *
 * Previously every page hard-coded its own canonical URL, and the canonical on
 * the homepage pointed at the bare host (`podcastbahrain.com`), which 308-redirects
 * to `www.podcastbahrain.com`. A canonical pointing at a redirect is a weaker
 * signal than one pointing at the host that answers 200, so the www host is used
 * everywhere — matching eventsbahrain / videographybahrain in this fleet.
 */

export const SITE_URL = 'https://www.podcastbahrain.com';

export const SITE_NAME = 'Podcast Bahrain by Premiera Live';
export const BRAND_NAME = 'Premiera Live';
export const LEGAL_NAME = 'Bahrain Nights Premiera Live';
export const CR_NUMBER = 'CR 113587-1';

export const PHONE = '+97339007750';
export const PHONE_DISPLAY = '+973 3900 7750';
export const EMAIL = 'shareef@eventsbahrain.com';
export const WHATSAPP = '97339007750';

export const ADDRESS = {
  addressLocality: 'Manama',
  addressRegion: 'Capital Governorate',
  addressCountry: 'BH',
};

export const GEO = {
  latitude: 26.2235,
  longitude: 50.5876,
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/podcastbahrain',
  tiktok: 'https://www.tiktok.com/@podcastbahrain',
};

/** Default social card. 1200x630 is the size every major scraper expects. */
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_ALT =
  'Podcast Bahrain by Premiera Live — professional video podcast production in Bahrain';

/**
 * Build an absolute URL for a site-relative path.
 * `/` -> https://www.podcastbahrain.com/
 */
export function absoluteUrl(path = '/') {
  if (!path) return `${SITE_URL}/`;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

/**
 * The canonical for a route. Every indexable page must call this so that the
 * canonical can never drift away from the host that actually answers 200.
 */
export function canonical(path = '/') {
  return absoluteUrl(path);
}
