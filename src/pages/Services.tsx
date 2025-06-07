import React from 'react';
import { Cake, Utensils, Sparkles, Gift, Coffee, Users } from 'lucide-react';

const Services = () => {
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? '1721932' :
                      index === 1 ? '1395967' :
                      index === 2 ? '587741' :
                      index === 3 ? '1283219' :
                      index === 4 ? '1340130' :
                      '1729797'
                    }/pexels-photo-${
                      index === 0 ? '1721932' :
                      index === 1 ? '1395967' :
                      index === 2 ? '587741' :
                      index === 3 ? '1283219' :
                      index === 4 ? '1340130' :
                      '1729797'
                    }.jpeg`}
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-grandeur-brown mb-4">
              Our Process
            </h2>
            <p className="text-lg font-poppins text-grandeur-brown/70">
              How we bring your vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-4">
                Consultation
              </h3>
              <p className="font-poppins text-grandeur-brown/70">
                We discuss your vision, requirements, and preferences in detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-4">
                Planning
              </h3>
              <p className="font-poppins text-grandeur-brown/70">
                We create a detailed plan and timeline for your project.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-4">
                Creation
              </h3>
              <p className="font-poppins text-grandeur-brown/70">
                Our skilled team brings your vision to life with attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-4">
                Delivery
              </h3>
              <p className="font-poppins text-grandeur-brown/70">
                We deliver and set up everything perfectly for your event.
              </p>
            </div>
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