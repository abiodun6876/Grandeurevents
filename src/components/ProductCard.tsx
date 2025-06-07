import React from 'react';
import { Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category, description }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, price, image, category, description }
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-poppins text-gold-accent bg-gold-accent/10 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-2">
          {name}
        </h3>
        
        {description && (
          <p className="font-poppins text-grandeur-brown/70 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-playfair font-bold text-gold-accent">
            ₦{price.toLocaleString()}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-gold-accent text-white p-3 rounded-full hover:bg-grandeur-brown transition-all duration-300 transform hover:scale-105 shadow-lg group"
          >
            <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;