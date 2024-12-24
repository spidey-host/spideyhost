import React from 'react';
import { FaGlobe, FaRegHandshake, FaServer, FaRegLightbulb, FaCloud } from 'react-icons/fa';

const DomainPricing = () => {
  const domainPricing = [
    { tld: ".com", price: "Rs.1699/year", icon: <FaRegHandshake className="text-[#565BC3]" /> },
    { tld: ".net", price: "Rs.1999/year", icon: <FaServer className="text-gray-500" /> },
    { tld: ".org", price: "Rs.1699/year", icon: <FaRegLightbulb className="text-gray-500" /> },
    { tld: ".info", price: "Rs.699/year", icon: <FaCloud className="text-gray-500" /> },
    { tld: ".biz", price: "Rs.699/year", icon: <FaRegHandshake className="text-gray-500" /> },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-6">
      <header className="text-center mb-12">
        <div className="flex items-center justify-center text-[#565BC3]">
          <FaGlobe size={50} />
        </div>
        <h1 className="text-5xl font-extrabold text-[#565BC3] mt-4">Domain Pricing</h1>
        <p className="text-xl text-gray-700 mt-2">Choose the perfect domain for your business at unbeatable prices!</p>
      </header>

      <div className="w-full max-w-5xl bg-white text-black rounded-lg shadow-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gradient-to-r from-[#565BC3] to-[#6b7ff2] text-white">
            <tr>
              <th className="p-5 text-lg font-semibold">Domain Extension</th>
              <th className="p-5 text-lg font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            {domainPricing.map((domain, index) => (
              <tr
                key={index}
                className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} hover:bg-[#E0E7FF] transition-colors duration-200`}
              >
                <td className="p-5 text-lg flex items-center gap-2">
                  {domain.icon} {domain.tld}
                </td>
                <td className="p-5 text-lg font-medium">{domain.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="mt-12 text-center">
        <p className="text-gray-600">Need assistance? <span className="text-[#565BC3] font-semibold">Contact Spidey Host Support</span> for expert guidance.</p>
      </footer>
    </div>
  );
};

export default DomainPricing;
