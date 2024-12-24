import React, { useState } from 'react';
import { FaWordpress, FaLock, FaRocket } from 'react-icons/fa'; // Example icons
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const WordPressHostingPackages = () => {
  const billingPeriods = ['Monthly', 'Semi-Annually', 'Annually', 'Tri-Annually'];

  const packages = [
    {
      name: 'Basic WordPress',
      icon: <FaWordpress size={50} className="text-[#4E54C8]" />,
      price: {
        monthly: { current: "XXX", original: 399 },
        semiAnnually: { current: "XXX", original: 2399 },
        annually: { current: "XXX", original: 3999 },
        triAnnually: { current: "XXXs", original: 5999 },
      },
      features: [
        '1 Website',
        '10 GB SSD Storage',
        'Free SSL Certificate',
        '24/7 Support',
        'Daily Backups',
      ],
      iconSet: [
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
      ],
    },
    {
      name: 'Standard WordPress',
      icon: <FaLock size={50} className="text-[#FD71AF]" />,
      price: {
        monthly: { current: "XXX", original: 799 },
        semiAnnually: { current: "XXX", original: 4999 },
        annually: { current: "XXX", original: 7999 },
        triAnnually: { current: "XXX", original: 9999 },
      },
      features: [
        '3 Websites',
        '30 GB SSD Storage',
        'Free SSL Certificate',
        'Priority Support',
        'Daily Backups',
      ],
      iconSet: [
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
        <FaCheckCircle className="text-blue-500" />,
      ],
      mostPicked: true,
    },
    {
      name: 'Premium WordPress',
      icon: <FaRocket size={50} className="text-[#292D34]" />,
      price: {
        monthly: { current: "XXX", original: 1299 },
        semiAnnually: { current: "XXX", original: 7999 },
        annually: { current: "XXX", original: 12999 },
        triAnnually: { current: "XXX", original: 15999 },
      },
      features: [
        'Unlimited Websites',
        '50 GB SSD Storage',
        'Free SSL Certificate',
        'Dedicated Support',
        'Daily Backups',
      ],
      iconSet: [
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
        <h1 className="text-4xl md:text-3xl font-extrabold text-center mb-8 text-[#292D34]">WordPress Hosting Plans</h1>

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

export default WordPressHostingPackages;
