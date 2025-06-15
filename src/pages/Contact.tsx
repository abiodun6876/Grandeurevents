import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    
    // Format the message for WhatsApp
    const whatsappMessage = `New Contact Form Submission:%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service Interest:* ${formData.service}%0A` +
      `*Message:* ${formData.message}`;

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/2348033504612?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    
    // Show confirmation (optional)
    alert('You will be redirected to WhatsApp to complete your message.');
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
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-grandeur-brown mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-poppins text-grandeur-brown/80 max-w-3xl mx-auto"
          >
            Ready to create something beautiful? Get in touch via WhatsApp for the fastest response.
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-playfair font-bold text-grandeur-brown mb-8"
              >
                Get In Touch
              </motion.h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-grandeur-brown mb-2">Our Location</h3>
                    <p className="font-poppins text-grandeur-brown/70">
                      K.M 46 Lagos-Ibadan Expressway<br />
                      Jerusalem Redemption Camp<br />
                      Mowe, Ogun State<br />
                      Lagos, Nigeria
                    </p>
<br></br>
<div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold-accent" />
                  </div>
                    <p className="font-poppins text-grandeur-brown/70">
                     No 9, CAC Avenue, Irepo Estate,<br />
                     Bakare bus stop,<br />
                      Igando Road, Ikotun,<br />
                      Lagos, Nigeria
                    </p>

                      
                  </div>
                </div>

                {/* Phone */}
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
                
                {/* Email */}
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
                
                {/* Hours */}
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
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 className="font-poppins font-semibold text-grandeur-brown mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/grandeurevents89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@grandeurevents89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-white transition-all duration-300"
                    aria-label="TikTok"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/grandeurev26712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-white transition-all duration-300"
                    aria-label="Twitter/X"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/2348151725897"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-white transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="h-6 w-6" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-cream-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-playfair font-bold text-grandeur-brown mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
              
                {/* Contact Form */}
    
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
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-500 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center justify-center"
                >
                  Send via WhatsApp
                  <FaWhatsapp className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;