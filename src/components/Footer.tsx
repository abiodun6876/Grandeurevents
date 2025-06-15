import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-grandeur-brown text-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-gold-accent">
              Grandeur
            </h3>
            <p className="text-sm font-poppins text-cream-white/80">
              Creating memorable moments with luxury cakes, gifts, and event services.
            </p>
           <div className="flex space-x-4">
  <a
    href="https://www.instagram.com/grandeurevents89"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold-accent hover:text-blush-pink transition-colors"
  >
    <Instagram className="h-5 w-5" />
  </a>
  <a
    href="https://www.tiktok.com/@grandeurevents89"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold-accent hover:text-blush-pink transition-colors"
  >
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.3 2h3.2a5.3 5.3 0 0 0 5.3 5.3v3.1a8.5 8.5 0 0 1-5.3-1.8v7.2a5.6 5.6 0 1 1-5.6-5.6c.5 0 1 .1 1.5.3v3.1a2.4 2.4 0 1 0 2.4 2.4V2z" />
    </svg>
  </a>
  <a
    href="https://x.com/grandeurev26712"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold-accent hover:text-blush-pink transition-colors"
  >
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.1 3H16l-3.3 4.2L9 3H4l6.6 9L4 21h4.1l3.5-4.5L15 21h5l-6.8-9L20.1 3z" />
    </svg>
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-gold-accent">
              Quick Links
            </h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li><a href="/about" className="hover:text-gold-accent transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-gold-accent transition-colors">Services</a></li>
              <li><a href="/gallery" className="hover:text-gold-accent transition-colors">Gallery</a></li>
              <li><a href="/faq" className="hover:text-gold-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-gold-accent">
              Our Services
            </h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li>Custom Cakes & Finger Foods</li>
              <li>Event Decorations</li>
              <li>Drinks Management</li>
              <li>Spices & Seasonings</li>
              <li>Event Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-gold-accent">
              Contact Us
            </h4>
            <div className="space-y-3 font-poppins text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-accent" />
                <span>0815 172 5897</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold-accent" />
                <span>orebaker@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gold-accent mt-0.5" />
                <span>No 9, CAC Avenue, Irepo Estate, Bakare bus stop, Igando Road, Ikotun, Lagos.</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gold-accent mt-0.5" />
                <span>K.M 46 Lagos-Ibadan Expressway
Jerusalem Redemption Camp
Mowe, Ogun State
Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-white/20 mt-8 pt-8 text-center">
          <p className="font-poppins text-sm text-cream-white/80">
            © 2025 Grandeur Cakes and Gifts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;