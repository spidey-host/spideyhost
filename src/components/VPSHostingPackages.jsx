import React, { useState } from 'react';
import { FaServer, FaDatabase, FaHdd } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa'; // Import the check icon

const VPSHostingPackages = () => {
  const billingPeriods = ['Monthly', 'Semi-Annually', 'Annually', 'Tri-Annually'];

  const packages = [
    {
      name: 'Basic VPS',
      icon: <FaServer size={50} className="text-[#4E54C8]" />,
      price: {
        monthly: { current: "XXX", original: 1499 },
        semiAnnually: { current: "XXX", original: 8999 },
        annually: { current: "XXX", original: 17999 },
        triAnnually: { current: "XXX", original: 24999 },
      },
      features: [
        '1 vCPU',
        '2GB RAM',
        '50GB SSD Storage',
        '1TB Bandwidth',
        '24/7 Support',
        'Free SSL Certificate',
      ],
      iconSet: [
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
      ],
    },
    {
      name: 'Standard VPS',
      icon: <FaDatabase size={50} className="text-[#FD71AF]" />,
      price: {
        monthly: { current: "XXX", original: 2499 },
        semiAnnually: { current: "XXX", original: 15999 },
        annually: { current: "XXX", original: 29999 },
        triAnnually: { current: "XXX", original: 39999 },
      },
      features: [
        '2 vCPU',
        '4GB RAM',
        '100GB SSD Storage',
        '2TB Bandwidth',
        'Priority Support',
        'Free SSL Certificate',
      ],
      iconSet: [
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
      ],
      mostPicked: true,
    },
    {
      name: 'Premium VPS',
      icon: <FaHdd size={50} className="text-[#292D34]" />,
      price: {
        monthly: { current: 2999, original: 3999 },
        semiAnnually: { current: 15999, original: 24999 },
        annually: { current: 24999, original: 39999 },
        triAnnually: { current: 29999, original: 59999 },
      },
      features: [
        '4 vCPU',
        '8GB RAM',
        '200GB SSD Storage',
        '5TB Bandwidth',
        'Dedicated Support',
        'Free SSL Certificate',
      ],
      iconSet: [
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
      ],
    },
  ];

  const [selectedBilling, setSelectedBilling] = useState('Monthly');

  const handleBillingChange = (period) => {
    setSelectedBilling(period);
  };

  return (
    <div className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto border border-gray-300 p-4 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-3xl font-extrabold text-center mb-8 text-[#292D34]">VPS Hosting Plans</h1>

        <div className="flex flex-col md:flex-row items-center justify-center mb-6">
          <div className="md:hidden mb-4 relative">
            <select
              className="border p-3 rounded-full text-gray-700 bg-white hover:bg-gray-100 transition-all focus:outline-none appearance-none text-base"
              value={selectedBilling}
              onChange={(e) => handleBillingChange(e.target.value)}
            >
              {billingPeriods.map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden md:flex">
            {billingPeriods.map((period) => (
              <button
                key={period}
                className={`mx-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  selectedBilling === period
                    ? 'bg-[#3B82F6] text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                }`}
                onClick={() => handleBillingChange(period)}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg relative border border-gray-300 transform transition-transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {pkg.mostPicked && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Most Picked
                </div>
              )}
              <div className="mb-4 flex justify-center">{pkg.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-blue-500">{pkg.name}</h2>
              <p className="text-2xl font-semibold mb-6 text-blue-600">
                {selectedBilling === 'Monthly' && (
                  <>
                    Rs. {pkg.price.monthly.current}{' '}
                    <span className="text-sm line-through text-gray-400">Rs. {pkg.price.monthly.original}</span>
                  </>
                )}
                {selectedBilling === 'Semi-Annually' && (
                  <>
                    Rs. {pkg.price.semiAnnually.current}{' '}
                    <span className="text-sm line-through text-gray-400">Rs. {pkg.price.semiAnnually.original}</span>
                  </>
                )}
                {selectedBilling === 'Annually' && (
                  <>
                    Rs. {pkg.price.annually.current}{' '}
                    <span className="text-sm line-through text-gray-400">Rs. {pkg.price.annually.original}</span>
                  </>
                )}
                {selectedBilling === 'Tri-Annually' && (
                  <>
                    Rs. {pkg.price.triAnnually.current}{' '}
                    <span className="text-sm line-through text-gray-400">Rs. {pkg.price.triAnnually.original}</span>
                  </>
                )}
              </p>
              <ul className="mb-6 text-left text-sm">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="text-blue-500 mr-2">{pkg.iconSet[index]}</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VPSHostingPackages;
