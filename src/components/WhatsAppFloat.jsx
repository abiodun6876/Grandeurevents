import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  // Recommended phone number format (without + or with URL-encoded +)
  const phoneNumber = "2348033504612"; // OR "%2B2348033504612"
  
  const greetingMessage = "Hi! Welcome to Grandeur Events CG! Your partner in creating unforgettable experiences. We're excited to help plan your special day. Please, how can we be of help?";

  // Using the more reliable api.whatsapp.com endpoint
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(greetingMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
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