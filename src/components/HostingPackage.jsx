import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaBriefcase, FaBook } from 'react-icons/fa';
import { GiLightBulb } from 'react-icons/gi';
import { motion } from 'framer-motion';

const HostingPackages = () => {
  const billingPeriods = ['Monthly', 'Semi-Annually', 'Annually', 'Tri-Annually'];

  const packages = [
    {
      name: 'Student Basic',
      icon: <FaBook size={50} className="text-[#4E54C8]" />,
      price: {
        monthly: { current: 245, original: 350 },
        semiAnnually: { current: 1260, original: 2100 },
        annually: { current: 2100, original: 4200 },
        triAnnually: { current: 2499, original: 12600 },
      },
      features: [
        '1 Websites',
        'Unlimited SSD Storage',
        '10 Email Accounts',
        '24/7 Customer Support',
        'Unlimited Bandwidth',
        'LiteSpeed Webserver',
        'Free SSL Certificate',
        'Terminal access Disabled',
      ],
      iconSet: [
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaTimesCircle className="text-red-500" />,
      ],
    },
    {
      name: 'Learner Basic',
      icon: <GiLightBulb size={50} className="text-[#FD71AF]" />,
      price: {
        monthly: { current: 280, original: 400 },
        semiAnnually: { current: 1440, original: 2400 },
        annually: { current: 2400, original: 4800 },
        triAnnually: { current: 2880, original: 14400 },
      },
      features: [
        '5 Websites',
        'Unlimited SSD Storage',
        '20 Email Accounts',
        '24/7 Customer Support',
        'Unlimited Bandwidth',
        'LiteSpeed Webserver',
        'Free SSL Certificate',
        'Terminal access Enabled',
      ],
      iconSet: [
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle className="text-green-500" />,
      ],
      mostPicked: true,
    },
    {
      name: 'Business Basic',
      icon: <FaBriefcase size={50} className="text-[#292D34]" />,
      price: {
        monthly: { current: 350, original: 500 },
        semiAnnually: { current: 1800, original: 3000 },
        annually: { current: 3000, original: 6000 },
        triAnnually: { current: 3600, original: 18000 },
      },
      features: [
        'Unlimited Websites',
        'Unlimited SSD Storage',
        'Unlimited Email Accounts',
        '24/7 Customer Support',
        'Unlimited Bandwidth',
        'LiteSpeed Webserver',
        'Free SSL Certificate',
        'Terminal access Enabled',
      ],
      iconSet: [
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle />,
        <FaCheckCircle className="text-green-500" />,
      ],
    },
  ];

  const [selectedBilling, setSelectedBilling] = useState('Monthly');

  const handleBillingChange = (period) => {
    setSelectedBilling(period);
  };

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto border border-gray-300 p-4 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#292D34]">Shared Hosting Deals</h1>

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
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
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

        <div className="md:hidden overflow-x-auto flex space-x-4 pb-4">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              className="flex-none w-72 bg-white text-gray-800 p-6 rounded-lg shadow-lg relative border border-gray-300"
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

        <div className="hidden md:grid grid-cols-3 gap-4">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg relative border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {pkg.mostPicked && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
Most Picked </div> )} <div className="mb-4 flex justify-center">{pkg.icon}</div> <h2 className="text-2xl font-bold mb-4 text-blue-500">{pkg.name}</h2> <p className="text-2xl font-semibold mb-6 text-blue-600"> {selectedBilling === 'Monthly' && ( <> Rs. {pkg.price.monthly.current}{' '} <span className="text-sm line-through text-gray-400">Rs. {pkg.price.monthly.original}</span> </> )} {selectedBilling === 'Semi-Annually' && ( <> Rs. {pkg.price.semiAnnually.current}{' '} <span className="text-sm line-through text-gray-400">Rs. {pkg.price.semiAnnually.original}</span> </> )} {selectedBilling === 'Annually' && ( <> Rs. {pkg.price.annually.current}{' '} <span className="text-sm line-through text-gray-400">Rs. {pkg.price.annually.original}</span> </> )} {selectedBilling === 'Tri-Annually' && ( <> Rs. {pkg.price.triAnnually.current}{' '} <span className="text-sm line-through text-gray-400">Rs. {pkg.price.triAnnually.original}</span> </> )} </p> <ul className="mb-6 text-left text-sm"> {pkg.features.map((feature, index) => ( <li key={index} className="flex items-center mb-2"> <span className="text-blue-500 mr-2">{pkg.iconSet[index]}</span> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all"> Get Started </button> </motion.div> ))} </div> </div> </div> ); };

export default HostingPackages;