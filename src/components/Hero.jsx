import React, { useState } from 'react';
import hostingImage from '../assets/images/hero.png'; // Hosting image path
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon from react-icons

const tlds = [
  { extension: '.com', color: '#0056D2' }, // Crisp Blue
  { extension: '.net', color: '#218838' }, // Crisp Green
  { extension: '.org', color: '#C82333' }, // Crisp Red
  { extension: '.biz', color: '#138496' }  // Crisp Teal
];

const HeroSection = () => {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = `https://spidey.host/spideycenter/cart.php?a=add&domain=register&query=${encodeURIComponent(domain)}`;
    }, 500); // Simulate loading delay
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative pt-24 pb-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left max-w-screen-xl mx-auto">
      {/* Hosting Image (Visible only on mobile) */}
      <div className="relative flex-1 max-w-sm md:max-w-lg lg:max-w-xl mb-8 md:mb-0 md:hidden">
        <img
          src={hostingImage}
          alt="Hosting"
          className="w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex-1 px-6 md:px-10 mb-8 md:mb-0 md:mr-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Your Hosting Solution
        </h1>
        <p className="text-sm md:text-lg text-gray-700 mb-6">
          Reliable, fast, and secure hosting for your website.
        </p>

        {/* Domain Status Section */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter domain name"
              className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:mr-4"
            />
            <button
              onClick={handleSearch}
              style={{ backgroundColor: '#565BC3' }}
              className={`text-white px-4 py-2 rounded-md hover:bg-blue-700 transform transition-transform duration-200 active:scale-95 ${loading ? 'cursor-wait' : ''}`}
            >
              {loading ? (
                <FaSpinner className="animate-spin" size={20} />
              ) : (
                'Search'
              )}
            </button>
          </div>
        </div>

        {/* TLD Section (without heading) */}
        <div className="mt-12 text-left">
          <div className="flex flex-wrap gap-8"> {/* Slightly increased gap */}
            {tlds.map((tld, index) => (
              <span
                key={index}
                className="text-lg md:text-xl font-bold"  // Reduced font size
                style={{ color: tld.color, opacity: 0.9 }} // Crisp color with less opacity
              >
                {tld.extension}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hosting Image (Visible only on desktop) */}
      <div className="relative flex-1 max-w-sm md:max-w-lg lg:max-w-xl hidden md:block">
        <img
          src={hostingImage}
          alt="Hosting"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
