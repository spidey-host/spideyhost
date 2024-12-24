import React, { useState, useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi'; // Chat-related icon

const WhatsAppChat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "XXXXX"; // Replace with your WhatsApp number
  const message = "Hi Spidey Host Team! 🌟 I'm looking for assistance with your services. Can you help me find the best plan for my needs? Thank you!";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Delay the visibility of the button by 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3000ms = 3 seconds

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5 right-5 flex items-center space-x-3">
          {/* Chat Icon and Text */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Live Chat">
            <div className="flex items-center bg-blue-500 text-white rounded-full py-3 px-5 shadow-lg hover:bg-blue-600 transition">
              <FiMessageCircle className="w-6 h-6 text-white mr-2" /> {/* Chat Icon */}
              <span>Chat with us</span> {/* Chat Text */}
            </div>
          </a>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
