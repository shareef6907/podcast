import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Services | Bahrain Nights - Professional Podcast Studio</title>
        <meta name="description" content="Explore our professional podcast services including recording, production, and distribution packages tailored to your needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Header Banner */}
      <div className="bg-gray-900 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-gold">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Professional podcast solutions tailored to your specific needs, from recording to production and distribution.
          </p>
        </div>
      </div>

      {/* Professional Podcast Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gold">Professional Podcast Services</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We provide end-to-end solutions for podcasters at any level, from beginners to seasoned professionals.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="p-6 bg-gray-900 rounded-lg shadow-xl">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gold text-black mb-4 mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center text-gold">Recording</h3>
              <p className="text-center">
                Professional recording sessions with top-of-the-line equipment and acoustically treated environments, anywhere in Bahrain.
              </p>
            </AnimatedSection>

            <AnimatedSection className="p-6 bg-gray-900 rounded-lg shadow-xl">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gold text-black mb-4 mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center text-gold">Production</h3>
              <p className="text-center">
                Expert audio editing, mixing, and mastering to ensure your podcast sounds professional and engaging.
              </p>
            </AnimatedSection>

            <AnimatedSection className="p-6 bg-gray-900 rounded-lg shadow-xl">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gold text-black mb-4 mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center text-gold">Distribution</h3>
              <p className="text-center">
                Strategic planning and technical assistance to get your podcast on all major platforms and grow your audience.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gold">Service Area</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We provide mobile podcast studio services throughout Bahrain and Saudi Arabia within 150km of Bahrain.
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="p-6 bg-gray-900 rounded-lg shadow-xl">
            <p className="text-center mb-6">
              Our mobile podcast studio brings professional equipment directly to your location, whether you're in Manama, 
              Riffa, Muharraq, Dammam, Al Khobar, or anywhere within our service area.
            </p>
            <div className="text-center">
              <Link href="/booking" legacyBehavior>
                <a className="bg-gold text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 transition inline-block">
                  Check Availability
                </a>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gold mb-12">Our Professional Equipment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="h-48 rounded mb-4 overflow-hidden">
                  <img
                    src="/images/services/1.jpg"
                    alt="Sony FX6 Cinema Camera"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/services/1.jpg";
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gold mb-2">Sony FX6 Cinema Camera</h3>
                <p className="text-gray-300 mb-4">
                  Our professional Sony FX6 cinema camera delivers stunning 4K video with exceptional dynamic range and low-light performance, perfect for capturing cinematic podcast footage at the highest quality.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="h-48 rounded mb-4 overflow-hidden">
                  <img
                    src="/images/services/2.jpg"
                    alt="Sony a7S III Camera"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/services/2.jpg";
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gold mb-2">Sony a7S III Camera</h3>
                <p className="text-gray-300 mb-4">
                  Our Sony a7S III cameras provide incredible 4K video with exceptional low-light capabilities, perfect for capturing detailed footage from multiple angles during your podcast session.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="h-48 rounded mb-4 overflow-hidden">
                  <img
                    src="/images/services/3.jpg"
                    alt="Blackmagic ATEM Mini ISO Extreme"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/services/3.jpg";
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gold mb-2">Blackmagic ATEM Mini ISO Extreme</h3>
                <p className="text-gray-300 mb-4">
                  Multi-camera production made easy with our Blackmagic ATEM Mini ISO Extreme, allowing for seamless switching between multiple angles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gold">Technical Support</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our team of experienced professionals will handle all the technical aspects so you can focus on creating great content.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection className="p-6 bg-gray-900 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gold">Expert Technicians</h3>
              <p className="mb-4">
                Our knowledgeable team will set up, monitor, and manage all technical aspects of your recording session.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Audio and video equipment setup</li>
                <li>Sound level optimization</li>
                <li>Technical troubleshooting</li>
                <li>Multi-track recording</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="p-6 bg-gray-900 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gold">Post-Production Services</h3>
              <p className="mb-4">
                We offer comprehensive post-production services to enhance your podcast.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Audio editing and enhancement</li>
                <li>Background noise removal</li>
                <li>Music and sound effects integration</li>
                <li>Episode compilation and formatting</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Packages Section - Updated with BHD currency */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gold mb-12">Packages & Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="p-6 bg-gray-800">
                <h3 className="text-2xl font-bold text-gold mb-2">Basic Package</h3>
                <div className="text-3xl font-bold text-white mb-4">BHD 280/-</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Up to 2 hours recording time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Basic audio editing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Single camera setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Digital file delivery</span>
                  </li>
                </ul>
                <Link href="/booking" legacyBehavior>
                  <a className="mt-8 block w-full bg-gold hover:bg-amber-600 text-black font-bold py-3 px-4 rounded text-center transition duration-300">
                    Book Now
                  </a>
                </Link>
              </div>
            </div>
            
            {/* Professional Package */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border-2 border-gold">
              <div className="p-6 bg-gold">
                <h3 className="text-2xl font-bold text-black mb-2">Professional Package</h3>
                <div className="text-3xl font-bold text-black mb-4">BHD 520/-</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Up to 4 hours recording time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Professional audio editing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Multi-camera setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Basic color grading</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Social media clips</span>
                  </li>
                </ul>
                <Link href="/booking" legacyBehavior>
                  <a className="mt-8 block w-full bg-gold hover:bg-amber-600 text-black font-bold py-3 px-4 rounded text-center transition duration-300">
                    Book Now
                  </a>
                </Link>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="p-6 bg-gray-800">
                <h3 className="text-2xl font-bold text-gold mb-2">Premium Package</h3>
                <div className="text-3xl font-bold text-white mb-4">BHD 840/-</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Unlimited recording time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Premium audio mastering</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Multi-camera with director</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Advanced color grading</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Full marketing package</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Distribution support</span>
                  </li>
                </ul>
                <Link href="/booking" legacyBehavior>
                  <a className="mt-8 block w-full bg-gold hover:bg-amber-600 text-black font-bold py-3 px-4 rounded text-center transition duration-300">
                    Book Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Delivery CTA */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="bg-gold text-black p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">12-Hour Delivery Time!</h2>
              <p className="text-xl mb-6">
                Get your professionally edited podcast back within just 12 hours of recording. 
                Fast turnaround without compromising on quality.
              </p>
              <Link href="/booking" legacyBehavior>
                <a className="bg-black text-gold font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition inline-block">
                  Book Your Session Today
                </a>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6 text-gold">Ready to Start Your Podcast?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your podcast needs and schedule your recording session.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/booking" legacyBehavior>
                <a className="bg-gold text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition">Book a Session</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="bg-transparent text-gold border border-gold font-bold py-3 px-8 rounded-lg hover:bg-gold hover:text-black transition">Contact Us</a>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gold">Get in Touch</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Ready to start your podcasting journey? Contact us today to schedule a consultation 
              or book your recording session.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gold">Studio Location</h4>
                      <p>Manama, Bahrain</p>
                      <p className="text-sm text-gray-400 mt-1">We also offer mobile recording services throughout Bahrain and Eastern Saudi Arabia.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gold">Phone</h4>
                      <p>+973 3333 3333</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gold">Email</h4>
                      <p>shareef@eventsbahrain.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="h-80 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <div className="text-center p-4">
                    <span className="text-gold font-bold block mb-2">Contact Us Today</span>
                    <p className="mb-4">Our service area includes all of Bahrain and Eastern Saudi Arabia within 150km.</p>
                    <div className="flex justify-center gap-4">
                      <a href="tel:+97333333333" className="bg-gold hover:bg-darkgold text-black font-bold py-2 px-4 rounded-full transition duration-300 inline-flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                        Call
                      </a>
                      <a href="mailto:shareef@eventsbahrain.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gold mb-12">Studio Location</h2>
          <p className="text-white text-center mb-8">
            Our state-of-the-art podcast studio is conveniently located in the heart of Bahrain, easily accessible from both Bahrain and Saudi Arabia. We cover locations within a 150km range.
          </p>
          <div className="text-center">
            <Link href="/booking" legacyBehavior>
              <a className="bg-gold text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition">
                Book Your Session Today
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 