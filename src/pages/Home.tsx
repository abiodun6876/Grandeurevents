import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Gift, Cake, Utensils, Sparkles, ShoppingBag, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaPinterest, FaFacebookF } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/heroSlides';
import ParallaxSection from '../components/ParallaxSection';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  // Enhanced image configuration
  const imageConfig = {
    cakes: {
      prefix: 'k',
      count: 10,
      defaultIndices: [1, 2, 3, 4, 5],
      titles: ["Royal Wedding Cakes", "Designer Birthday Cakes", "Artisan Specialty Cakes", "Custom Celebration Cakes", "Luxury Tiered Cakes"],
      descriptions: [
        "Handcrafted with edible gold leaf and premium ingredients",
        "Personalized designs that tell your unique story",
        "Innovative flavors from our master pastry chefs",
        "Tailored to your event's theme and color palette",
        "Multi-tiered masterpieces with intricate detailing"
      ]
    },
    gifts: {
      prefix: 'p',
      count: 10,
      defaultIndices: [1, 2, 3, 4, 5],
      titles: ["Executive Luxury Hampers", "Premium Corporate Gifts", "Personalized Keepsakes", "Seasonal Collections", "Artisanal Food Hampers"],
      descriptions: [
        "Curated collections for discerning clients",
        "Branded with your corporate identity",
        "Hand-engraved with personal messages",
        "Limited edition holiday selections",
        "Gourmet selections from around the world"
      ]
    },
    events: {
      prefix: 'e',
      count: 10,
      defaultIndices: [1, 2, 3, 4, 5],
      titles: ["Bespoke Wedding Decor", "Executive Corporate Events", "Signature Birthday Experiences", "Charity Galas", "Product Launches"],
      descriptions: [
        "Full-service design and execution",
        "Turnkey solutions for business gatherings",
        "Themed environments with wow-factor",
        "Red carpet treatment for VIP guests",
        "Immersive brand experiences"
      ]
    },
    featured: {
      weddingCake: 'k1',
      spices: 'p2',
      eventPackage: 'e3'
    }
  };

  // Premium services with enhanced descriptions
  const services = [
    {
      icon: <Cake className="h-8 w-8" />,
      title: "Luxury Cake Design",
      description: "Michelin-star inspired cakes with gold leaf accents and custom flavors",
      image: `/assets/image/${imageConfig.cakes.prefix}1.jpeg`,
      hoverImage: `/assets/image/${imageConfig.cakes.prefix}2.jpeg`
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Gourmet Catering",
      description: "Executive chef-prepared canapés and tasting menus for discerning palates",
      image: `/assets/image/${imageConfig.events.prefix}2.jpeg`,
      hoverImage: `/assets/image/${imageConfig.events.prefix}3.jpeg`
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Event Design",
      description: "Full-service event styling with luxury floral installations and lighting",
      image: `/assets/image/${imageConfig.events.prefix}3.jpeg`,
      hoverImage: `/assets/image/${imageConfig.events.prefix}4.jpeg`
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Concierge Gifting",
      description: "White-glove corporate gifting service with personal delivery",
      image: `/assets/image/${imageConfig.gifts.prefix}1.jpeg`,
      hoverImage: `/assets/image/${imageConfig.gifts.prefix}2.jpeg`
    }
  ];

  // Expanded testimonials with client titles
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Bride, Mayfair Wedding",
      text: "Grandeur's five-tier wedding cake was the centerpiece of our reception. The gold leaf detailing matched my dress perfectly, and the raspberry rose flavor had guests raving for weeks.",
      rating: 5,
      image: "/assets/image/client1.jpg"
    },
    {
      name: "Michael Adebayo",
      title: "CEO, Fortune 500 Company",
      text: "For our annual executive retreat, Grandeur delivered impeccable service. The branded gift hampers with personalized monograms impressed our international partners.",
      rating: 5,
      image: "/assets/image/client2.jpg"
    },
    {
      name: "Moses Akinpelu",
      title: "Lifestyle Influencer",
      text: "The limited edition spice collection I featured sold out within hours. My followers loved the premium packaging and authentic flavors - we're already planning a collaboration.",
      rating: 5,
      image: "/assets/image/client3.jpg"
    }
  ];

  // Generate slideshow data with enhanced content
  const generateSlides = (type: 'cakes' | 'gifts' | 'events') => {
    return imageConfig[type].defaultIndices.map((index, i) => ({
      id: i + 1,
      image: `/assets/image/${imageConfig[type].prefix}${index}.jpeg`,
      title: imageConfig[type].titles[i],
      description: imageConfig[type].descriptions[i],
      cta: "Explore Collection"
    }));
  };

  const cakeSlides = generateSlides('cakes');
  const giftSlides = generateSlides('gifts');
  const eventSlides = generateSlides('events');

  // WhatsApp contact info
  const phoneNumber = "+2348033504612";
  const message = "Hello Grandeur, I'd like to discuss a luxury order!";

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Parallax scroll effect setup

  // Custom cursor effect
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: "rgba(184, 147, 89, 0.2)",
      width: 32,
      height: 32,
      transition: { type: "spring", mass: 0.1 }
    },
    hover: {
      x: cursorPosition.x - 25,
      y: cursorPosition.y - 25,
      backgroundColor: "rgba(184, 147, 89, 0.5)",
      width: 50,
      height: 50,
      mixBlendMode: "multiply"
    },
    click: {
      x: cursorPosition.x - 20,
      y: cursorPosition.y - 20,
      backgroundColor: "rgba(184, 147, 89, 0.8)",
      width: 40,
      height: 40
    }
  };

  // Featured products with enhanced details
  const featuredProducts = [
    {
      id: 1,
      image: `/assets/image/${imageConfig.featured.weddingCake}.jpeg`,
      title: "Imperial Wedding Cake",
      description: "Five-tier masterpiece with edible gold leaf and custom monogram",
      price: "From ₦850,000",
      category: "Luxury Cakes"
    },
    {
      id: 2,
      image: `/assets/image/${imageConfig.featured.spices}.jpeg`,
      title: "Signature Spice Collection",
      description: "Hand-blended premium spices in handcrafted ceramic jars",
      price: "From ₦45,000",
      category: "Gourmet Foods"
    },
    {
      id: 3,
      image: `/assets/image/${imageConfig.featured.eventPackage}.jpeg`,
      title: "Platinum Event Package",
      description: "Full-service event design with luxury floral installations",
      price: "From ₦5,000,000",
      category: "Event Services"
    }
  ];

  return (
    <div className="relative overflow-hidden">
   

   {/* Custom Cursor - Simplified Version */}
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
      {/* Floating WhatsApp Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
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

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-6 right-6 z-50 bg-white p-3 rounded-full shadow-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

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
        {[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Services', path: '/services' },
          { name: 'Shop', path: '/shop' },
          { name: 'Gallery', path: '/gallery' },
          { name: 'FAQ', path: '/faq' },
          { name: 'Contact', path: '/contact' },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-2xl font-playfair text-grandeur-brown hover:text-gold-accent transition-colors"
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
          {/* TikTok icon - you'll need to import or add this */}
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
          {/* Twitter/X icon */}
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

      {/* Hero Section */}
      <HeroSection />

      {/* Luxury Services Section */}
      <section className="py-24 bg-cream-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-gold-accent/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-dusty-rose/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-grandeur-brown mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">Signature Services</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gold-accent/30 -rotate-1 z-0"></span>
              </span>
            </h2>
            <p className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto leading-relaxed">
              Our white-glove services combine impeccable craftsmanship with personalized attention to detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-2xl z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-accent/90 text-white rounded-full mb-4 group-hover:bg-white group-hover:text-gold-accent transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-white mb-2 group-hover:text-gold-accent transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-white/90 group-hover:text-white transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
                <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0"
                  />
                  <img
                    src={service.hoverImage}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Divider */}
      <ParallaxSection 
        imageUrl={`/assets/image/${imageConfig.featured.eventPackage}.jpeg`}
        overlayColor="rgba(67, 40, 23, 0.6)"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Creating Unforgettable Experiences
          </motion.h2>
          <motion.p 
            className="text-xl font-poppins text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From intimate gatherings to grand celebrations, we bring your vision to life with precision and elegance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-poppins font-medium hover:bg-white hover:text-grandeur-brown transition-all duration-500"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Featured Collections Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-grandeur-brown mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">Curated Collections</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gold-accent/30 -rotate-1 z-0"></span>
              </span>
            </h2>
            <p className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto leading-relaxed">
              Discover our most sought-after offerings, each crafted with exceptional attention to detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <ProductCard 
                  image={product.image}
                  name={product.title}
                  description={product.description}
                  category={product.category} id={''}                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center bg-grandeur-brown text-white px-8 py-4 rounded-full font-poppins font-medium hover:bg-gold-accent transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              <ShoppingBag className="mr-3 h-5 w-5" />
              View Full Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-cream-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-grandeur-brown mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">Our Gallery</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gold-accent/30 -rotate-1 z-0"></span>
              </span>
            </h2>
            <p className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto leading-relaxed">
              A visual journey through our most exquisite creations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...cakeSlides, ...giftSlides, ...eventSlides].slice(0, 6).map((slide, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-white mb-1">
                      {slide.title}
                    </h3>
                    <p className="font-poppins text-white/90 text-sm">
                      {slide.description}
                    </p>
                  </div>
                </div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-grandeur-brown/95 to-grandeur-brown">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">Client Testimonials</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gold-accent/50 -rotate-1 z-0"></span>
              </span>
            </h2>
            <p className="text-xl font-poppins text-white/80 max-w-3xl mx-auto leading-relaxed">
              Hear from those who've experienced the Grandeur difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <TestimonialCard 
                  name={testimonial.name}
                  title={testimonial.title}
                  text={testimonial.text}
                  rating={testimonial.rating}
                  imageUrl={testimonial.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-accent/10 to-grandeur-brown/10 backdrop-blur-sm"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/image/texture.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-gold-accent/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-dusty-rose/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-grandeur-brown mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Begin Your Grandeur Experience
          </motion.h2>
          
          <motion.p 
            className="text-xl font-poppins text-grandeur-brown/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's collaborate to create something extraordinary for your next event or celebration
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-grandeur-brown text-white px-8 py-4 rounded-full font-poppins font-medium hover:bg-gold-accent transition-all duration-500 shadow-lg hover:shadow-xl"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Schedule Consultation
            </Link>
            
            <Link
              to="/shop"
              className="inline-flex items-center justify-center border-2 border-grandeur-brown text-grandeur-brown px-8 py-4 rounded-full font-poppins font-medium hover:bg-grandeur-brown hover:text-white transition-all duration-500"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Browse Collections
            </Link>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;