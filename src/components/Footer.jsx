import React from 'react';
import WhatsAppChat from './WhatsAppChat';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}></div>
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400" aria-label="About us">About us</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Case Studies">Case Studies</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Careers">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Services">Services</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Contact">Contact</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Services</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400" aria-label="Shared Hosting">Shared Hosting</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Cloud Hosting">Cloud Hosting</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="VPS Hosting">VPS Hosting</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="WordPress Hosting">WordPress Hosting</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Dedicated Hosting">Dedicated Hosting</a></li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Solutions</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400" aria-label="Web Development">Web Development</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Case Studies">Case Studies</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Careers">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Services">Services</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Contact">Contact</a></li>
            </ul>
          </div>

          {/* Sitemap Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Sitemap</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400" aria-label="About us">About us</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Case Studies">Case Studies</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Careers">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Services">Services</a></li>
              <li><a href="#" className="hover:text-gray-400" aria-label="Contact">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-4">
          <a href="https://facebook.com/spideyhosting"  className="text-white hover:text-gray-400" aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" className="text-white hover:text-gray-400" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com/spidey.host" target="_blank" className="text-white hover:text-gray-400" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com"target="_blank" className="text-white hover:text-gray-400" aria-label="LinkedIn">
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <WhatsAppChat />
        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} Spidey Host. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
