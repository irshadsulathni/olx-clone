import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import play from '../assets/play.webp';
import apple from '../assets/apple.webp';
import carTrade from '../assets/carTrade.png';
import olxlogo from '../assets/olx.png';
import carwala from '../assets/carwale.png';
import mobility from '../assets/mobility.png';
import bikewale from '../assets/bikewale.png';

function Footer() {
  return (
    <div className="mt-[80px]">
      {/* Footer Content */}
      <div className="bg-slate-300 p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-6 sm:gap-6 text-center sm:text-left">
        
        {/* Popular Locations */}
        <div>
          <h1 className="text-sm font-bold mb-2">Popular Locations</h1>
          <ul className="text-gray-500 space-y-1">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>

        {/* Trending Locations */}
        <div>
          <h1 className="text-sm font-bold mb-2">Trending Locations</h1>
          <ul className="text-gray-500 space-y-1">
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h1 className="text-sm font-bold mb-2">About Us</h1>
          <ul className="text-gray-500 space-y-1">
            <li>Tech@OLX</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h1 className="text-sm font-bold mb-2">Help</h1>
          <ul className="text-gray-500 space-y-1">
            <li>Sitemap</li>
            <li>OLX</li>
            <li>Blog</li>
            <li>Legal & Privacy</li>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-sm font-bold mb-2">Follow Us</h1>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-600 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-600 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-600 text-2xl"><FaYoutube /></a>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <img className="h-12 sm:h-14 cursor-pointer" src={play} alt="Play Store" />
            <img className="h-10 sm:h-12 mt-2 cursor-pointer" src={apple} alt="Apple Store" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-cyan-950 text-white py-6 flex flex-col items-center text-center">
        
        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <img className="h-10 sm:h-12 md:h-16" src={carTrade} alt="Car Trade logo" />
          <span className="hidden md:block text-4xl md:text-7xl font-thin">|</span>
          <img className="h-10 sm:h-12 md:h-16" src={olxlogo} alt="OLX logo" />
          <img className="h-8 sm:h-10 md:h-12" src={carwala} alt="CarWale logo" />
          <img className="h-10 sm:h-12 md:h-16" src={mobility} alt="Mobility logo" />
          <img className="h-10 sm:h-12 md:h-16" src={bikewale} alt="BikeWale logo" />
        </div>

        {/* Copyright Text */}
        <h1 className="text-sm mt-4">All rights reserved © 2006-2025 OLX</h1>
      </div>
    </div>
  );
}

export default Footer;
