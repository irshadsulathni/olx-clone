import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import play from '../assets/play.webp'
import apple from  '../assets/apple.webp'
import carTrade from '../assets/carTrade.png'
import olxlogo from '../assets/olx.png'
import carwala from '../assets/carwale.png'
import mobility from '../assets/mobility.png'
import bikewale from '../assets/bikewale.png'

function Footer() {
  return (
    <div className="mt-[120px]">
      {/* Footer Content in Grid Format */}
      <div className="bg-slate-300 p-10 grid grid-cols-5 gap-x-10">
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
        <div className="flex flex-col items-center">
          <h1 className="text-sm font-bold mb-2">Follow Us</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-600 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 text-2xl">
              <FaYoutube />
            </a>
          </div>
          <img className="h-20 cursor-pointer mt-4" style={{ width: "200px" }} src={play} alt="play store" />
          <img className="h-[50px] cursor-pointer mt-2" style={{ width: "200px" }} src={apple} alt="apple store" />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-cyan-950 text-white py-6 flex flex-col items-center">
        {/* Logos Section */}
        <div className="flex items-center space-x-8">
          <img className="h-16" src={carTrade} alt="Car Trade logo" />
          <span className="text-7xl font-thin text-white">|</span>
          <img className="h-16" src={olxlogo} alt="OLX logo" />
          <img className="h-12" src={carwala} alt="CarWale logo" />
          <img className="h-16" src={mobility} alt="Mobility logo" />
          <img className="h-16" src={bikewale} alt="BikeWale logo" />
        </div>

        {/* Copyright Text */}
        <h1 className="text-center text-sm mt-4">All rights reserved © 2006-2025 OLX</h1>
      </div>
    </div>
  );
}

export default Footer;
