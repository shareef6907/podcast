import Head from 'next/head';
import AnimatedSection from '../../components/AnimatedSection';
import { useState } from 'react';
// Remove mapbox imports
// import dynamic from 'next/dynamic';

// Comment out Map component
// const Map = dynamic(() => import('react-map-gl'), { ssr: false });

export default function About() {
  const [viewState, setViewState] = useState({
    longitude: 50.58,
    latitude: 26.22,
    zoom: 10
  });

  return (
    <>
      <Head>
        <title>About Us - Bahrain Nights Podcast Studio</title>
        <meta name="description" content="Learn about Bahrain Nights Podcast Studio, our mission, history, and our commitment to delivering unparalleled podcasting experiences." />
      </Head>

      {/* Header Banner */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Bahrain Nights</h1>
          <p className="text-xl max-w-3xl mx-auto">We deliver unparalleled podcasting experiences with state-of-the-art equipment and expertise.</p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <p className="text-xl leading-relaxed mb-8">
                "To deliver unparalleled podcasting experiences with state-of-the-art equipment and expertise, anywhere in Bahrain."
              </p>
              <p className="text-lg">
                At Bahrain Nights, we believe that everyone deserves access to professional podcasting resources. Our mobile studio setup eliminates barriers to entry, bringing cinema-quality recording capabilities directly to you, no matter where you are in Bahrain.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story / History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="/images/founder.jpg" 
                alt="Shareef Ali, Founder" 
                className="rounded-lg shadow-xl w-full"
                onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Shareef+Ali'} 
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Bahrain Nights was established in 2014 by Shareef Ali, a passionate media professional with a vision to elevate the podcasting scene in Bahrain.
              </p>
              <p className="mb-4">
                What started as a small operation has grown into a trusted name in mobile professional podcast production, serving clients from all over Bahrain and neighboring regions.
              </p>
              <p>
                Our journey has been defined by a commitment to quality, innovation, and exceptional service. Through continuous investment in cutting-edge equipment and technical expertise, we've positioned ourselves as the premier provider of mobile podcast solutions in the region.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bahrain Nights</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-lg border border-gray-700 h-full">
                <div className="text-gold text-4xl mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Uncompromising Quality</h3>
                <p className="text-gray-300">
                  We invest in only the best equipment to ensure your podcast looks and sounds professional from day one.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-lg border border-gray-700 h-full">
                <div className="text-gold text-4xl mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-300">
                  Our technicians bring years of experience in audio and video production, ensuring a smooth recording experience.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-lg border border-gray-700 h-full">
                <div className="text-gold text-4xl mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Unmatched Convenience</h3>
                <p className="text-gray-300">
                  We come to you, eliminating the need for travel or studio rentals, saving you time and resources.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Our Service Areas</h2>
            <p className="text-center max-w-3xl mx-auto mb-12">
              We proudly serve clients throughout Bahrain and have extended our services to neighboring areas in Saudi Arabia, including Dammam, Khobar, Dhahran, and Jubail.
            </p>
          </AnimatedSection>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder for actual map */}
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <p className="text-lg">Interactive Map Will Be Loaded Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gold text-black">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl mb-8">
              Ready to elevate your podcast? Contact us today to discuss your needs.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
              <a href="tel:+97339007750" className="bg-black text-white font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                +973 3900 7750
              </a>
              <a href="https://wa.me/97339007750" className="bg-green-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-green-700 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                WhatsApp
              </a>
              <a href="mailto:shareef@eventsbahrain.com" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
} 