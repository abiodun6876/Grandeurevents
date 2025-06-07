import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartIcon: React.FC = () => {
  const { state } = useCart();

  return (
    <Link
      to="/cart"
      className="relative p-2 text-grandeur-brown hover:text-gold-accent transition-colors duration-200"
    >
      <ShoppingCart className="h-6 w-6" />
      {state.itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-gold-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-poppins font-medium">
          {state.itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;