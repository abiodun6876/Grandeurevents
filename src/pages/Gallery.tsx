import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Configuration for gallery categories
  const galleryConfig = [
    {
      name: "Cakes",
      prefix: "k",
      count: 7,
      description: "Exquisite cake designs crafted for weddings, birthdays, and special occasions",
      featuredText: "Each cake is a masterpiece, designed with precision and edible luxury"
    },
    {
      name: "Events",
      prefix: "e",
      count: 10,
      description: "Complete event setups with stunning decorations and thematic designs",
      featuredText: "Transform any space into an unforgettable experience"
    },
    {
      name: "Custom Packages",
      prefix: "p",
      count: 9,
      description: "Tailored gift packages and premium corporate selections",
      featuredText: "Luxury packaging with personalized touches for every recipient"
    }
  ];

  // Generate image paths for a category with loading states
  const generateImages = (prefix: string, count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      src: `/assets/image/${prefix}${i+1}.jpeg`,
      alt: `${prefix.toUpperCase()}${i+1}`,
      loaded: false
    }));
  };

  // Generate gallery categories with images
  const [categories, setCategories] = useState(
    galleryConfig.map(category => ({
      ...category,
      images: generateImages(category.prefix, category.count)
    }))
  );

  // Handle image selection
  const handleImageClick = (imageSrc: string, categoryName: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentCategory(categoryName);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Handle modal navigation
  const navigateImages = (direction: 'prev' | 'next') => {
    if (!currentCategory) return;
    
    const category = categories.find(cat => cat.name === currentCategory);
    if (!category) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + category.images.length) % category.images.length;
    } else {
      newIndex = (currentIndex + 1) % category.images.length;
    }

    setCurrentIndex(newIndex);
    setSelectedImage(category.images[newIndex].src);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        navigateImages('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImages('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, currentCategory]);

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentCategory(null);
    document.body.style.overflow = 'auto';
  };

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = categories.flatMap(category => 
        category.images.map(image => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = image.src;
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
          });
        })
      );

      await Promise.all(imagePromises);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-cream-white to-blush-pink/30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/image/texture.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-grandeur-brown mb-6"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto"
          >
            A visual journey through our most exquisite creations and events
          </motion.p>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className="mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-grandeur-brown mb-4">
                  {category.name}
                </h2>
                <p className="text-lg text-grandeur-brown/80 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="bg-gray-100 rounded-2xl h-64 animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      onClick={() => handleImageClick(image.src, category.name, imageIndex)}
                      whileHover={{ scale: 1.03 }}
                      layout
                    >
                      <img
                        src={image.src}
                        alt={`${category.name} ${imageIndex + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          console.error(`Failed to load image: ${image.src}`);
                          (e.target as HTMLImageElement).src = '/assets/image/placeholder.jpeg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="font-poppins font-medium">View Details</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && currentCategory && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative max-w-6xl w-full max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gold-accent transition-colors duration-200 z-10"
                aria-label="Close modal"
              >
                <X className="h-8 w-8" />
              </button>

              <div className="relative h-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages('prev');
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-gold-accent transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt="Gallery image"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    console.error(`Failed to load image: ${selectedImage}`);
                    (e.target as HTMLImageElement).src = '/assets/image/placeholder.jpeg';
                  }}
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages('next');
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-gold-accent transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-playfair font-semibold">
                  {currentCategory} - Image {currentIndex + 1}
                </h3>
                <p className="font-poppins mt-2">
                  {galleryConfig.find(cat => cat.name === currentCategory)?.featuredText}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-gold-accent to-grandeur-brown text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/image/texture.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-6"
          >
            Inspired By Our Work?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl font-poppins mb-8 max-w-2xl mx-auto"
          >
            Let's collaborate to create something extraordinary for your special occasion
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-white text-grandeur-brown px-8 py-4 rounded-full font-poppins font-medium hover:bg-cream-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ShoppingBag className="mr-3 h-5 w-5" />
              Browse Collections
            </Link>
            <a
              href="https://wa.me/+2348033504612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-medium hover:bg-white hover:text-grandeur-brown transition-all duration-300"
            >
              <FaWhatsapp className="mr-3 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;