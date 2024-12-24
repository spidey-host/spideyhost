import React from 'react';
import { FaUserShield, FaLock, FaRocket, FaChartLine, FaHeadset, FaCogs } from 'react-icons/fa';

const features = [
  { title: "Enhanced Security", description: "Advanced security measures to protect your site.", icon: <FaUserShield className="text-4xl text-blue-500" /> },
  { title: "Reliable Backups", description: "Automatic backups to keep your data safe.", icon: <FaLock className="text-4xl text-green-500" /> },
  { title: "Lightning-Fast Performance", description: "Optimized for speed and efficiency.", icon: <FaRocket className="text-4xl text-orange-500" /> },
  { title: "Real-Time Analytics", description: "Monitor your website performance in real-time.", icon: <FaChartLine className="text-4xl text-purple-500" /> },
  { title: "24/7 Customer Support", description: "Get assistance whenever you need it.", icon: <FaHeadset className="text-4xl text-teal-500" /> },
  { title: "Easy-to-Use Control Panel", description: "Manage your site with an intuitive interface.", icon: <FaCogs className="text-4xl text-red-500" /> },
];

const WordPressHostingFeatures = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#292D34]">
          Key Features of Our WordPress Hosting
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center"
              style={{ 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                animation: 'scrollDown 1s ease-out'
              }}
            >
              <div className="mr-4">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default WordPressHostingFeatures;
