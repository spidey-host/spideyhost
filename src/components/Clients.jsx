import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animation
import { FaGoogle, FaFacebook, FaSpotify, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import default icons
import { FcGoogle } from 'react-icons/fc'; // Import colorful Google icon

const trustedClients = [
  { name: 'Google', defaultIcon: FaGoogle, hoverIcon: FcGoogle, defaultColor: 'text-gray-500', hoverColor: 'text-transparent' },
  { name: 'Facebook', icon: FaFacebook, defaultColor: 'text-gray-500', hoverColor: 'text-blue-700' },
  { name: 'Spotify', icon: FaSpotify, defaultColor: 'text-gray-500', hoverColor: 'text-green-600' },
  { name: 'Instagram', icon: FaInstagram, defaultColor: 'text-gray-500', hoverColor: 'text-pink-600' },
  { name: 'Twitter', icon: FaTwitter, defaultColor: 'text-gray-500', hoverColor: 'text-blue-400' },
];

const Clients = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Left Side: Trusted Clients Text */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-700">Trusted</h2>
          <p className="text-3xl font-bold text-gray-700">Clients</p>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block border-l-2 border-gray-300 h-20"></div>

        {/* Right Side: Client Logos */}
        <div className="flex flex-wrap gap-8 justify-center md:justify-start w-full relative">
          {/* Sliding feature for mobile */}
          <div className="overflow-x-scroll flex gap-4 md:hidden px-4">
            {trustedClients.map((client, index) => {
              const DefaultIcon = client.defaultIcon || client.icon;
              const HoverIcon = client.hoverIcon || client.icon;

              return (
                <motion.div
                  key={index}
                  className="min-w-[150px] p-4 bg-white shadow-md rounded-lg flex items-center gap-4 transition-transform duration-300 group hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Apply hover effect */}
                  <DefaultIcon
                    className={`text-4xl ${client.defaultColor} group-hover:hidden transition-colors duration-300`}
                  />
                  <HoverIcon
                    className={`text-4xl ${client.hoverColor} hidden group-hover:block transition-colors duration-300`}
                  />
                  <span className="text-gray-500 group-hover:text-black font-medium transition-colors duration-300">
                    {client.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop view without sliding */}
          <div className="hidden md:flex flex-wrap gap-8">
            {trustedClients.map((client, index) => {
              const DefaultIcon = client.defaultIcon || client.icon;
              const HoverIcon = client.hoverIcon || client.icon;

              return (
                <motion.div
                  key={index}
                  className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4 transition-transform duration-300 group hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Apply hover effect */}
                  <DefaultIcon
                    className={`text-4xl ${client.defaultColor} group-hover:hidden transition-colors duration-300`}
                  />
                  <HoverIcon
                    className={`text-4xl ${client.hoverColor} hidden group-hover:block transition-colors duration-300`}
                  />
                  <span className="text-gray-500 group-hover:text-black font-medium transition-colors duration-300">
                    {client.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
