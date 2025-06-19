import React from 'react';
import { Cake, Utensils, Sparkles, Gift, Coffee, Users } from 'lucide-react';

const Services = () => {
  // Image configuration for each service
  const serviceImages = {
    cakes: {
      prefix: 'k',
      count: 7,
      defaultIndex: 1 // Default image index for cakes (k1.jpeg)
    },
    catering: {
      prefix: 'e',
      count: 10,
      defaultIndex: 2 // Default image index for catering (e2.jpeg)
    },
    decorations: {
      prefix: 'e',
      count: 10,
      defaultIndex: 3 // Default image index for decorations (e3.jpeg)
    },
    drinks: {
      prefix: 'p',
      count: 10,
      defaultIndex: 1 // Default image index for drinks (p1.jpeg)
    },
    spices: {
      prefix: 'p',
      count: 10,
      defaultIndex: 2 // Default image index for spices (p2.jpeg)
    },
    packages: {
      prefix: 'p',
      count: 10,
      defaultIndex: 3 // Default image index for packages (p3.jpeg)
    }
  };

  const services = [
    {
      icon: <Cake className="h-12 w-12" />,
      title: "Custom Cakes & Desserts",
      description: "Beautifully crafted cakes for weddings, birthdays, corporate events, and special occasions. From elegant wedding cakes to playful birthday designs.",
      features: [
        "Wedding cakes with custom designs",
        "Birthday and celebration cakes",
        "Corporate event desserts",
        "Cupcakes and mini desserts",
        "Sugar art and decorative elements"
      ],
      image: `/assets/image/${serviceImages.cakes.prefix}${serviceImages.cakes.defaultIndex}.jpeg`
    },
    {
      icon: <Utensils className="h-12 w-12" />,
      title: "Finger Foods & Catering",
      description: "Delicious finger foods and catering services perfect for any event size. From intimate gatherings to large celebrations.",
      features: [
        "Appetizers and hors d'oeuvres",
        "Mini sandwiches and wraps",
        "Nigerian small chops",
        "International finger foods",
        "Dietary restriction accommodations"
      ],
      image: `/assets/image/${serviceImages.catering.prefix}${serviceImages.catering.defaultIndex}.jpeg`
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Event Decorations",
      description: "Transform your venue with our stunning decoration services. We create magical atmospheres for every type of celebration.",
      features: [
        "Wedding decoration packages",
        "Birthday party setups",
        "Corporate event styling",
        "Balloon arrangements",
        "Floral and fabric decorations"
      ],
      image: `/assets/image/${serviceImages.decorations.prefix}${serviceImages.decorations.defaultIndex}.jpeg`
    },
    {
      icon: <Coffee className="h-12 w-12" />,
      title: "Drinks Management",
      description: "Complete beverage solutions for your events, from setup to service. We handle all your drink needs professionally.",
      features: [
        "Bar setup and management",
        "Cocktail and mocktail service",
        "Wine and champagne selection",
        "Non-alcoholic beverage options",
        "Custom drink menus"
      ],
      image: `/assets/image/${serviceImages.drinks.prefix}${serviceImages.drinks.defaultIndex}.jpeg`
    },
    {
      icon: <Gift className="h-12 w-12" />,
      title: "Premium Spices & Seasonings",
      description: "Authentic Nigerian spices and seasonings including our signature Suya pepper (Yaji) and mixed spice blends.",
      features: [
        "Suya Pepper (Yaji) - authentic blend",
        "Pepper Soup Spice mix",
        "Mixed spice combinations",
        "Custom spice packaging",
        "Bulk orders for restaurants"
      ],
      image: `/assets/image/${serviceImages.spices.prefix}${serviceImages.spices.defaultIndex}.jpeg`
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Custom Event Packages",
      description: "Complete event solutions including branded packages, hampers, and special gift sets tailored to your needs.",
      features: [
        "Wedding favor packages",
        "Corporate gift hampers",
        "Holiday gift sets",
        "Branded rice and garri packs",
        "Custom packaging solutions"
      ],
      image: `/assets/image/${serviceImages.packages.prefix}${serviceImages.packages.defaultIndex}.jpeg`
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-white to-blush-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-grandeur-brown mb-6">
            Our Services
          </h1>
          <p className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto">
            From custom cakes to complete event management, we provide comprehensive solutions for all your celebration needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-accent/10 text-gold-accent rounded-2xl mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-grandeur-brown mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg font-poppins text-grandeur-brown/70 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center font-poppins text-grandeur-brown/80"
                      >
                        <div className="w-2 h-2 bg-gold-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full h-96 object-cover"
                    onError={(e) => {
                      console.error(`Failed to load image: ${service.image}`);
                      (e.target as HTMLImageElement).src = '/assets/image/placeholder.jpeg';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
<section className="py-24 bg-cream-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-20">
      <span className="inline-block text-gold-accent font-poppins font-medium uppercase tracking-wider mb-3">
        Our Workflow
      </span>
      <h2 className="text-4xl md:text-5xl font-playfair font-bold text-grandeur-brown mb-4">
        Crafting Your Vision
      </h2>
      <p className="max-w-2xl mx-auto text-lg font-poppins text-grandeur-brown/70 leading-relaxed">
        A seamless journey from concept to reality, with precision at every step
      </p>
    </div>
    
    <div className="relative">
      {/* Decorative line connecting steps */}
      <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-1 bg-gold-accent/20"></div>
      <div className="hidden md:block absolute top-8 left-3/4 right-1/4 h-1 bg-gold-accent/20"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
        {[
          {
            number: 1,
            title: "Consultation",
            description: "We discuss your vision, requirements, and preferences in detail.",
            icon: "💬"
          },
          {
            number: 2,
            title: "Planning",
            description: "We create a detailed plan and timeline for your project.",
            icon: "📝"
          },
          {
            number: 3,
            title: "Creation",
            description: "Our skilled team brings your vision to life with attention to detail.",
            icon: "✂️"
          },
          {
            number: 4,
            title: "Delivery",
            description: "We deliver and set up everything perfectly for your event.",
            icon: "🎁"
          }
        ].map((step) => (
          <div 
            key={step.number} 
            className="group relative text-center px-6 py-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-14 h-14 bg-gradient-to-br from-gold-accent to-gold-accent-dark text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="text-sm mr-1">{step.icon}</span>
                {step.number}
              </div>
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-grandeur-brown mt-8 mb-4">
              {step.title}
            </h3>
            <p className="font-poppins text-grandeur-brown/70 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="text-center mt-16">
      <button className="px-8 py-3 bg-gold-accent hover:bg-gold-accent-dark text-white font-poppins font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
        Start Your Project
      </button>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-accent to-grandeur-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl font-poppins mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your event needs and let us create something beautiful for you.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/order"
              className="inline-flex items-center bg-white text-grandeur-brown px-8 py-4 rounded-full font-poppins font-semibold hover:bg-cream-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Order
            </a>
            <a
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white hover:text-grandeur-brown transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;