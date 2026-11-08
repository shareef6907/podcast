import {
  ADDRESS,
  EMAIL,
  GEO,
  LEGAL_NAME,
  PHONE,
  PHONE_DISPLAY,
  SITE_URL,
  SOCIAL,
  absoluteUrl,
} from './site';

/**
 * Structured data for podcastbahrain.com.
 *
 * The site previously had NO JSON-LD at all. These builders follow the shape
 * already used by the sibling production sites in this fleet
 * (ProfessionalService + legalName "Bahrain Nights Premiera Live" +
 * alternateName for the local brand), so the seven sites describe the same
 * company the same way.
 *
 * No rating or review structured data is emitted — that is banned by the
 * fleet's content gate, and there is no genuine review corpus to draw from
 * anyway.
 */

/** The organisation itself. Used on the homepage. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Premiera Live',
    legalName: LEGAL_NAME,
    alternateName: 'Podcast Bahrain',
    description:
      'Professional video podcast production in Bahrain. Cinema-quality multi-camera setups, a mobile podcast studio and fast delivery for creators, businesses and thought leaders.',
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      addressCountry: ADDRESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    sameAs: [SOCIAL.instagram, SOCIAL.tiktok],
    priceRange: '$$',
    // No openingHours / openingHoursSpecification is emitted: this site states
    // no business hours anywhere, and structured data must not assert a company
    // fact that cannot be verified on the page.
    areaServed: [
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'City', name: 'Dammam' },
      { '@type': 'City', name: 'Khobar' },
      { '@type': 'City', name: 'Dhahran' },
      { '@type': 'City', name: 'Jubail' },
    ],
    service: [
      {
        '@type': 'Service',
        name: 'Video Podcast Production',
        description:
          'Multi-camera video podcast recording with cinema cameras and professional audio, anywhere in Bahrain.',
      },
      {
        '@type': 'Service',
        name: 'Mobile Podcast Studio',
        description:
          'A full production studio brought on location, turning any space into a professional recording environment.',
      },
      {
        '@type': 'Service',
        name: 'Podcast Post-Production',
        description:
          'Audio and video editing, colour grading, intro and outro, social clips and platform distribution support.',
      },
    ],
  };
}

/** A single service offering. Used on /services. */
export function serviceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Video Podcast Production in Bahrain',
    serviceType: 'Video podcast production and post-production',
    description:
      'Professional video podcast production in Bahrain: multi-camera recording, a mobile studio, audio, lighting and editing. Delivered by Premiera Live.',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Premiera Live',
      legalName: LEGAL_NAME,
      telephone: PHONE,
      email: EMAIL,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Kingdom of Bahrain',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/booking`,
      servicePhone: PHONE,
    },
  };
}

/** The FAQ list, rendered as FAQPage structured data. */
export function faqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** A single blog post, rendered as BlogPosting structured data. */
export function blogPostJsonLd(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Premiera Live',
      legalName: LEGAL_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/og-image.jpg'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

/** The breadcrumb shown on inner pages. */
export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** The blog index, described as a Blog with its posts listed. */
export function blogIndexJsonLd(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Podcast Bahrain Blog',
    description:
      'Podcast production insights from Premiera Live: recording in Bahrain, equipment choices, multi-camera setups and growing a podcast across the GCC.',
    url: absoluteUrl('/blog'),
    publisher: {
      '@type': 'Organization',
      name: 'Premiera Live',
      legalName: LEGAL_NAME,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: absoluteUrl(post.image),
      datePublished: post.dateISO,
      url: absoluteUrl(`/blog/${post.slug}`),
    })),
  };
}

/** The portfolio, described as a collection of the productions shown. */
export function portfolioJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Podcast Production Portfolio',
    description:
      'Selected video podcast productions by Premiera Live, including corporate interview series, lifestyle and technology shows.',
    url: absoluteUrl('/portfolio'),
    isPartOf: {
      '@type': 'WebSite',
      name: 'Premiera Live',
      url: SITE_URL,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: item.title,
          description: item.description,
          image: absoluteUrl(item.image),
          genre: item.category,
          creator: {
            '@type': 'Organization',
            name: 'Premiera Live',
            legalName: LEGAL_NAME,
          },
        },
      })),
    },
  };
}

/** The about page, describing the company behind the work. */
export function aboutJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Premiera Live — Podcast Bahrain',
    description:
      'Premiera Live is a Bahrain Nights Premiera Live company producing cinema-quality video podcasts across the Kingdom of Bahrain.',
    url: absoluteUrl('/about'),
    mainEntity: {
      '@type': 'Organization',
      name: 'Premiera Live',
      legalName: LEGAL_NAME,
      alternateName: 'Podcast Bahrain',
      url: SITE_URL,
      telephone: PHONE,
      email: EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: ADDRESS.addressLocality,
        addressRegion: ADDRESS.addressRegion,
        addressCountry: ADDRESS.addressCountry,
      },
    },
  };
}

/** The booking page, described as a ContactPage with the booking channel. */
export function bookingJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Book a Podcast Session — Podcast Bahrain by Premiera Live',
    description:
      'Book a professional podcast recording session in Bahrain with Premiera Live. Request a quote or reach us directly on WhatsApp.',
    url: absoluteUrl('/booking'),
    mainEntity: {
      '@type': 'Service',
      name: 'Podcast Recording Session Booking',
      serviceType: 'Video podcast production',
      provider: {
        '@type': 'ProfessionalService',
        name: 'Premiera Live',
        legalName: LEGAL_NAME,
        telephone: PHONE,
        email: EMAIL,
        url: SITE_URL,
      },
      areaServed: { '@type': 'Country', name: 'Bahrain' },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: absoluteUrl('/booking'),
        servicePhone: PHONE,
      },
    },
  };
}

export { PHONE_DISPLAY };
