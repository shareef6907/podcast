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
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
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
        <link rel="preload" href="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" as="video" type="video/mp4" />
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
                <a href="#" className="hover:text-gold">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gold">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center">
            <p>© {new Date().getFullYear()} Bahrain Nights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 