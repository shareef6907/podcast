import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children, title = 'Bahrain Nights Podcast Studio' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const isBookingPage = router.pathname === '/booking' || router.pathname.startsWith('/booking/');
  
  // Video component that will be shown on all pages except booking
  const VideoBackground = () => {
    if (isBookingPage) return null;
    
    return (
      <div className="video-container">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow text-gold">
              Professional Podcast Studio, Anywhere in Bahrain
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow">
              Experience world-class podcasting with our mobile studio setup, featuring top-tier equipment and expert support. 12 Hours Delivery time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <a href="tel:+97339007750" className="bg-gold hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
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
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Professional Podcast filming in Bahrain! Expert filmmaker creates high-quality video podcasts for Creators & Businesses. Book now for studio or on-location shoots!" />
        <meta name="keywords" content="podcast bahrain, podcast recording bahrain, filming podcast bahrain, professional podcast bahrain, mobile podcast studio, bahrain podcast services" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/videos/Podcast updated 1.mp4" as="video" type="video/mp4" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-gold">Bahrain Nights</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/">
              <span className="hover:text-gold transition">Home</span>
            </Link>
            <Link href="/services">
              <span className="hover:text-gold transition">Services</span>
            </Link>
            <Link href="/about">
              <span className="hover:text-gold transition">About</span>
            </Link>
            <Link href="/blog">
              <span className="hover:text-gold transition">Blog</span>
            </Link>
            <Link href="/faq">
              <span className="hover:text-gold transition">FAQ</span>
            </Link>
            <Link href="/booking">
              <span className="hover:text-gold transition font-bold">Book Now</span>
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <span className="block px-3 py-2 hover:bg-gray-900 hover:text-gold">Home</span>
            </Link>
            <Link href="/services">
              <span className="block px-3 py-2 hover:bg-gray-900 hover:text-gold">Services</span>
            </Link>
            <Link href="/about">
              <span className="block px-3 py-2 hover:bg-gray-900 hover:text-gold">About</span>
            </Link>
            <Link href="/blog">
              <span className="block px-3 py-2 hover:bg-gray-900 hover:text-gold">Blog</span>
            </Link>
            <Link href="/faq">
              <span className="block px-3 py-2 hover:bg-gray-900 hover:text-gold">FAQ</span>
            </Link>
            <Link href="/booking">
              <span className="block px-3 py-2 bg-gold text-black font-bold">Book Now</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Video background for all pages except booking */}
      {router.pathname !== '/' && <VideoBackground />}
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gold mb-4">Bahrain Nights</h3>
              <p>Professional Podcast Studio, Anywhere in Bahrain</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold mb-4">Contact</h3>
              <p>Email: shareef@eventsbahrain.com</p>
              <p>Phone: +973 3900 7750</p>
              <p>WhatsApp: +973 3900 7750</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/podcastbahrain/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@podcastbahrain" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* BahrainNights Link */}
          <div className="mt-8 border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400">
              Discover events, venues & nightlife:{' '}
              <a 
                href="https://www.bahrainnights.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-amber-400 transition font-medium"
              >
                BahrainNights.com
              </a>
            </p>
          </div>
          
          {/* Copyright */}
          <div className="mt-6 border-t border-gray-800 pt-6 text-center">
            <p>© {new Date().getFullYear()} Bahrain Nights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
