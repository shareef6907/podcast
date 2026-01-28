import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Services() {
  const equipment = [
    {
      name: 'Sony FX6',
      description: 'Cinema camera with full-frame sensor, 4K 120fps, incredible low-light performance.',
      image: '/images/services/1.jpg',
    },
    {
      name: 'Sony A7S III',
      description: 'World-renowned for low-light video. Perfect for B-roll and multi-angle coverage.',
      image: '/images/services/2.jpg',
    },
    {
      name: 'Blackmagic ATEM Mini ISO',
      description: 'Professional live switching with simultaneous ISO recording of all camera feeds.',
      image: '/images/services/3.jpg',
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '280',
      description: 'Perfect for first-time podcasters',
      features: [
        '2 Hours Recording Time',
        '1 Camera Setup (Sony A7S III)',
        'Basic Audio Setup',
        'Basic Editing',
        'Digital File Delivery',
        '24-Hour Turnaround',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '520',
      description: 'Most popular for serious creators',
      features: [
        '4 Hours Recording Time',
        'Multi-Camera Setup (2-3 cameras)',
        'Professional Audio with Lavs',
        'Full Editing & Color Grading',
        'Social Media Clips (3-5)',
        '12-Hour Priority Delivery',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '840',
      description: 'For professional productions',
      features: [
        'Full Day Recording',
        '4+ Camera Setup with Director',
        'Premium Audio Mastering',
        'Cinematic Color Grading',
        'Full Marketing Package',
        'Platform Distribution Support',
        'Same-Day Rush Available',
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Services & Pricing | Podcast Bahrain</title>
        <meta name="description" content="Professional podcast production services in Bahrain. Multi-camera setups, mobile studio, editing, and distribution. Packages from BHD 280." />
        <link rel="canonical" href="https://podcastbahrain.com/services" />
      </Head>

      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional Podcast<br /><span className="text-gold">Production Services</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              From single-camera recordings to full production crews. 
              Everything you need to create world-class content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/97339007750"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get a Quote
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition-all"
              >
                Book Now
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              End-to-end podcast production services tailored to your needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 h-full hover:border-gold/50 transition-all">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Recording</h3>
                <p className="text-gray-400 mb-4">
                  Professional recording with cinema cameras, studio-grade mics, and expert technicians.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Multi-camera setups
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    4K resolution
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Isolated audio tracks
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 h-full hover:border-gold/50 transition-all">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Production</h3>
                <p className="text-gray-400 mb-4">
                  Expert editing, color grading, and audio mastering to make your content shine.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Professional editing
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Color grading
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Audio mastering
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 h-full hover:border-gold/50 transition-all">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Distribution</h3>
                <p className="text-gray-400 mb-4">
                  Get your podcast on all major platforms with optimized clips for social media.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    YouTube, Spotify, Apple
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Social media clips
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Thumbnails & graphics
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Gear</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">Cinema-Grade Equipment</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The same cameras used in Hollywood productions, now for your podcast.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {equipment.map((item, index) => (
              <AnimatedSection key={item.name} delay={index * 0.1}>
                <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-gold/50 transition-all">
                  <div className="aspect-video bg-gray-800 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gold mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">Transparent Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Clear pricing with everything included. No hidden fees.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.name} delay={index * 0.1}>
                <div className={`relative bg-gray-900 rounded-2xl overflow-hidden h-full flex flex-col ${
                  pkg.popular ? 'border-2 border-gold' : 'border border-gray-800'
                }`}>
                  {pkg.popular && (
                    <div className="bg-gold text-black text-center py-2 text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-gold">BHD {pkg.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-gray-300 text-sm">
                          <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/97339007750?text=Hi!%20I%27m%20interested%20in%20the%20${pkg.name}%20package%20(BHD%20${pkg.price}).`}
                      className={`block w-full py-3 rounded-full font-bold text-center transition-all ${
                        pkg.popular 
                          ? 'bg-gold hover:bg-yellow-400 text-black' 
                          : 'bg-gray-800 hover:bg-gold text-white hover:text-black'
                      }`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 12-Hour Delivery Banner */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              12-Hour Delivery Guarantee
            </h2>
            <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
              Record today, publish tomorrow. We deliver your edited episode in just 12 hours — the fastest in the Gulf.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-full transition-all"
            >
              Book Your Session
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start?
            </h2>
            <p className="text-gray-400 mb-8">
              Contact us today to discuss your podcast needs and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/97339007750"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+97339007750"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call +973 3900 7750
              </a>
              <a
                href="mailto:shareef@eventsbahrain.com"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
