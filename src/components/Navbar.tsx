import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorPosition.x - (cursorVariant === "hover" ? 25 : cursorVariant === "click" ? 20 : 16),
          y: cursorPosition.y - (cursorVariant === "hover" ? 25 : cursorVariant === "click" ? 20 : 16),
          backgroundColor: cursorVariant === "hover" 
            ? "rgba(184, 147, 89, 0.5)" 
            : cursorVariant === "click" 
            ? "rgba(184, 147, 89, 0.8)" 
            : "rgba(184, 147, 89, 0.2)",
          width: cursorVariant === "hover" ? 50 : cursorVariant === "click" ? 40 : 32,
          height: cursorVariant === "hover" ? 50 : cursorVariant === "click" ? 40 : 32,
          mixBlendMode: cursorVariant === "hover" ? "multiply" : "normal"
        }}
        transition={{ type: "spring", mass: 0.1 }}
      />

      {/* Navbar */}
      <nav className="bg-cream-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/assets/image/granduer-logo.jpg" 
                alt="Grandeur Logo"
                className="h-10 w-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-playfair font-bold text-grandeur-brown">
                  Grandeur
                </h1>
                <p className="text-xs text-dusty-rose font-poppins -mt-1">
                  Events|Cakes| Gifts And More
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-poppins font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-gold-accent border-b-2 border-gold-accent'
                      : 'text-grandeur-brown hover:text-gold-accent'
                  }`}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/cart" 
                className="relative"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <ShoppingBag className="h-6 w-6 text-grandeur-brown" />
                <span className="absolute -top-2 -right-2 bg-gold-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link
                to="/order"
                className="bg-gold-accent text-white px-6 py-2 rounded-full font-poppins font-medium hover:bg-grandeur-brown transition-colors duration-200"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Order Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden bg-white p-2 rounded-full shadow-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-cream-white z-40 flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center space-y-8"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-2xl font-playfair transition-colors ${
                      isActive(link.path)
                        ? 'text-gold-accent'
                        : 'text-grandeur-brown hover:text-gold-accent'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>

              <motion.div 
                className="flex space-x-6 mt-12"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="https://www.instagram.com/grandeurevents89" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-grandeur-brown hover:text-gold-accent transition-colors"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.tiktok.com/@grandeurevents89" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-grandeur-brown hover:text-gold-accent transition-colors"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/grandeurev26712" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-grandeur-brown hover:text-gold-accent transition-colors"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/2348151725897" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-grandeur-brown hover:text-gold-accent transition-colors"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating WhatsApp Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://wa.me/+2348033504612"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-xl"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setCursorVariant("hover")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>
      </motion.div>
    </>
  );
};

export default Navbar;