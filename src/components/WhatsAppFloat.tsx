import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const WhatsAppFloat = () => {
  const [greeting, setGreeting] = useState('');
  const [showChatCard, setShowChatCard] = useState(false);
  const phoneNumber = "2348033504612";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    
    const hour = new Date().getHours();
    setGreeting(
      hour < 12 ? 'Good morning! 🌞' :
      hour < 18 ? 'Good afternoon! ☀️' : 
      'Good evening! 🌙'
    );
  }, []);

  const startWhatsAppChat = (selectedOption: string | null = null) => {
    const dateTime = new Date().toLocaleString();
    let message = `${greeting} Welcome to Grandeur Events!\n\n`;
    
    if (selectedOption) {
      message += `I need help with: ${selectedOption}\n\n`;
    } else {
      message += "I'm interested in your services.\n\n";
    }
    
    message += `[Message sent from your website on ${dateTime}]`;
    
    const encoded = encodeURIComponent(message);
    const url = isMobile 
      ? `whatsapp://send?phone=${phoneNumber}&text=${encoded}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encoded}`;
    
    window.open(url, '_blank');
    setShowChatCard(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Card */}
      {showChatCard && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-green-600 p-3 text-white flex justify-between items-center">
            <h3 className="font-medium">Grandeur Events Assistant</h3>
            <button 
              onClick={() => setShowChatCard(false)}
              className="text-white hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="p-4">
            <p className="text-sm mb-4">{greeting}! How can we help you today?</p>
            
            <div className="space-y-2">
              {['Event Planning', 'Pricing', 'Availability', 'Custom Request'].map((option) => (
                <button
                  key={option}
                  onClick={() => startWhatsAppChat(option)}
                  className="w-full text-left px-3 py-2 bg-gray-100 hover:bg-green-50 rounded text-sm transition-colors border border-gray-200"
                >
                  {option}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => startWhatsAppChat()}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded text-sm font-medium transition-colors"
            >
              Start General Chat
            </button>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setShowChatCard(!showChatCard)}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 shadow-lg ${showChatCard ? 'rotate-180' : ''}`}
        aria-label="Open chat options"
      >
        {showChatCard ? <FaTimes className="text-white text-xl" /> : <FaWhatsapp className="text-white text-2xl" />}
      </button>
    </div>
  );
};

export default WhatsAppFloat;