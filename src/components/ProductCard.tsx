import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, category, description }) => {
  const { state, dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    // Debugging logs
    console.log('Attempting to add to cart:', { id, name });
    console.log('Current cart state before add:', state);

    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: { 
          id, 
          name, 
          image, 
          category, 
          description 
        }
      });

      // Visual feedback
      setIsAnimating(true);
      setIsAdded(true);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);

      setTimeout(() => {
        setIsAdded(false);
      }, 2000);

      console.log('Item should be added to cart. New state:', state);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  // Check if this item is already in cart
  const existingItem = state.items.find(item => item.id === id);
  const buttonText = isAdded ? 'Added!' : (existingItem ? `Add More (${existingItem.quantity})` : 'Add to Cart');

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group relative">
      {/* Visual indicator when item is added */}
      {isAnimating && (
        <div className="absolute inset-0 bg-green-500/10 z-10 flex items-center justify-center">
          <div className="animate-ping absolute h-16 w-16 rounded-full bg-green-500/30"></div>
          <Check className="h-8 w-8 text-white bg-green-500 rounded-full p-1 z-20" />
        </div>
      )}

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
        
        <button
          onClick={handleAddToCart}
          disabled={isAnimating}
          className={`w-full flex items-center justify-center gap-2 p-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
            isAdded 
              ? 'bg-green-500 text-white hover:bg-green-600' 
              : 'bg-gold-accent text-white hover:bg-grandeur-brown'
          } ${isAnimating ? 'animate-pulse' : ''}`}
        >
          {isAdded ? (
            <Check className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
          )}
          <span className="font-poppins font-medium text-sm">
            {buttonText}
          </span>
        </button>

        {/* Debug info (remove in production) */}
        <div className="mt-2 text-xs text-gray-400 hidden">
          Item ID: {id} | In cart: {existingItem ? `Yes (${existingItem.quantity})` : 'No'}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;