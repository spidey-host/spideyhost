import React, { useState, useRef, useEffect } from 'react';
import { FaUsers, FaCloud, FaServer, FaWordpress } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdArrowDropDown } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const dropdownRef = useRef(null);
  const menuRef = useRef(null); // Ref for mobile menu

  // Handle clicks outside the mobile menu to close it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 250); // Delay of 0.25 seconds
    setTimeoutId(id);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleDropdownMouseLeave = () => {
    const id = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 250); // Delay of 0.25 seconds
    setTimeoutId(id);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="relative p-2 bg-white z-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-gray-800 text-2xl font-semibold">
          <a href="/" className="flex items-center"> {/* Flex container to center "Spidey Host" vertically */}
            Spidey Host
          </a>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 relative group">
          {/* Hosting Dropdown */}
          <div className="relative flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="text-gray-800 font-semibold hover:text-[#6A6FD0] flex items-center space-x-1">
              Hosting
              <MdArrowDropDown
                className={`inline h-4 w-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 shadow-lg rounded-lg z-50 transition-opacity duration-300 ${
                isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              ref={dropdownRef}
            >
              <a
                href="#/shared-hosting"
                className="block px-4 py-3 text-[#4E54C8] hover:bg-gray-100 flex items-center space-x-4 rounded-md font-semibold"
              >
                <FaUsers className="h-6 w-6 text-[#4E54C8] shadow-md" />
                <div>
                  Shared Hosting
                  <p className="text-xs text-gray-500">Multiple websites share one server.</p>
                </div>
              </a>
              <a
                href="#/cloud-hosting"
                className="block px-4 py-3 text-[#FD71AF] hover:bg-gray-100 flex items-center space-x-4 rounded-md font-semibold"
              >
                <FaCloud className="h-6 w-6 text-[#FD71AF] shadow-md" />
                <div>
                  Cloud Hosting
                  <p className="text-xs text-gray-500">Uses many servers for high availability.</p>
                </div>
              </a>
              <a
                href="#/vps-hosting"
                className="block px-4 py-3 text-[#02B884] hover:bg-gray-100 flex items-center space-x-4 rounded-md font-semibold"
              >
                <FaServer className="h-6 w-6 text-[#02B884] shadow-md" />
                <div>
                  VPS Hosting
                  <p className="text-xs text-gray-500">Virtual servers on one physical server.</p>
                </div>
              </a>
              <a
                href="#/wordpress-hosting"
                className="block px-4 py-3 text-[#292D34] hover:bg-gray-100 flex items-center space-x-4 rounded-md font-semibold"
              >
                <FaWordpress className="h-6 w-6 text-[#292D34] shadow-md" />
                <div>
                  WordPress Hosting
                  <p className="text-xs text-gray-500">Optimized hosting for WordPress sites.</p>
                </div>
              </a>
            </div>
          </div>

          <a href="#/domain" className="text-gray-800 font-semibold hover:text-[#6A6FD0]">
            Domain
          </a>
          <a href="#" className="text-gray-800 font-semibold hover:text-[#6A6FD0]">
            Help
          </a>
          <a href="https://blogs.spidey.host" className="text-gray-800 font-semibold hover:text-[#6A6FD0]">
            Blogs
          </a>
        </div>

        {/* Sign In, Sign Up Buttons, and Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="bg-[#565AC3] text-white px-4 py-2 rounded font-semibold hover:bg-[#4E54C8] transform transition-transform duration-200 active:scale-95"
          >
            Client Area
          </a>

          <a
            href="#"
            className="bg-white text-gray-800 text-sm px-3 py-1 w-32 rounded font-semibold hover:text-[#565AC3] transform transition-transform duration-200 active:scale-95 hidden md:block"
          >
            Sign Up
          </a>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden toggle-button text-gray-800 cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-100 transition-transform duration-300 md:hidden z-0 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        ref={menuRef} // Attach the ref to the mobile menu container
      >
        <div className="p-4">
          {/* Spidey Host Text in Mobile Menu */}
          <div className="text-gray-800 text-2xl font-semibold mb-6">
            <a href="/">Spidey Host</a>
          </div>

          <div className="mt-4 space-y-4">
            <a href="#/shared-hosting" className="block text-gray-800 font-semibold hover:text-[#6A6FD0]">
              Hosting
            </a>
            <a href="#/domain" className="block text-gray-800 font-semibold hover:text-[#6A6FD0]">
              Domain
            </a>
            <a href="#" className="block text-gray-800 font-semibold hover:text-[#6A6FD0]">
              Help
            </a>
            <a href="https://blogs.spidey.host" className="block text-gray-800 font-semibold hover:text-[#6A6FD0]">
              Blogs
            </a>
          </div>
          <div className="mt-6 flex flex-col space-y-2">
            <a
              href="#"
              className="bg-[#565AC3] text-white text-sm px-3 py-1 w-32 rounded font-semibold hover:bg-[#4E54C8] transform transition-transform duration-200 active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Area
            </a>
            <a
              href="#"
              className="bg-white text-gray-800 text-sm px-3 py-1 w-32 rounded font-semibold hover:text-[#565AC3] transform transition-transform duration-200 active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
