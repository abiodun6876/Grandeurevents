import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const deliveryFee = 3000;
  const grandTotal = state.total + deliveryFee;

  const generateWhatsAppMessage = () => {
    const orderDetails = state.items.map(item => 
      `• ${item.name} (₦${item.price.toLocaleString()}) x ${item.quantity} = ₦${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    const message = `Hello Grandeur Events, Cakes and Gifts! 🎂

I would like to place these orders:

${orderDetails}

Subtotal: ₦${state.total.toLocaleString()}
Delivery Fee: ₦${deliveryFee.toLocaleString()}
*Total Amount: ₦${grandTotal.toLocaleString()}*

Please confirm availability and provide payment details. Thank you!`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/+2348033504612?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (state.items.length === 0) {
    return (
      <div className="animate-fade-in min-h-screen bg-cream-white">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-md mx-auto">
              <ShoppingBag className="h-24 w-24 text-gold-accent/50 mx-auto mb-6" />
              <h1 className="text-3xl font-playfair font-bold text-grandeur-brown mb-4">
                Your Cart is Empty
              </h1>
              <p className="font-poppins text-grandeur-brown/70 mb-8">
                Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center bg-gold-accent text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-grandeur-brown transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="animate-fade-in min-h-screen bg-cream-white">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-cream-white to-blush-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-grandeur-brown text-center mb-4">
            Shopping Cart
          </h1>
          <p className="text-lg font-poppins text-grandeur-brown/70 text-center">
            Review your items and proceed to order
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-playfair font-bold text-grandeur-brown mb-6">
                  Cart Items ({state.itemCount})
                </h2>
                
                <div className="space-y-6">
                  {state.items.map((item) => (
                    <div
  key={item.id}
  className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 p-4 border border-blush-pink/20 rounded-xl"
>
  <img
    src={item.image}
    alt={item.name}
    className="w-20 h-20 object-cover rounded-lg self-center"
  />

  <div className="flex-1 text-center md:text-left">
    <h3 className="font-playfair font-semibold text-grandeur-brown text-lg">
      {item.name}
    </h3>
    <p className="font-poppins text-gold-accent text-sm">{item.category}</p>
    <p className="font-playfair font-bold text-gold-accent text-xl">
      ₦{item.price.toLocaleString()}
    </p>
  </div>

  <div className="flex justify-center md:justify-start items-center space-x-2">
    <button
      onClick={() => updateQuantity(item.id, item.quantity - 1)}
      className="w-8 h-8 bg-gold-accent/20 text-gold-accent rounded-full flex items-center justify-center hover:bg-gold-accent hover:text-white transition-all duration-200"
    >
      <Minus className="h-4 w-4" />
    </button>

    <span className="font-poppins font-semibold text-grandeur-brown w-8 text-center">
      {item.quantity}
    </span>

    <button
      onClick={() => updateQuantity(item.id, item.quantity + 1)}
      className="w-8 h-8 bg-gold-accent/20 text-gold-accent rounded-full flex items-center justify-center hover:bg-gold-accent hover:text-white transition-all duration-200"
    >
      <Plus className="h-4 w-4" />
    </button>
 

  <div className="text-center md:text-right mt-4 md:mt-0">
    <p className="font-playfair font-bold text-grandeur-brown text-lg">
      ₦{(item.price * item.quantity).toLocaleString()}
    </p>
    <button
      onClick={() => removeItem(item.id)}
      className="text-red-500 hover:text-red-700 transition-colors duration-200 mt-2"
    >
      <Trash2 className="h-4 w-4 mx-auto md:mx-0" />
    </button>
  </div>
</div>
 </div>

                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h2 className="text-2xl font-playfair font-bold text-grandeur-brown mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-poppins">
                    <span className="text-grandeur-brown/70">Subtotal ({state.itemCount} items)</span>
                    <span className="font-semibold text-grandeur-brown">₦{state.total.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between font-poppins">
                    <span className="text-grandeur-brown/70">Delivery Fee</span>
                    <span className="font-semibold text-grandeur-brown">₦{deliveryFee.toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t border-blush-pink/20 pt-4">
                    <div className="flex justify-between font-playfair text-xl font-bold">
                      <span className="text-grandeur-brown">Total</span>
                      <span className="text-gold-accent">₦{grandTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-gold-accent text-white py-4 rounded-full font-poppins font-semibold hover:bg-grandeur-brown transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    Order via WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  
                  <Link
                    to="/shop"
                    className="w-full border-2 border-gold-accent text-gold-accent py-4 rounded-full font-poppins font-semibold hover:bg-gold-accent hover:text-white transition-all duration-300 text-center block"
                  >
                    Continue Shopping
                  </Link>
                </div>

                <div className="mt-6 p-4 bg-gold-accent/10 rounded-lg">
                  <p className="font-poppins text-sm text-grandeur-brown/70 text-center">
                    <strong>Note:</strong> Clicking "Order via WhatsApp" will open WhatsApp with your order details. Our team will confirm availability and provide payment instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;