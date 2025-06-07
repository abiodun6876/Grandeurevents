import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cake } from 'lucide-react';
import CartIcon from './CartIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  return (
    <nav className="bg-cream-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Cake className="h-8 w-8 text-gold-accent" />
            <div>
              <h1 className="text-xl font-playfair font-bold text-grandeur-brown">
                Grandeur
              </h1>
              <p className="text-xs text-dusty-rose font-poppins -mt-1">
                Cakes & Gifts
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
              >
                {link.name}
              </Link>
            ))}
            <CartIcon />
            <Link
              to="/order"
              className="bg-gold-accent text-white px-6 py-2 rounded-full font-poppins font-medium hover:bg-grandeur-brown transition-colors duration-200 transform hover:scale-105"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <CartIcon />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-grandeur-brown hover:text-gold-accent transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-cream-white border-t border-blush-pink">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md font-poppins font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-gold-accent bg-blush-pink/20'
                      : 'text-grandeur-brown hover:text-gold-accent hover:bg-blush-pink/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/order"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gold-accent text-white px-6 py-2 rounded-full font-poppins font-medium hover:bg-grandeur-brown transition-colors duration-200 mt-4"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;