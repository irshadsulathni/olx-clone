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
    <div className="mt-[250px] ">
      {/* Footer Content in Grid Format */}
      <div className="bg-slate-300 p-10 grid grid-cols-5 gap-x-10">
        {/* Popular Locations */}
        <div className="ml-20">
          <h1 className="text-sm font-bold mb-2">Popular Locations</h1>
          <ul className="text-gray-500 space-y-1">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>

        {/* Trending Locations */}
        <div className="ml-15">
          <h1 className="text-sm font-bold mb-2">Trending Locations</h1>
          <ul className="text-gray-500 space-y-1">
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>

        {/* About Us */}
        <div className="ml-15">
          <h1 className="text-sm font-bold mb-2">About Us</h1>
          <ul className="text-gray-500 space-y-1">
            <li>Tech@OLX</li>
          </ul>
        </div>

        {/* Help */}
        <div className="ml-15">
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
        <div className="flex flex-col items-center mr-[150px]">
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
          <img className="h-20 cursor-pointer" style={{ width: "200px" }} src={play} alt="play store" />
          <img className="h-[50px] cursor-pointer " style={{ width: "200px" }} src={apple} alt="play store" />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-cyan-950 text-white py-4  h-[200px]">
        <div className=" flex items-center">
            <div className="flex items-center ml-[150px]">
                <img className="h-20 ml-[9vh]" src={carTrade} alt="Car Trade logo" />
                <span className="text-9xl ml-[9vh] font-thin text-white mx-6">|</span> {/* Slim & Big Slash */}
                <img className="h-20 ml-[1vh]" src={olxlogo} alt="" />
                <img className="h-10 ml-[9vh]" src={carwala} alt="" />
                <img className="h-20 ml-[9vh]" src={mobility} alt="" />
                <img className="h-[15vh] ml-[15vh]" src={bikewale} alt="" />
            </div>
        </div>
        <h1 className="ml-[165vh] mt-4">All rights reserved © 2006-2025 OLX</h1>
        <p className="mb-10">Help - Sitemap</p>
      </div>
    </div>
  );
}

export default Footer;
