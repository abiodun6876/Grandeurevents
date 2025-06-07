import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      category: "Orders & Pricing",
      questions: [
        {
          question: "How far in advance should I place my order?",
          answer: "We recommend placing orders at least 1-2 weeks in advance for custom cakes and 3-4 weeks for large events. However, we can accommodate rush orders depending on availability."
        },
        {
          question: "What are your pricing ranges?",
          answer: "Our pricing varies based on the complexity, size, and type of service. Custom cakes start from ₦15,000, event packages from ₦50,000, and spice orders from ₦2,000. Contact us for detailed quotes."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, for larger orders (above ₦100,000), we offer payment plans with 50% deposit and the balance due before delivery."
        }
      ]
    },
    {
      category: "Delivery & Setup",
      questions: [
        {
          question: "What are your delivery areas?",
          answer: "We deliver across major cities in Nigeria. Standard delivery fee is ₦3,000 within Lagos, with additional charges for other locations. Contact us for specific area pricing."
        },
        {
          question: "Do you provide setup services?",
          answer: "Yes, we provide complete setup services for decorations and event arrangements. This is included in our event packages and available as an add-on service."
        },
        {
          question: "How long does delivery take?",
          answer: "Same-day delivery is available for orders placed before 10 AM (subject to availability). Standard delivery is 2-3 days. Rush orders may incur additional fees."
        }
      ]
    },
    {
      category: "Products & Services",
      questions: [
        {
          question: "Can you accommodate dietary restrictions?",
          answer: "Absolutely! We offer sugar-free, gluten-free, vegan, and other dietary-specific options. Please inform us of any requirements when placing your order."
        },
        {
          question: "What flavors are available for cakes?",
          answer: "We offer vanilla, chocolate, red velvet, carrot, lemon, strawberry, and many other flavors. We can also create custom flavor combinations upon request."
        },
        {
          question: "Do you provide tastings?",
          answer: "Yes, we offer cake tastings for wedding and large event orders. Schedule an appointment at least one week in advance."
        }
      ]
    },
    {
      category: "Spices & Products",
      questions: [
        {
          question: "Are your spices authentic Nigerian spices?",
          answer: "Yes, all our spices are authentic and sourced from quality suppliers. Our Suya pepper (Yaji) is made with traditional recipes and premium ingredients."
        },
        {
          question: "How long do the spices stay fresh?",
          answer: "Our spices have a shelf life of 12-18 months when stored properly in a cool, dry place. Each package includes storage instructions and expiry dates."
        },
        {
          question: "Do you offer bulk orders for restaurants?",
          answer: "Yes, we provide bulk orders for restaurants and businesses with special wholesale pricing. Contact us for bulk order requirements and pricing."
        }
      ]
    },
    {
      category: "Events & Catering",
      questions: [
        {
          question: "What types of events do you cater?",
          answer: "We cater weddings, birthdays, corporate events, baby showers, graduations, and other special occasions. Each event is customized to your specific needs."
        },
        {
          question: "Do you provide serving staff?",
          answer: "Yes, we can provide trained serving staff for events. This service is available as part of our premium event packages or as an add-on service."
        },
        {
          question: "Can you handle large events (200+ guests)?",
          answer: "Absolutely! We have experience handling events for up to 500+ guests. We scale our team and resources accordingly to ensure excellent service."
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-white to-blush-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-grandeur-brown mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto">
            Find answers to common questions about our services, ordering process, and policies.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-grandeur-brown mb-8 text-center">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 10 + itemIndex;
                  return (
                    <div
                      key={itemIndex}
                      className="bg-cream-white rounded-2xl shadow-lg overflow-hidden"
                    >
                      <button
                        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-blush-pink/20 transition-colors duration-200"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <h3 className="text-lg font-poppins font-semibold text-grandeur-brown pr-4">
                          {item.question}
                        </h3>
                        {openItem === globalIndex ? (
                          <ChevronUp className="h-6 w-6 text-gold-accent flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gold-accent flex-shrink-0" />
                        )}
                      </button>
                      {openItem === globalIndex && (
                        <div className="px-8 pb-6">
                          <p className="font-poppins text-grandeur-brown/80 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-accent to-grandeur-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl font-poppins mb-8 max-w-2xl mx-auto">
            We're here to help! Contact us directly and we'll be happy to answer any questions you may have.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-grandeur-brown px-8 py-4 rounded-full font-poppins font-semibold hover:bg-cream-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="tel:08151725897"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white hover:text-grandeur-brown transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;