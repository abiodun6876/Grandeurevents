import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const WhatsAppFloat = () => {
  const [greeting, setGreeting] = useState('');
  const phoneNumber = "2348033504612"; // Your WhatsApp number without +

  useEffect(() => {
    // Set time-based greeting
    const hour = new Date().getHours();
    let timeGreeting = '';
    
    if (hour < 12) timeGreeting = 'Good morning';
    else if (hour < 18) timeGreeting = 'Good afternoon';
    else timeGreeting = 'Good evening';

    setGreeting(`${timeGreeting}! 🌟 Welcome to Grandeur Events CG!`);
  }, []);

  const generateWhatsAppLink = () => {
    const dateTime = new Date().toLocaleString();
    const defaultMessage = `Hi Grandeur Team! I visited your website on ${dateTime}. Please help me with:`;
    
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      `${greeting}\n\n${defaultMessage}`
    )}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <div className="mb-2 bg-white p-3 rounded-lg shadow-lg max-w-xs hidden md:block">
        <p className="text-sm text-gray-700">{greeting}</p>
        <p className="text-xs text-gray-500 mt-1">
          Click below to chat with us on WhatsApp
        </p>
      </div>
      
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  );
};

export default WhatsAppFloat;