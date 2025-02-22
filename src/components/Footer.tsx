import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import play from "../assets/play.webp";
import apple from "../assets/apple.webp";
import carTrade from "../assets/carTrade.png";
import olxlogo from "../assets/olx.png";
import carwala from "../assets/carwale.png";
import mobility from "../assets/mobility.png";
import bikewale from "../assets/bikewale.png";

function Footer() {
  return (
    <div className="mt-32">
      {/* Footer Content */}
      <div className="bg-slate-300 p-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center md:text-left">
        {/* Popular Locations */}
        <div>
          <h1 className="text-sm font-bold mb-2">Popular Locations</h1>
          <ul className="text-gray-600 space-y-1">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>

        {/* Trending Locations */}
        <div>
          <h1 className="text-sm font-bold mb-2">Trending Locations</h1>
          <ul className="text-gray-600 space-y-1">
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h1 className="text-sm font-bold mb-2">About Us</h1>
          <ul className="text-gray-600 space-y-1">
            <li>Tech@OLX</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h1 className="text-sm font-bold mb-2">Help</h1>
          <ul className="text-gray-600 space-y-1">
            <li>Sitemap</li>
            <li>OLX</li>
            <li>Blog</li>
            <li>Legal & Privacy</li>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-sm font-bold mb-2">Follow Us</h1>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="text-gray-600 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-600 text-2xl">
              <FaYoutube />
            </a>
          </div>
          <img className="h-10 md:h-12 w-40 cursor-pointer mb-2" src={play} alt="Google Play Store" />
          <img className="h-10 md:h-12 w-40 cursor-pointer" src={apple} alt="Apple Store" />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-cyan-950 text-white py-6">
        <div className="flex flex-wrap justify-center md:justify-around items-center gap-6 px-6">
          <img className="h-12" src={carTrade} alt="Car Trade" />
          <div className="h-[9.25rem] flex items-center text-[6rem] font-thin leading-none">|</div>
          <img className="h-12" src={olxlogo} alt="OLX" />
          <img className="h-10" src={carwala} alt="CarWale" />
          <img className="h-[5.5rem]" src={mobility} alt="Mobility" />
          <img className="h-20" src={bikewale} alt="BikeWale" />
        </div>
        <h1 className="text-center mt-4 text-sm">All rights reserved © 2006-2025 OLX</h1>
        <p className="text-center text-sm mt-1">Help - Sitemap</p>
      </div>
    </div>
  );
}

export default Footer;
