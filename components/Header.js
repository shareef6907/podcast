import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-gold">Bahrain Nights</a>
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
          <Link href="/" legacyBehavior>
            <a className="hover:text-gold transition">Home</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="hover:text-gold transition">Services</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-gold transition">About</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="hover:text-gold transition">Blog</a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a className="hover:text-gold transition">FAQ</a>
          </Link>
          <Link href="/booking" legacyBehavior>
            <a className="hover:text-gold transition font-bold">Book Now</a>
          </Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" legacyBehavior>
            <a className="block px-3 py-2 hover:bg-gray-900 hover:text-gold">Home</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="block px-3 py-2 hover:bg-gray-900 hover:text-gold">Services</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="block px-3 py-2 hover:bg-gray-900 hover:text-gold">About</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="block px-3 py-2 hover:bg-gray-900 hover:text-gold">Blog</a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a className="block px-3 py-2 hover:bg-gray-900 hover:text-gold">FAQ</a>
          </Link>
          <Link href="/booking" legacyBehavior>
            <a className="block px-3 py-2 bg-gold text-black font-bold">Book Now</a>
          </Link>
        </div>
      </div>
    </header>
  );
} 