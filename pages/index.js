import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

export default function Home() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cameraPackage: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        cameraPackage: 'standard'
      });
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Bahrain Nights Podcast Studio - Professional Podcasting Anywhere in Bahrain</title>
        <meta name="description" content="Professional Podcast filming in Bahrain! Expert filmmaker creates high-quality video podcasts for Creators & Businesses. Book now for studio or on-location shoots!" />
        <meta name="keywords" content="podcast bahrain, podcast recording bahrain, filming podcast bahrain, professional podcast bahrain, mobile podcast studio, bahrain podcast services" />
      </Head>

      {/* Hero Section with Background Video */}
      <section className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          fetchpriority="high"
          poster="/images/video-poster.jpg"
          className="w-full h-full object-cover"
          style={{
            willChange: 'transform',
            backgroundColor: '#000000',
          }}
        >
          <source src="/videos/Podcast updated 1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-shadow text-gold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Professional Podcast Studio, Anywhere in Bahrain
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience world-class podcasting with our mobile studio setup, featuring top-tier equipment and expert support. 12 Hours Delivery time.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="tel:+97339007750" className="bg-gold hover:bg-darkgold text-black font-bold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Call Us
              </a>
              <a href="https://wa.me/97339007750" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                WhatsApp
              </a>
              <a href="mailto:shareef@eventsbahrain.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Email Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gold">Book Your Podcast Session</h2>
            <p className="text-xl text-center text-white mb-12 max-w-3xl mx-auto">
              Reserve your professional podcast recording session with our cutting-edge equipment and expert team. Delivery within 12 hours.
            </p>
          </AnimatedSection>
          
          <div className="max-w-5xl mx-auto text-center">
            <Link href="/booking">
              <span className="inline-block bg-gold hover:bg-darkgold text-black font-bold py-4 px-10 rounded-full transition duration-300 text-xl">
                Easily Book Now
              </span>
            </Link>
            <p className="mt-4 text-gray-400">For full options including camera selection, visit our booking page</p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold">Our World-Class Podcast Solutions</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1} className="bg-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border border-gray-800">
              <div className="text-center">
                <div className="bg-gold text-black p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold">Cutting-Edge Equipment</h3>
                <p className="text-gray-300">Record with Sony cinema cameras, Blackmagic ATEM Mini ISO Extreme, and professional mics for stunning audio and video quality.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="bg-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border border-gray-800">
              <div className="text-center">
                <div className="bg-gold text-black p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold">Location Flexibility</h3>
                <p className="text-gray-300">We bring the studio to you—set up in hotels, offices, or outdoor locations across Bahrain.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="bg-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border border-gray-800">
              <div className="text-center">
                <div className="bg-gold text-black p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold">Expert Technicians</h3>
                <p className="text-gray-300">Our skilled team handles all technical details, ensuring a seamless recording experience.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="bg-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border border-gray-800">
              <div className="text-center">
                <div className="bg-gold text-black p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold">Customizable Packages</h3>
                <p className="text-gray-300">Tailor your setup with additional cameras, lighting, or post-production services.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold">What Our Clients Say</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-gold flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">"The quality of the recording was exceptional, and the team made everything so easy!"</p>
                <p className="font-bold text-gold">– International Podcaster</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-gold flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">"Recording in my hotel room with such professional gear was a game-changer."</p>
                <p className="font-bold text-gold">– Travel Blogger</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-gold flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">"The professionalism and equipment quality was beyond my expectations. Our corporate podcast truly stands out now."</p>
                <p className="font-bold text-gold">– Business Executive</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-gold flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">"Their ability to transform our beach location into a professional recording space was amazing! The audio quality despite the outdoor setting was perfect."</p>
                <p className="font-bold text-gold">– Event Organizer</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-gold flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">"From setup to final delivery, the team was incredible. The Sony cinema cameras made our interview series look like a Hollywood production."</p>
                <p className="font-bold text-gold">– Media Director</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-gold flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">"Being able to record our Arabic language podcast with technical support that understands our needs was invaluable. Highly recommended for local content creators."</p>
                <p className="font-bold text-gold">– Bahraini Content Creator</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gold text-black">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to boost your podcast?</h2>
            <p className="text-xl mb-8">Contact us today to schedule your session.</p>
            <Link href="/booking">
              <span className="bg-black text-gold font-bold py-3 px-8 rounded-full inline-block hover:bg-gray-800 transition duration-300">Book Now</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
} 