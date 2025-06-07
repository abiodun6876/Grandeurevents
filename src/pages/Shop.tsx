import React from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const products = [
    {
      id: 'wedding-cake-1',
      name: 'Elegant Wedding Cake',
      price: 85000,
      category: 'Wedding Cakes',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg',
      description: 'Beautiful 3-tier wedding cake with custom decorations'
    },
    {
      id: 'birthday-cake-1',
      name: 'Custom Birthday Cake',
      price: 25000,
      category: 'Birthday Cakes',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg',
      description: 'Personalized birthday cake with your choice of flavor'
    },
    {
      id: 'cupcakes-1',
      name: 'Gourmet Cupcakes (12 pcs)',
      price: 15000,
      category: 'Cupcakes',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
      description: 'Assorted flavors of premium cupcakes'
    },
    {
      id: 'finger-foods-1',
      name: 'Premium Finger Foods Package',
      price: 35000,
      category: 'Catering',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      description: 'Assorted finger foods for 20-30 people'
    },
    {
      id: 'suya-pepper-1',
      name: 'Authentic Suya Pepper (Yaji)',
      price: 3500,
      category: 'Spices',
      image: 'https://images.pexels.com/photos/1340130/pexels-photo-1340130.jpeg',
      description: 'Premium quality Suya pepper blend - 250g'
    },
    {
      id: 'pepper-soup-spice-1',
      name: 'Pepper Soup Spice Mix',
      price: 2800,
      category: 'Spices',
      image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg',
      description: 'Traditional pepper soup spice blend - 200g'
    },
    {
      id: 'event-decoration-1',
      name: 'Wedding Decoration Package',
      price: 150000,
      category: 'Decorations',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg',
      description: 'Complete wedding decoration setup for 100 guests'
    },
    {
      id: 'gift-hamper-1',
      name: 'Luxury Gift Hamper',
      price: 45000,
      category: 'Gift Packages',
      image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg',
      description: 'Premium gift hamper with assorted treats'
    },
    {
      id: 'corporate-cake-1',
      name: 'Corporate Event Cake',
      price: 55000,
      category: 'Corporate',
      image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg',
      description: 'Professional cake for corporate events and celebrations'
    }
  ];

  const categories = ['All', 'Wedding Cakes', 'Birthday Cakes', 'Cupcakes', 'Catering', 'Spices', 'Decorations', 'Gift Packages', 'Corporate'];
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
            Discover our premium collection of cakes, spices, decorations, and gift packages. Add items to your cart and place your order easily.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;