import React from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  // Configuration for dynamic product categories
  const categoryConfig = [
    {
      prefix: 'k',
      count: 7,
      category: 'Cakes',
      description: 'Delicious custom cake perfect for any occasion'
    },
    {
      prefix: 'e',
      count: 10,
      category: 'Events',
      description: 'Complete event package with decorations and catering'
    },
    {
      prefix: 'p',
      count: 10,
      category: 'Custom Packages',
      description: 'Tailored gift package with premium selections'
    },
    {
      prefix: 'b',
      count: 2,
      category: 'Bread',
      description: 'Freshly baked bread varieties'
    }
  ];

  // Function to generate product entries for a category
  type CategoryConfig = {
    prefix: string;
    count: number;
    category: string;
    description: string;
  };

  const generateProducts = ({ prefix, count, category, description }: CategoryConfig) => {
    return Array.from({ length: count }, (_, i) => {
      const productNumber = i + 1;
      return {
        id: `${prefix}-${productNumber}`,
        name: `${category} ${productNumber}`,
        category: category,
        image: `/assets/image/${prefix}${productNumber}.jpeg`,
        description: `${description} - Option ${productNumber}`
      };
    });
  };

  // Generate all dynamic products
  const dynamicProducts = categoryConfig.flatMap(config => generateProducts(config));

  // Static products
  const staticProducts = [
    {
      id: 'special-cake-1',
      name: 'Premium Wedding Cake',
      category: 'Special Cakes',
      image: '/assets/image/k2.jpeg',
      description: 'Exclusive designer wedding cake with custom decorations'
    }
  ];

  // Combine all products
  const products = [...staticProducts, ...dynamicProducts];

  // Extract unique categories from products
  const categories = ['All', ...new Set(products.map(product => product.category))];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-white to-blush-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-grandeur-brown mb-6">
            Shop Our Products
          </h1>
          <p className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto">
            Discover our premium collection. Contact us via WhatsApp for pricing and customization options.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-blush-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-poppins font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold-accent text-white shadow-lg'
                    : 'bg-cream-white text-grandeur-brown hover:bg-gold-accent/10 hover:text-gold-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  category={product.category}
                  description={product.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-grandeur-brown">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;