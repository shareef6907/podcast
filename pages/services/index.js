import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AnimatedSection from '../../components/AnimatedSection';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Professional Podcast Services | Premium Equipment & Expert Support</title>
        <meta name="description" content="Professional Podcast filming in Bahrain! Expert filmmaker creates high-quality video podcasts for Creators & Businesses. Book now for studio or on-location shoots!" />
      </Head>
      
      <Header />
      
      {/* Header Banner */}
      <div className="relative w-full h-96 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
              Professional Podcast <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Premium equipment and expert technical support for your podcasting needs
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking" legacyBehavior>
                <a className="px-8 py-3 bg-gold text-black font-semibold rounded-md hover:bg-opacity-90 transition duration-300 shadow-gold">
                  Book Now
                </a>
              </Link>
              <Link href="/portfolio" legacyBehavior>
                <a className="px-8 py-3 border border-gold text-gold font-semibold rounded-md hover:bg-gold hover:bg-opacity-10 transition duration-300">
                  View Our Work
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow bg-black">
        {/* Services Overview */}
        <AnimatedSection className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12 scribe-effect">
              Comprehensive Podcast Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold text-gold mb-4 scribe-effect">Recording</h3>
                <p className="text-gray-300">
                  State-of-the-art recording equipment and acoustically treated spaces for crystal-clear audio and professional 4K video.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold text-gold mb-4 scribe-effect">Production</h3>
                <p className="text-gray-300">
                  Expert audio engineers and video editors to enhance your content with professional mixing, editing, and post-production.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold text-gold mb-4 scribe-effect">Distribution</h3>
                <p className="text-gray-300">
                  Assistance with publishing your podcast across multiple platforms, optimizing for discovery and audience growth.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Equipment Details */}
        <AnimatedSection className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12 scribe-effect">
              Professional-Grade Equipment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl">
                <div className="mb-6 relative h-48 w-full rounded-lg overflow-hidden">
                  <img 
                    src="/images/services/4krecording.JPG" 
                    alt="Sony Cinema Camera" 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x300?text=Camera+Equipment";
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gold mb-4 scribe-effect">Sony Cinema Cameras</h3>
                <p className="text-gray-300">
                  Capture stunning 4K video with our professional Sony cinema cameras, offering exceptional dynamic range and color science for a cinematic look.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl">
                <div className="mb-6 relative h-48 w-full rounded-lg overflow-hidden">
                  <img 
                    src="/images/services/atemmini.jpg" 
                    alt="Blackmagic ATEM Mini ISO Extreme" 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x300?text=ATEM+Mini";
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gold mb-4 scribe-effect">Blackmagic ATEM Mini ISO Extreme</h3>
                <p className="text-gray-300">
                  Professional multi-camera production with our Blackmagic ATEM Mini ISO Extreme, allowing seamless switching between cameras for dynamic content.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl">
                <div className="mb-6 relative h-48 w-full rounded-lg overflow-hidden">
                  <img 
                    src="/images/services/audioquality.jpg" 
                    alt="Professional Microphones" 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x300?text=Audio+Equipment";
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gold mb-4 scribe-effect">Professional Microphones</h3>
                <p className="text-gray-300">
                  Capture broadcast-quality audio with our selection of high-end microphones designed specifically for vocal clarity and richness in podcast productions.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Technical Support */}
        <AnimatedSection className="py-16 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12 scribe-effect">
              Expert Technical Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gold mb-4 scribe-effect">Experienced Technicians</h3>
                <p className="text-gray-300 mb-6">
                  Our team of audio and video professionals will handle all technical aspects of your podcast production, allowing you to focus on your content.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Equipment setup and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Audio level monitoring and adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Camera operation and framing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Lighting and set design consultation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gold mb-4 scribe-effect">Post-Production Excellence</h3>
                <p className="text-gray-300 mb-6">
                  We don't just record your podcast; we enhance it through professional post-production services to ensure a polished final product.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Audio cleanup and enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Color grading and visual effects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Intro/outro music and sound design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Custom graphics and lower thirds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Pricing and Packages */}
        <AnimatedSection className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12 scribe-effect">
              Customizable Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-transparent hover:border-gold transition duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gold mb-2 scribe-effect">Basic Package</h3>
                  <p className="text-2xl font-bold text-white">$299<span className="text-sm text-gray-400">/session</span></p>
                </div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>2-hour recording session</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Single camera setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Professional audio recording</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Basic post-production</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/booking" legacyBehavior>
                    <a className="inline-block px-6 py-2 bg-gold text-black font-semibold rounded-md hover:bg-opacity-90 transition duration-300 shadow-gold">
                      Book Now
                    </a>
                  </Link>
                </div>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gold relative transform md:scale-105 z-10">
                <div className="absolute top-0 right-0 bg-gold text-black px-4 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gold mb-2 scribe-effect">Professional Package</h3>
                  <p className="text-2xl font-bold text-white">$499<span className="text-sm text-gray-400">/session</span></p>
                </div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>3-hour recording session</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Multi-camera setup (2 cameras)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Professional audio recording</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Advanced post-production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Social media clips (3)</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/booking" legacyBehavior>
                    <a className="inline-block px-6 py-2 bg-gold text-black font-semibold rounded-md hover:bg-opacity-90 transition duration-300 shadow-gold">
                      Book Now
                    </a>
                  </Link>
                </div>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-transparent hover:border-gold transition duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gold mb-2 scribe-effect">Premium Package</h3>
                  <p className="text-2xl font-bold text-white">$899<span className="text-sm text-gray-400">/session</span></p>
                </div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>4-hour recording session</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Multi-camera setup (3+ cameras)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Professional audio recording</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Premium post-production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Social media clips (10)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Audiogram creation</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/booking" legacyBehavior>
                    <a className="inline-block px-6 py-2 bg-gold text-black font-semibold rounded-md hover:bg-opacity-90 transition duration-300 shadow-gold">
                      Book Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">Need a custom solution for your specific requirements?</p>
              <Link href="/contact" legacyBehavior>
                <a className="px-8 py-3 border border-gold text-gold font-semibold rounded-md hover:bg-gold hover:bg-opacity-10 transition duration-300">
                  Contact Us for Custom Packages
                </a>
              </Link>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Call to Action */}
        <AnimatedSection className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 scribe-effect">
              Ready to Create Your Professional Podcast?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Book your session today and experience the difference that professional equipment and expert support can make for your podcast.
            </p>
            <Link href="/booking" legacyBehavior>
              <a className="px-8 py-4 bg-gold text-black font-semibold rounded-md hover:bg-opacity-90 transition duration-300 shadow-gold text-lg">
                Schedule Your Session
              </a>
            </Link>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
} 