import React from 'react';
import { FaRocket, FaHdd, FaServer, FaHeadset, FaShieldAlt, FaSyncAlt } from 'react-icons/fa';

const HostingSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Our Hosting?</h2>

        {/* Hosting Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* LiteSpeed Server */}
          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transition-shadow duration-300 ease-in-out hover:shadow-xl hover:scale-105">
            <FaServer className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">LiteSpeed Server</h3>
            <p className="text-gray-700">
              Experience ultra-fast speeds with LiteSpeed Web Server, built to handle high traffic with ease and improve your site's performance.
            </p>
          </div>

          {/* SSD Persistence */}
          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transition-shadow duration-300 ease-in-out hover:shadow-xl hover:scale-105">
            <FaHdd className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">SSD Persistence</h3>
            <p className="text-gray-700">
              We use SSD storage to ensure that your data is secure, persistent, and delivered at lightning speeds for better performance.
            </p>
          </div>

          {/* Ultra-Fast Network */}
          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transition-shadow duration-300 ease-in-out hover:shadow-xl hover:scale-105">
            <FaRocket className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Ultra-Fast Network</h3>
            <p className="text-gray-700">
              Our ultra-fast network infrastructure ensures your website stays online and delivers content instantly, no matter where your visitors are located.
            </p>
          </div>
        </div>

        {/* Additional Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          {/* 24/7 Customer Support */}
          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transition-shadow duration-300 ease-in-out hover:shadow-xl hover:scale-105">
            <FaHeadset className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
            <p className="text-gray-700">
              We're always here to help you, 24/7, ensuring your hosting experience is smooth and hassle-free.
            </p>
          </div>

          {/* 7-Day Money-Back Guarantee */}
          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transition-shadow duration-300 ease-in-out hover:shadow-xl hover:scale-105">
            <FaSyncAlt className="text-4xl text-orange-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">7-Day Money-Back Guarantee</h3>
            <p className="text-gray-700">
              Not satisfied? Get a full refund within the first 7 days—no questions asked!
            </p>
          </div>

          {/* Uptime Guarantee */}
          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transition-shadow duration-300 ease-in-out hover:shadow-xl hover:scale-105">
            <FaShieldAlt className="text-4xl text-teal-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">99.9% Uptime Guarantee</h3>
            <p className="text-gray-700">
              With our state-of-the-art infrastructure, we guarantee 99.9% uptime, ensuring your site is always online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingSection;
