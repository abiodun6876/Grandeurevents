
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  CreditCard, 
  MapPin, 
  CheckCircle, 
  Truck, 
  Clock,
  Phone,
  AlertCircle
} from 'lucide-react';

const OrderInstructions = () => {
  const orderSteps = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Select Your Items",
      description: "Browse our services and select the items you want to order. Specify quantities and any customization requirements."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Make Payment",
      description: "Transfer the total amount to our bank account details provided below. Save your transaction receipt."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Provide Delivery Details",
      description: "Fill out our order form with your complete delivery address and contact information."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Order Confirmation",
      description: "Once payment is confirmed, we'll contact you to finalize details and confirm your order."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Delivery & Setup",
      description: "We'll deliver your order on the agreed date and provide setup if required."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-white to-blush-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-grandeur-brown mb-6">
            How to Order
          </h1>
          <p className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto">
            Follow these simple steps to place your order with Grandeur Cakes and Gifts. We've made the process easy and secure.
          </p>
        </div>
      </section>

      {/* Order Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-grandeur-brown mb-4">
              Simple 5-Step Process
            </h2>
            <p className="text-lg font-poppins text-grandeur-brown/70">
              From selection to delivery, we make ordering easy
            </p>
          </div>
          
          <div className="space-y-12">
            {orderSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gold-accent text-white rounded-full font-bold text-xl flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gold-accent/20 text-gold-accent rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-grandeur-brown">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-poppins text-grandeur-brown/70 text-lg">
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden lg:block">
                    <div className="w-full h-32 bg-gradient-to-r from-gold-accent/10 to-blush-pink/20 rounded-lg flex items-center justify-center">
                      <div className="text-gold-accent opacity-30">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-grandeur-brown mb-8">
                Bank Transfer Details
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-poppins font-semibold text-grandeur-brown mb-2">Account Name</h3>
                    <p className="font-poppins text-grandeur-brown/70 text-lg">Grandeur Cakes and Gifts</p>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-grandeur-brown mb-2">Bank Name</h3>
                    <p className="font-poppins text-grandeur-brown/70 text-lg">First Bank of Nigeria</p>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-grandeur-brown mb-2">Account Number</h3>
                    <p className="font-poppins text-grandeur-brown/70 text-lg font-mono bg-gold-accent/10 px-4 py-2 rounded">
                      3012345678
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-gold-accent/10 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-gold-accent" />
                    <span className="font-poppins font-semibold text-grandeur-brown">Important</span>
                  </div>
                  <p className="font-poppins text-sm text-grandeur-brown/70">
                    Please save your transaction receipt and send it to us via WhatsApp or email for quick confirmation.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-playfair font-bold text-grandeur-brown mb-8">
                Delivery Information
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Truck className="h-6 w-6 text-gold-accent" />
                    <h3 className="font-poppins font-semibold text-grandeur-brown">Delivery Fee</h3>
                  </div>
                  <p className="font-poppins text-grandeur-brown/70">
                    Standard delivery fee is <strong>₦3,000</strong> within Lagos. Fees may vary for other locations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Clock className="h-6 w-6 text-gold-accent" />
                    <h3 className="font-poppins font-semibold text-grandeur-brown">Delivery Time</h3>
                  </div>
                  <ul className="font-poppins text-grandeur-brown/70 space-y-2">
                    <li>• Same day delivery (if ordered before 10 AM)</li>
                    <li>• Standard delivery: 2-3 days</li>
                    <li>• Custom orders: 1-2 weeks</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Phone className="h-6 w-6 text-gold-accent" />
                    <h3 className="font-poppins font-semibold text-grandeur-brown">Need Help?</h3>
                  </div>
                  <p className="font-poppins text-grandeur-brown/70 mb-3">
                    Contact us for assistance with your order:
                  </p>
                  <div className="space-y-2 font-poppins text-sm">
                    <p>📞 <strong>Phone:</strong> 0815 172 5897</p>
                    <p>📧 <strong>Email:</strong> orebaker@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-accent to-grandeur-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl font-poppins mb-8 max-w-2xl mx-auto">
            Contact us now to get started with your custom order. We're excited to create something beautiful for your special event!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="tel:08151725897"
              className="inline-flex items-center bg-white text-grandeur-brown px-8 py-4 rounded-full font-poppins font-semibold hover:bg-cream-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/2348151725897"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white hover:text-grandeur-brown transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white hover:text-grandeur-brown transition-all duration-300 transform hover:scale-105"
            >
              Contact Form
            </Link>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-playfair font-semibold mb-4">Quick Order Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2 font-poppins text-sm">
                  <p>✓ Decide on your service/product</p>
                  <p>✓ Prepare your delivery address</p>
                  <p>✓ Have your payment method ready</p>
                </div>
                <div className="space-y-2 font-poppins text-sm">
                  <p>✓ Note any special requirements</p>
                  <p>✓ Check your preferred delivery date</p>
                  <p>✓ Save our contact information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderInstructions;