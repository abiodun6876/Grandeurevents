import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Heart className="h-8 w-8" />, number: "500+", label: "Happy Clients" },
    { icon: <Award className="h-8 w-8" />, number: "5+", label: "Years Experience" },
    { icon: <Users className="h-8 w-8" />, number: "1000+", label: "Events Served" },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: "Customer Support" }
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We use only the finest ingredients and materials to ensure every product meets our high standards."
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen to your needs and exceed your expectations."
    },
    {
      title: "Creative Innovation",
      description: "We bring fresh ideas and creative solutions to make your events truly unique and memorable."
    },
    {
      title: "Reliable Service",
      description: "Count on us for timely delivery and professional service, every time."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-white to-blush-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-grandeur-brown mb-6">
              About Grandeur
            </h1>
            <p className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto">
              We are passionate about creating extraordinary experiences through exceptional cakes, gifts, and event services that bring joy and elegance to every celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-grandeur-brown mb-6">
                Our Story
              </h2>
              <div className="space-y-6 font-poppins text-grandeur-brown/80">
                <p>
                  Grandeur Cakes and Gifts was born from a passion for creating memorable moments. What started as a small venture has grown into a trusted name in luxury event services, known for our attention to detail and commitment to excellence.
                </p>
                <p>
                  We specialize in custom cakes that are not just delicious but works of art, premium spices that bring authentic flavors to your table, and comprehensive event packages that handle every detail of your special occasions.
                </p>
                <p>
                  Our team of skilled bakers, decorators, and event planners work tirelessly to ensure that every creation reflects our commitment to quality and your unique vision.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="\assets\image\k2.jpeg"
                alt="Our bakery team at work"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-accent text-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-playfair font-bold">Est.</div>
                  <div className="text-3xl font-playfair font-bold">2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gold-accent to-grandeur-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-playfair font-bold mb-2">{stat.number}</div>
                <div className="font-poppins text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-grandeur-brown mb-4">
              Our Values
            </h2>
            <p className="text-lg font-poppins text-grandeur-brown/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-4">
                  {value.title}
                </h3>
                <p className="font-poppins text-grandeur-brown/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
      Team Section 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-grandeur-brown mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg font-poppins text-grandeur-brown/70">
              The passionate people behind Grandeur
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                alt="Head Baker"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-2">
                Sarah Adebayo
              </h3>
              <p className="font-poppins text-gold-accent mb-4">Head Baker & Founder</p>
              <p className="font-poppins text-grandeur-brown/70 text-sm">
                With over 10 years of experience, Sarah brings artistry and passion to every cake creation.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                alt="Event Coordinator"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-2">
                Michael Johnson
              </h3>
              <p className="font-poppins text-gold-accent mb-4">Event Coordinator</p>
              <p className="font-poppins text-grandeur-brown/70 text-sm">
                Michael ensures every event runs smoothly, managing logistics with precision and care.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                alt="Creative Director"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-2">
                Fatima Al-Hassan
              </h3>
              <p className="font-poppins text-gold-accent mb-4">Creative Director</p>
              <p className="font-poppins text-grandeur-brown/70 text-sm">
                Fatima brings innovative design concepts to life, creating stunning visual experiences.
              </p>
            </div>
            
          </div>
          
        </div>
        
      </section>
      */}
    </div>
  );
};

export default About;