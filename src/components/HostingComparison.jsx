import React from "react";
import { FaCheckCircle, FaTimesCircle, FaShoppingCart } from "react-icons/fa";

const hostingPackages = [
  {
    name: "Student",
    price: "Rs. 250",
    websites: "1",
    storage: "Unlimited SSD Storage",
    cPanel: "Standard",
    autoBackups: "Weekly",
    terminalAccess: false,
    sshAccess: false,
  },
  {
    name: "Learner",
    price: "Rs. 280",
    websites: "5",
    storage: "Unlimited SSD Storage",
    cPanel: "Advanced",
    autoBackups: "Daily",
    terminalAccess: true,
    sshAccess: true,
  },
  {
    name: "Business",
    price: "Rs. 350",
    websites: "Unlimited",
    storage: "Unlimited SSD Storage",
    cPanel: "Premium",
    autoBackups: "Daily",
    terminalAccess: true,
    sshAccess: true,
  },
];

const HostingComparisonTable = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Complete Features List</h1>

      {/* Feature Comparison Table */}
      <div className="overflow-x-auto w-full max-w-7xl">
        <table className="table-auto w-full border-collapse bg-white shadow-xl rounded-lg">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="p-3 text-left text-xl text-gray-600 sticky top-0 bg-gray-100 z-10" style={{ width: '200px' }}>Feature</th>
              {hostingPackages.map((pkg) => (
                <th key={pkg.name} className="p-5 text-center text-xl text-gray-600">
                  {pkg.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Price Row */}
            <tr className="bg-gray-50">
              <td className="p-3 font-semibold text-gray-700 text-lg sticky left-0 bg-gray-100 z-10" style={{ position: 'sticky', left: 0, backgroundColor: '#f9fafb', zIndex: 20 }}>Price</td>
              {hostingPackages.map((pkg) => (
                <td
                  key={`${pkg.name}-price`}
                  className="p-5 text-center text-gray-700 text-lg hover:bg-blue-100 hover:text-black transition-colors duration-300"
                >
                  {pkg.price}
                </td>
              ))}
            </tr>

            {/* Websites */}
            <tr>
              <td className="p-3 font-semibold text-gray-700 text-lg sticky left-0 bg-gray-50 z-10" style={{ position: 'sticky', left: 0, backgroundColor: '#f9fafb', zIndex: 20 }}>Websites</td>
              {hostingPackages.map((pkg) => (
                <td key={`${pkg.name}-websites`} className="p-5 text-center text-gray-700 text-lg">
                  {pkg.websites}
                </td>
              ))}
            </tr>

            {/* Storage */}
            <tr className="bg-gray-50">
              <td className="p-3 font-semibold text-gray-700 text-lg sticky left-0 bg-gray-50 z-10" style={{ position: 'sticky', left: 0, backgroundColor: '#f9fafb', zIndex: 20 }}>SSD Storage</td>
              {hostingPackages.map((pkg) => (
                <td
                  key={`${pkg.name}-storage`}
                  className="p-5 text-center text-gray-700 text-lg hover:bg-blue-100 hover:text-black transition-colors duration-300"
                >
                  {pkg.storage}
                </td>
              ))}
            </tr>

            {/* cPanel */}
            <tr>
              <td className="p-3 font-semibold text-gray-700 text-lg sticky left-0 bg-gray-50 z-10" style={{ position: 'sticky', left: 0, backgroundColor: '#f9fafb', zIndex: 20 }}>cPanel</td>
              {hostingPackages.map((pkg) => (
                <td key={`${pkg.name}-cPanel`} className="p-5 text-center text-lg">
                  {pkg.cPanel}
                </td>
              ))}
            </tr>

            {/* Auto Backups */}
            <tr className="bg-gray-50">
              <td className="p-3 font-semibold text-gray-700 text-lg sticky left-0 bg-gray-50 z-10" style={{ position: 'sticky', left: 0, backgroundColor: '#f9fafb', zIndex: 20 }}>Automatic Backups</td>
              {hostingPackages.map((pkg) => (
                <td key={`${pkg.name}-autoBackups`} className="p-5 text-center text-lg">
                  {pkg.autoBackups}
                </td>
              ))}
            </tr>

            {/* Terminal Access */}
            <tr>
              <td className="p-3 font-semibold text-gray-700 text-lg sticky left-0 bg-gray-50 z-10" style={{ position: 'sticky', left: 0, backgroundColor: '#f9fafb', zIndex: 20 }}>Terminal Enabled</td>
              {hostingPackages.map((pkg) => (
                <td key={`${pkg.name}-terminal`} className="p-5 text-center text-lg">
                  {pkg.terminalAccess ? (
                    <FaCheckCircle className="text-green-600 inline-block" />
                  ) : (
                    <FaTimesCircle className="text-red-600 inline-block" />
                  )}
                </td>
              ))}
            </tr>

            {/* SSH Access */}
            <tr className="bg-gray-50">
              <td className="p-3 font-semibold text-gray-700 text-lg sticky left-0 bg-gray-50 z-10" style={{ position: 'sticky', left: 0, backgroundColor: '#f9fafb', zIndex: 20 }}>SSH Access</td>
              {hostingPackages.map((pkg) => (
                <td key={`${pkg.name}-ssh`} className="p-5 text-center text-lg">
                  {pkg.sshAccess ? (
                    <FaCheckCircle className="text-green-600 inline-block" />
                  ) : (
                    <FaTimesCircle className="text-red-600 inline-block" />
                  )}
                </td>
              ))}
            </tr>

            {/* Order Button */}
            <tr>
              <td className="p-3 font-semibold text-gray-700 text-lg sticky left-0 bg-gray-50 z-10" style={{ position: 'sticky', left: 0, backgroundColor: '#f9fafb', zIndex: 20 }}>Order</td>
              {hostingPackages.map((pkg) => (
                <td key={`${pkg.name}-order`} className="p-5 text-center">
                  <button className="mt-2 px-5 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300">
                    <FaShoppingCart className="inline-block mr-2" /> Order
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HostingComparisonTable;
