import React from 'react';
import { FaDollarSign, FaCogs, FaHeadset, FaServer, FaEnvelope, FaCloud } from 'react-icons/fa';

const features = [
  { title: "Cost-Effective", description: "Affordable hosting solution with shared server costs.", icon: <FaDollarSign className="text-4xl text-blue-500" /> },
  { title: "Easy to Set Up", description: "One-click installations for popular CMSs like WordPress.", icon: <FaCogs className="text-4xl text-green-500" /> },
  { title: "24/7 Support", description: "Round-the-clock customer support for assistance.", icon: <FaHeadset className="text-4xl text-purple-500" /> },
  { title: "Resource Sharing", description: "Shared CPU, RAM, and bandwidth among multiple websites.", icon: <FaServer className="text-4xl text-orange-500" /> },
  { title: "Email Hosting", description: "Includes email hosting with your domain.", icon: <FaEnvelope className="text-4xl text-red-500" /> },
  { title: "Backup and Restore", description: "Automated backups and restore tools included.", icon: <FaCloud className="text-4xl text-teal-500" /> },
];

const SharedHostingFeatures = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Main Features of Shared Hosting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                // Adding a subtle scroll-down effect
                animation: 'scrollDown 1s ease-out'
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

export default SharedHostingFeatures;
