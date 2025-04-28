import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold text-gold">Bahrain Nights</a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" legacyBehavior>
              <a className={`text-white scribe-effect ${router.pathname === '/' ? 'font-semibold' : ''}`}>
                Home
              </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className={`text-white scribe-effect ${router.pathname === '/services' ? 'font-semibold' : ''}`}>
                Services
              </a>
            </Link>
            <Link href="/blog" legacyBehavior>
              <a className={`text-white scribe-effect ${router.pathname === '/blog' ? 'font-semibold' : ''}`}>
                Blog
              </a>
            </Link>
            <Link href="/booking" legacyBehavior>
              <a className={`text-white scribe-effect ${router.pathname === '/booking' ? 'font-semibold' : ''}`}>
                Book Now
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" legacyBehavior>
                <a
                  className={`text-white scribe-effect ${router.pathname === '/' ? 'font-semibold' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a
                  className={`text-white scribe-effect ${router.pathname === '/services' ? 'font-semibold' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
              </Link>
              <Link href="/blog" legacyBehavior>
                <a
                  className={`text-white scribe-effect ${router.pathname === '/blog' ? 'font-semibold' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
              </Link>
              <Link href="/booking" legacyBehavior>
                <a
                  className={`text-white scribe-effect ${router.pathname === '/booking' ? 'font-semibold' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </a>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 