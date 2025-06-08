import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Configuration for gallery categories
  const galleryConfig = [
    {
      name: "Cakes",
      prefix: "k",
      count: 7, // Number of cake images (k1.jpeg to k10.jpeg)
      description: "Our beautiful cake designs for all occasions"
    },
    {
      name: "Events",
      prefix: "e",
      count: 10, // Number of event images (e1.jpeg to e10.jpeg)
      description: "Complete event setups and decorations"
    },
    {
      name: "Custom Packages",
      prefix: "p",
      count: 9, // Number of package images (p1.jpeg to p10.jpeg)
      description: "Tailored gift packages and premium selections"
    }
  ];

  // Function to generate image paths for a category
  const generateImages = (prefix: string, count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      src: `/assets/image/${prefix}${i+1}.jpeg`,
      alt: `${prefix.toUpperCase()}${i+1}`
    }));
  };

  // Generate gallery categories with images
  const categories = galleryConfig.map(category => ({
    name: category.name,
    images: generateImages(category.prefix, category.count),
    description: category.description
  }));

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-white to-blush-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-grandeur-brown mb-6">
            Our Gallery
          </h1>
          <p className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto">
            Explore our portfolio of beautiful cakes, event setups, and custom packages.
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-playfair font-bold text-grandeur-brown mb-8 text-center">
                {category.name}
              </h2>
              <p className="text-lg text-grandeur-brown/80 text-center mb-8 max-w-2xl mx-auto">
                {category.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={`${category.name} ${imageIndex + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image.src}`);
                        (e.target as HTMLImageElement).src = '/assets/image/placeholder.jpeg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <p className="font-poppins font-medium">View Larger</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for full-size images */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold-accent transition-colors duration-200"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => {
                console.error(`Failed to load image: ${selectedImage}`);
                (e.target as HTMLImageElement).src = '/assets/image/placeholder.jpeg';
              }}
            />
          </div>
        </div>
      )}

      {/* Custom Work CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-accent to-grandeur-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Love What You See?
          </h2>
          <p className="text-xl font-poppins mb-8 max-w-2xl mx-auto">
            Let us create something beautiful and unique for your special event. Every piece is custom-made with love and attention to detail.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/order"
              className="inline-flex items-center bg-white text-grandeur-brown px-8 py-4 rounded-full font-poppins font-semibold hover:bg-cream-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Order Custom Work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white hover:text-grandeur-brown transition-all duration-300 transform hover:scale-105"
            >
              Discuss Your Vision
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;