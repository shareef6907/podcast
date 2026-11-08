import Head from 'next/head';
import {
  BRAND_NAME,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  canonical,
} from '../lib/site';

/**
 * A single `<Head>` emitter for every page.
 *
 * Before this existed, seven of the eight pages had no canonical at all, no
 * og:url, no og:image and no Twitter card, and the two that had a canonical
 * disagreed about the host. Every page now goes through this component so the
 * metadata for a page cannot drift from the metadata for another page.
 *
 * Note: `og:title` and `<title>` are deliberately the same string. They were
 * separate literals before and drifted apart on sibling sites in this fleet.
 *
 * `title` is the COMPLETE title, passed verbatim. Each page keeps the exact
 * title it already had — the brand model requires the head keyword to stay in
 * position 1 with the brand appended after it, and rewriting the titles here
 * would churn SERP snippets for no gain.
 */
export default function Seo({
  title,
  description,
  path = '/',
  image = OG_IMAGE,
  imageAlt = OG_IMAGE_ALT,
  imageWidth = 1200,
  imageHeight = 630,
  type = 'website',
  keywords,
  jsonLd,
  noindex = false,
  children,
}) {
  const fullTitle = title || SITE_NAME;
  const url = canonical(path);

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={url} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image.startsWith('http') ? image : absoluteUrl(image)} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={image.startsWith('http') ? image : absoluteUrl(image)}
      />

      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}

      {children}
    </Head>
  );
}

export { SITE_URL };
