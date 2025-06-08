import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Gift, Cake, Utensils, Sparkles, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSection from '../components/heroSlides';

const Home = () => {
  // Image configuration
  const imageConfig = {
    cakes: {
      prefix: 'k',
      count: 10,
      defaultIndices: [1, 2, 3] // For slideshow
    },
    gifts: {
      prefix: 'p',
      count: 10,
      defaultIndices: [1, 2, 3] // For slideshow
    },
    events: {
      prefix: 'e',
      count: 10,
      defaultIndices: [1, 2, 3] // For slideshow
    },
    featured: {
      weddingCake: 'k1',
      spices: 'p2',
      eventPackage: 'e3'
    }
  };

  const services = [
    {
      icon: <Cake className="h-8 w-8" />,
      title: "Custom Cakes",
      description: "Beautifully crafted cakes for every celebration",
      image: `/assets/image/${imageConfig.cakes.prefix}1.jpeg`
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Finger Foods",
      description: "Delicious appetizers and snacks for your events",
      image: `/assets/image/${imageConfig.events.prefix}2.jpeg`
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Event Decorations",
      description: "Stunning decorations to make your event memorable",
      image: `/assets/image/${imageConfig.events.prefix}3.jpeg`
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Custom Packages",
      description: "Branded event packages and luxury hampers",
      image: `/assets/image/${imageConfig.gifts.prefix}1.jpeg`
    }
  ];

  const testimonials = [
    {
      name: "Sarah",
      text: "Grandeur made our wedding absolutely perfect! The cake was not only beautiful but delicious.",
      rating: 5
    },
    {
      name: "Michael Adebayo",
      text: "Amazing service for our corporate event. Everything was handled professionally.",
      rating: 5
    },
    {
      name: "Fatima",
      text: "The spices are authentic and high quality. Will definitely order again!",
      rating: 5
    }
  ];

  // Generate slideshow data from local images
  const cakeSlides = imageConfig.cakes.defaultIndices.map((index, i) => ({
    id: i + 1,
    image: `/assets/image/${imageConfig.cakes.prefix}${index}.jpeg`,
    title: ["Wedding Cakes", "Birthday Cakes", "Specialty Cakes"][i],
    description: [
      "Elegant designs for your special day",
      "Custom creations for all ages",
      "Unique flavors and designs"
    ][i]
  }));

  const giftSlides = imageConfig.gifts.defaultIndices.map((index, i) => ({
    id: i + 1,
    image: `/assets/image/${imageConfig.gifts.prefix}${index}.jpeg`,
    title: ["Luxury Hampers", "Corporate Gifts", "Personalized Gifts"][i],
    description: [
      "Exquisite gift packages for any occasion",
      "Premium branded gifts for your clients",
      "Thoughtful presents with a personal touch"
    ][i]
  }));

  const eventSlides = imageConfig.events.defaultIndices.map((index, i) => ({
    id: i + 1,
    image: `/assets/image/${imageConfig.events.prefix}${index}.jpeg`,
    title: ["Wedding Decor", "Corporate Events", "Birthday Parties"][i],
    description: [
      "Breathtaking settings for your ceremony",
      "Professional setups for business gatherings",
      "Fun and festive decorations"
    ][i]
  }));

  // Custom Slide Show Component
  type Slide = {
    id: number;
    image: string;
    title: string;
    description: string;
  };

  interface SlideShowProps {
    slides: Slide[];
    interval?: number;
  }

  const SlideShow: React.FC<SlideShowProps> = ({ slides, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: React.SetStateAction<number>) => {
      setCurrentIndex(slideIndex);
    };

    useEffect(() => {
      if (isPaused) return;
      
      const timer = setTimeout(() => {
        goToNext();
      }, interval);

      return () => clearTimeout(timer);
    }, [currentIndex, isPaused]);

    return (
      <div 
        className="relative h-96 w-full overflow-hidden rounded-2xl shadow-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 bg-black/30 z-10 flex flex-col justify-end p-8">
          <h3 className="text-3xl font-playfair font-bold text-white mb-2">
            {slides[currentIndex].title}
          </h3>
          <p className="text-lg font-poppins text-white/90 mb-4">
            {slides[currentIndex].description}
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center text-white font-poppins font-medium hover:text-gold-accent transition-colors"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
          onError={(e) => {
            console.error(`Failed to load image: ${slides[currentIndex].image}`);
            (e.target as HTMLImageElement).src = '/assets/image/placeholder.jpeg';
          }}
        />
        
        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-gold-accent transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-gold-accent transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_slide, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-3 w-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-gold-accent' : 'bg-white/50'}`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <HeroSection/>

      {/* Services Section */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-grandeur-brown mb-4">
              Our Services
            </h2>
            <p className="text-lg font-poppins text-grandeur-brown/70 max-w-2xl mx-auto">
              From custom cakes to complete event management, we bring elegance and taste to every celebration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-accent/10 text-gold-accent rounded-full mb-6 group-hover:bg-gold-accent group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-4">
                  {service.title}
                </h3>
                <p className="font-poppins text-grandeur-brown/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-r from-blush-pink/20 to-dusty-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-grandeur-brown mb-4">
              Featured Products
            </h2>
            <p className="text-lg font-poppins text-grandeur-brown/70">
              Discover our most popular offerings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={`/assets/image/${imageConfig.featured.weddingCake}.jpeg`}
                alt="Custom Wedding Cake"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  console.error(`Failed to load wedding cake image`);
                  (e.target as HTMLImageElement).src = '/assets/image/placeholder.jpeg';
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-2">
                  Wedding Cakes
                </h3>
                <p className="font-poppins text-grandeur-brown/70 mb-4">
                  Custom designed wedding cakes that make your special day unforgettable
                </p>
                <Link
                  to="/shop"
                  className="inline-flex items-center text-gold-accent font-poppins font-medium hover:text-grandeur-brown transition-colors"
                >
                  Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={`/assets/image/${imageConfig.featured.spices}.jpeg`}
                alt="Suya Pepper Spices"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  console.error(`Failed to load spices image`);
                  (e.target as HTMLImageElement).src = '/assets/image/placeholder.jpeg';
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-2">
                  Premium Spices
                </h3>
                <p className="font-poppins text-grandeur-brown/70 mb-4">
                  Authentic Suya pepper, mixed spices, and seasonings for exceptional flavor
                </p>
                <Link
                  to="/shop"
                  className="inline-flex items-center text-gold-accent font-poppins font-medium hover:text-grandeur-brown transition-colors"
                >
                  Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={`/assets/image/${imageConfig.featured.eventPackage}.jpeg`}
                alt="Event Decorations"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  console.error(`Failed to load event package image`);
                  (e.target as HTMLImageElement).src = '/assets/image/placeholder.jpeg';
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-2">
                  Event Packages
                </h3>
                <p className="font-poppins text-grandeur-brown/70 mb-4">
                  Complete event solutions with decorations, catering, and custom packages
                </p>
                <Link
                  to="/shop"
                  className="inline-flex items-center text-gold-accent font-poppins font-medium hover:text-grandeur-brown transition-colors"
                >
                  Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide Shows Section */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-grandeur-brown mb-4">
              Our Collections
            </h2>
            <p className="text-lg font-poppins text-grandeur-brown/70">
              Explore our beautiful creations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-grandeur-brown mb-4 text-center">
                Cake Gallery
              </h3>
              <SlideShow slides={cakeSlides} interval={4000} />
            </div>
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-grandeur-brown mb-4 text-center">
                Gift Collections
              </h3>
              <SlideShow slides={giftSlides} interval={4500} />
            </div>
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-grandeur-brown mb-4 text-center">
                Event Designs
              </h3>
              <SlideShow slides={eventSlides} interval={5000} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blush-pink/20 to-dusty-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-grandeur-brown mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg font-poppins text-grandeur-brown/70">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-accent fill-current" />
                  ))}
                </div>
                <p className="font-poppins text-grandeur-brown/80 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-gold-accent" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-grandeur-brown">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-accent to-grandeur-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-xl font-poppins mb-8 max-w-2xl mx-auto">
            Let us help you make your next event unforgettable with our luxury cakes, gifts, and exceptional service.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center bg-white text-grandeur-brown px-8 py-4 rounded-full font-poppins font-semibold hover:bg-cream-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white hover:text-grandeur-brown transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;