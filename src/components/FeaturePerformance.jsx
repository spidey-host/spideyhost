import React from "react";
import { FaBolt, FaShieldAlt, FaCog } from "react-icons/fa";

const FeaturePerformance = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white py-8 h-auto md:h-[80vh]">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Feature Performance</h2>

      {/* Existing Feature Performance Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl px-4 mt-8">
        {/* Speed */}
        <div className="flex flex-col items-center md:items-start p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg w-full sm:w-64 md:w-80 h-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <FaBolt className="text-yellow-400 text-3xl md:text-5xl mb-4" />
          <h3 className="text-lg md:text-2xl font-semibold mb-2 text-center md:text-left">Speed</h3>
          <p className="text-center md:text-left text-sm md:text-lg mb-2">
            Experience lightning-fast performance with our cutting-edge technology.
          </p>
          <p className="text-center md:text-left text-sm md:text-lg">
            Enjoy quick load times and responsive interactions for a smooth user experience.
          </p>
        </div>

        {/* Reliability */}
        <div className="flex flex-col items-center md:items-start p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg w-full sm:w-64 md:w-80 h-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <FaShieldAlt className="text-green-400 text-3xl md:text-5xl mb-4" />
          <h3 className="text-lg md:text-2xl font-semibold mb-2 text-center md:text-left">Reliability</h3>
          <p className="text-center md:text-left text-sm md:text-lg mb-2">
            Built for reliability with robust safeguards and continuous monitoring.
          </p>
          <p className="text-center md:text-left text-sm md:text-lg">
            Ensure your data is always accessible and protected with our high availability infrastructure.
          </p>
        </div>

        {/* Efficiency */}
        <div className="flex flex-col items-center md:items-start p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg w-full sm:w-64 md:w-80 h-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <FaCog className="text-red-400 text-3xl md:text-5xl mb-4" />
          <h3 className="text-lg md:text-2xl font-semibold mb-2 text-center md:text-left">Efficiency</h3>
          <p className="text-center md:text-left text-sm md:text-lg mb-2">
            Optimize workflows with smart resource management and streamlined processes.
          </p>
          <p className="text-center md:text-left text-sm md:text-lg">
            Achieve more with less effort and reduce waste with our efficient solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturePerformance;
