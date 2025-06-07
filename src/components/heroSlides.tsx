import { useState, useEffect, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg",
    title: "Luxury Cakes",
    subtitle: "Handcrafted for your special occasions"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6348086/pexels-photo-6348086.jpeg",
    title: "Exquisite Gifts",
    subtitle: "Thoughtfully curated gift collections"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
    title: "Event Design",
    subtitle: "Creating magical event experiences"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 500); // Matches the transition duration
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: SetStateAction<number>) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transition: 'opacity 1s ease-in-out',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-white/30 via-blush-pink/20 to-dusty-rose/10"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className={`transition-all duration-500 transform ${isTransitioning ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'}`}>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 animate-slide-up">
              Grandeur
            </h1>
            <p className="text-xl md:text-2xl font-playfair text-white mb-4 animate-slide-up">
              {heroSlides[currentSlide].title}
            </p>
            <p className="text-lg md:text-xl font-poppins text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
          
          <div className={`space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-slide-up transition-all duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <Link
              to="/shop"
              className="inline-flex items-center bg-gold-accent text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-grandeur-brown transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white hover:text-grandeur-brown transition-all duration-300 transform hover:scale-105"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-gold-accent w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;