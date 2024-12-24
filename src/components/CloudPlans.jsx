import React, { useState } from 'react';
import { FaServer, FaDatabase, FaHdd, FaCheckCircle } from 'react-icons/fa';
import { GiCloudUpload } from 'react-icons/gi';
import { MdBusiness } from 'react-icons/md';

const CloudHostingPackages = () => {
  const billingPeriods = ['Monthly', 'Semi-Annually', 'Annually', 'Tri-Annually'];

  const packages = [
    {
      name: 'Cloud Starter',
      icon: <GiCloudUpload size={50} className="text-[#4E54C8]" />,
      price: { monthly: { current: 600, original: 800 } },
      features: [
        '2 Cloud Servers',
        '50 GB SSD Storage',
        'Unlimited Email Accounts',
        '24/7 Customer Support',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
      ],
    },
    {
      name: 'Cloud Pro',
      icon: <FaServer size={50} className="text-[#FD71AF]" />,
      price: { monthly: { current: 1000, original: 1400 } },
      features: [
        '5 Cloud Servers',
        '100 GB SSD Storage',
        'Unlimited Email Accounts',
        '24/7 Premium Support',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
      ],
    },
    {
      name: 'Cloud Business',
      icon: <MdBusiness size={50} className="text-[#292D34]" />,
      price: { monthly: { current: 1500, original: 2000 } },
      features: [
        'Unlimited Cloud Servers',
        '200 GB SSD Storage',
        'Unlimited Email Accounts',
        '24/7 Priority Support',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
      ],
    },
  ];

  const [selectedBilling, setSelectedBilling] = useState('Monthly');

  const handleBillingChange = (period) => {
    setSelectedBilling(period);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Choose Your Cloud Hosting Plan</h2>
        <p className="mt-4 text-lg text-gray-600">
          Flexible cloud hosting plans tailored to meet your business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-white shadow-lg rounded-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">{pkg.icon}</div>
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
              <p className="mt-4 text-gray-600">
                {/* Rs. {pkg.price.monthly.current}  */}
                <span className="text-sm line-through text-gray-400"> Rs. {pkg.price.monthly.original}</span>
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudHostingPackages;
