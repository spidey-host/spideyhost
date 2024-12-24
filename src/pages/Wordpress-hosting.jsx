import React, { useRef } from "react";
import WordPressHostingPackages from "../components/WordPressHostingPackages"; // Import WordPress hosting packages component
import WordPressHostingFeatures from "../components/WordPressHostingFeatures"; // Import WordPress hosting features component
import backgroundImage from '../assets/wordpress-hosting/wordpress-hero.png'; // Path for WordPress Hosting background image
import HostingComparison from '../components/HostingComparison'; // Import hosting comparison component

const WordPressHosting = () => {
  const plansRef = useRef(null);

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <div className="bg-white text-gray-900 py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative">
          
          {/* Text Section */}
          <div className="lg:w-1/3 text-center lg:text-left lg:mx-8 relative z-10">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-snug tracking-tight relative">
              <span style={{ color: '#4E54C8' }}>WordPress Hosting</span> 
              <span style={{ color: '#FF6F61' }}> Plans for Your </span> 
              <span style={{ color: '#4E54C8' }}>Website</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 text-gray-700">
              Optimized WordPress hosting solutions tailored for performance and security.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                onClick={scrollToPlans}
                className="px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Right Side Image Section */}
          <div className="flex-shrink-0 lg:w-1/3 mt-8 lg:mt-0 relative z-20 ml-auto">
            <img
              src={backgroundImage}
              alt="WordPress Hosting"
              className="w-full h-auto object-cover scroll-down-animation"
              style={{
                border: 'none',
                borderRadius: '0',
              }}
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <WordPressHostingFeatures /> {/* WordPress Hosting features section */}

      {/* Hosting Plans Section */}
      <div ref={plansRef}>
        <WordPressHostingPackages /> {/* WordPress hosting plans component */}
      </div>
      
      <div>
        <HostingComparison /> {/* Comparison component */}
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .scroll-down-animation {
          animation: scrollDown 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WordPressHosting;
