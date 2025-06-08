import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
// Update the import path below to the correct relative path to imageConfig.ts or imageConfig.js
import { imageConfig } from "./imageConfig";

const HeroSection = () => {
  const slides = imageConfig.slides;
  const fallback = imageConfig.fallbackImage;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleImageError = (index: number) => {
    const updatedImages = [...loadedImages];
    updatedImages[index] = fallback;
    setLoadedImages(updatedImages);
    console.warn(`Image at slide ${index} failed to load. Replacing with fallback.`);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    // Initialize image URLs with fallback to original
    const initialImages = slides.map((s) => s.image);
    setLoadedImages(initialImages);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${loadedImages[index] || fallback})`
            }}
          >
            <img
              src={loadedImages[index] || fallback}
              alt={slide.title}
              onError={() => handleImageError(index)}
              className="hidden"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-white/30 via-blush-pink/20 to-dusty-rose/10"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className={`transition-all duration-500 transform ${isTransitioning ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'}`}>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 animate-slide-up">Grandeur</h1>
            <p className="text-xl md:text-2xl font-playfair text-white mb-4 animate-slide-up">{slides[currentSlide].title}</p>
            <p className="text-lg md:text-xl font-poppins text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">{slides[currentSlide].subtitle}</p>
          </div>

          <div className={`space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-slide-up transition-all duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <Link to="/shop" className="inline-flex items-center bg-gold-accent text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-grandeur-brown transition-all duration-300 transform hover:scale-105 shadow-lg">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/gallery" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white hover:text-grandeur-brown transition-all duration-300 transform hover:scale-105">
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <button onClick={goToPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full">
        <ChevronLeft size={28} />
      </button>
      <button onClick={goToNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full">
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-gold-accent w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
