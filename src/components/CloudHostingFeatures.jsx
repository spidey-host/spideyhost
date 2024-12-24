import React from 'react';
import { FaCloud, FaLock, FaBolt, FaChartLine, FaHeadset, FaDesktop } from 'react-icons/fa';

const features = [
  { 
    title: 'Scalable Resources', 
    description: 'Easily scale your resources up or down based on your needs.', 
    icon: <FaCloud className="text-4xl text-blue-500" />
  },
  { 
    title: 'Enhanced Security', 
    description: 'Keep your data safe with advanced security protocols.', 
    icon: <FaLock className="text-4xl text-purple-500" />
  },
  { 
    title: 'Lightning-Fast Speeds', 
    description: 'Experience blazing-fast loading times for your website.', 
    icon: <FaBolt className="text-4xl text-yellow-500" />
  },
  { 
    title: 'Real-Time Analytics', 
    description: 'Monitor your performance with real-time analytics tools.', 
    icon: <FaChartLine className="text-4xl text-green-500" />
  },
  { 
    title: '24/7 Customer Support', 
    description: 'Get help whenever you need it with our round-the-clock support.', 
    icon: <FaHeadset className="text-4xl text-orange-500" />
  },
  { 
    title: 'Easy-to-Use Control Panel', 
    description: 'Manage your hosting with an intuitive control panel.', 
    icon: <FaDesktop className="text-4xl text-teal-500" />
  },
];

const CloudHostingFeatures = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Key Features of Our Cloud Hosting
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                animation: 'scrollDown 1s ease-out',
              }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
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

export default CloudHostingFeatures;
