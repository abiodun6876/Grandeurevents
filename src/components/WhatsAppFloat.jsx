import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  // Two options for the phone number format:
  const phoneNumber1 = "2348033504612"; // Without +
  const phoneNumber2 = "%2B2348033504612"; // With URL-encoded +
  
  const message = "Hi! Welcome to Grandeur Events CG! Your partner in creating unforgettable experiences. We're excited to help plan your special day. Please, how can we be of help?";

  // Try both URL formats:
  const whatsappUrl1 = `https://wa.me/${phoneNumber1}?text=${encodeURIComponent(message)}`;
  const whatsappUrl2 = `https://api.whatsapp.com/send?phone=${phoneNumber2}&text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl1} // Try changing to whatsappUrl2 if this doesn't work
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