import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
            <img 
              src="/assets/image/granduer-logo.jpg" 
              alt="Grandeur Logo"
              className="h-10 w-10 object-contain" // Adjust size as needed
            />
            <div>
              <h1 className="text-xl font-playfair font-bold text-grandeur-brown">
                Grandeur
              </h1>
              <p className="text-xs text-dusty-rose font-poppins -mt-1">
               Events|Cakes| Gifts And
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

         
        </div>

        
        
      </div>
    </nav>
  );
};

export default Navbar;