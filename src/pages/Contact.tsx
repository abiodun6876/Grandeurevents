import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-white to-blush-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-grandeur-brown mb-6">
            Contact Us
          </h1>
          <p className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto">
            Ready to create something beautiful? Get in touch with us to discuss your event needs and let us bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-grandeur-brown mb-8">
                Get In Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-grandeur-brown mb-2">Phone</h3>
                    <p className="font-poppins text-grandeur-brown/70">0815 172 5897</p>
                    <p className="font-poppins text-sm text-grandeur-brown/50">Available 9 AM - 8 PM daily</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-grandeur-brown mb-2">Email</h3>
                    <p className="font-poppins text-grandeur-brown/70">orebaker@gmail.com</p>
                    <p className="font-poppins text-sm text-grandeur-brown/50">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-grandeur-brown mb-2">Service Area</h3>
                    <p className="font-poppins text-grandeur-brown/70">Serving events across Nigeria</p>
                    <p className="font-poppins text-sm text-grandeur-brown/50">Delivery available nationwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-grandeur-brown mb-2">Business Hours</h3>
                    <div className="font-poppins text-grandeur-brown/70 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 12:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-poppins font-semibold text-grandeur-brown mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-white transition-all duration-300"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-white transition-all duration-300"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-white transition-all duration-300"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-playfair font-bold text-grandeur-brown mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-poppins font-medium text-grandeur-brown mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-dusty-rose/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-poppins font-medium text-grandeur-brown mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-dusty-rose/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-poppins font-medium text-grandeur-brown mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-dusty-rose/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-colors duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block font-poppins font-medium text-grandeur-brown mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-dusty-rose/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="cakes">Custom Cakes</option>
                      <option value="catering">Finger Foods & Catering</option>
                      <option value="decorations">Event Decorations</option>
                      <option value="spices">Spices & Seasonings</option>
                      <option value="packages">Event Packages</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-poppins font-medium text-grandeur-brown mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-dusty-rose/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-colors duration-200"
                    placeholder="Tell us about your event, requirements, or any questions you have..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold-accent text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-grandeur-brown transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-blush-pink/20 to-dusty-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-grandeur-brown mb-6">
            We Serve Nationwide
          </h2>
          <p className="text-lg font-poppins text-grandeur-brown/70 mb-8 max-w-2xl mx-auto">
            From Lagos to Abuja, Kano to Port Harcourt - we bring our exceptional service to events across Nigeria.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-gold-accent/20 to-grandeur-brown/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gold-accent mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-grandeur-brown mb-2">
                  Service Coverage Map
                </h3>
                <p className="font-poppins text-grandeur-brown/70">
                  Interactive map coming soon - showing all our delivery locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;