import Head from 'next/head';
import Link from 'next/link';
import AnimatedSection from '../../components/AnimatedSection';

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Corporate Interview Series",
      category: "Business",
      image: "/images/portfolio/setup1.jpg",
      description: "Multi-episode interview series for a leading Bahrain corporation."
    },
    {
      title: "Travel Vlogger Podcast",
      category: "Lifestyle",
      image: "/images/portfolio/setup2.jpg",
      description: "Location-based recording at a luxury hotel in Manama."
    },
    {
      title: "Tech Talk Show",
      category: "Technology",
      image: "/images/portfolio/setup3.jpg",
      description: "Weekly tech podcast with multiple camera angles."
    }
  ];

  return (
    <>
      <Head>
        <title>Portfolio | Podcast Bahrain - Our Work</title>
        <meta name="description" content="See examples of our professional podcast productions. Cinema-quality video podcasts for businesses, creators, and thought leaders in Bahrain." />
      </Head>

      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider text-gold bg-gold/10 border border-gold/30 rounded-full uppercase">
                Our Work
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Portfolio <span className="text-gold">Showcase</span>
              </h1>
              <p className="text-xl text-gray-400">
                See examples of our professional podcast productions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-gold/50 transition-all duration-500">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-gold font-semibold uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Coming Soon Notice */}
          <AnimatedSection delay={0.4}>
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-gray-900 to-gray-900/50 rounded-2xl border border-gray-800">
                <p className="text-gray-400 mb-4">
                  More portfolio examples coming soon. Want to see specific work samples?
                </p>
                <a 
                  href="https://wa.me/97339007750?text=Hi! I'd like to see more portfolio examples."
                  className="inline-flex items-center gap-2 text-gold hover:text-amber-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Request portfolio via WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold via-amber-500 to-gold">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Ready to Create Your Own?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Let's produce a podcast that showcases your brand professionally.
            </p>
            <Link href="/booking">
              <span className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer">
                Book Your Session
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
