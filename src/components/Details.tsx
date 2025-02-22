import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import Menubar from "./Menubar";
import { FaHeart, FaShareAlt, FaUserCircle } from "react-icons/fa"; 
import { useState } from "react";

// Define type for product data
interface ProductData {
  image: string;
  title: string;
  category: string;
  price: number;
  description: string;
}

function Details() {
  const location = useLocation();
  const { data }: { data?: ProductData } = location.state || {}; 

  // Random seller names
  const sellerNames = ["Ameen", "Fayis", "Abdulla", "Irshad", "Afsal"];
  const randomSeller = sellerNames[Math.floor(Math.random() * sellerNames.length)];
  const [search, setSearch] = useState('')
  console.log(search);
  
  return (
    <>
      <Navbar setSearch={setSearch} />
      <Menubar />
      
      <div className="flex flex-col items-center p-4 md:p-8">

        {/* Image Section */}
        <div className="w-full md:w-[70%] bg-slate-200 relative flex justify-center rounded-lg shadow-md p-4">
          {data?.image && (
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-auto max-h-[500px] object-contain rounded-lg"
            />
          )}

          {/* Icons on Image */}
          <div className="absolute top-3 right-3 flex gap-3">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <FaHeart className="text-red-500 text-xl" />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <FaShareAlt className="text-blue-500 text-xl" />
            </button>
          </div>
        </div>

        {/* Product Details & Offer Section */}
        <div className="w-full flex flex-col md:flex-row gap-x-8 mt-6 max-w-6xl">
          
          {/* Product Details (Left - 60%) */}
          <div className="w-full md:w-[60%] p-6 border border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {data?.title || "No Title Available"}
            </h1>
            <p className="text-lg text-gray-600 mt-2">Category: {data?.category || "N/A"}</p>
            <p className="text-xl font-bold text-red-500 mt-2">
              Price: ₹ {data?.price ? Math.floor(data.price * 80) : "N/A"}
            </p>
            <h3 className="mt-4 text-lg leading-relaxed text-gray-700 italic bg-gray-100 p-4 rounded-lg shadow-md border-l-4 border-green-500" >The quick brown fox jumps over the lazy dog. Beneath the twilight sky, whispers of the wind carried echoes of forgotten tales. In a distant land, a hidden library held secrets long lost to time. Stars shimmered above as the clock struck midnight, revealing paths unknown to wandering souls. Somewhere in the heart of the city, a neon sign flickered, casting an eerie glow on the empty streets. A mysterious letter arrived at the doorstep, sealed with crimson wax, bearing an insignia of an ancient orde</h3>
          </div>

          {/* Make an Offer (Right - 40%) */}
          <div className="w-full md:w-[40%] p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-100 flex flex-col">
            
            {/* Offer Price */}
            <p className="text-4xl font-bold text-green-900">
              ₹ {data?.price ? Math.floor(Math.random() * (data.price * 80)) : "N/A"}
            </p>
            <button className="w-full mt-3 bg-green-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
              Make an Offer
            </button>

            {/* Seller Profile */}
            <div className="flex items-center gap-3 mt-6 border-t border-gray-300 pt-4">
              <FaUserCircle className="text-gray-700 text-4xl" />
              <p className="text-lg font-medium text-gray-700">{randomSeller}</p>
            </div>

            {/* Chat Button */}
            <button className="w-full mt-3 bg-white text-green-900 px-4 py-2 rounded-lg border-2 border-green-900 text-lg font-semibold transition duration-100 hover:border-4">
              Chat with Seller
            </button>

            {/* Google Maps API Error Message */}
            <div className="mt-4 bg-black text-white font-mono p-3 rounded-lg border border-gray-400">
              Google Maps Platform rejected your request. This IP, site or mobile application is not authorized to use this API key. Request received from IP address 202.164.149.48, with referer: https://www.olx.in/en-in/item/cars-c84-used-bmw-x1-in-kannur-mangaluru-iid-1798643312
            </div>
          </div>
        </div>

        {/* Description Section (Same width as Offer div) */}
        <div className="w-full md:w-[38%] mt-6 mr-[45vh] bg-slate-200 relative flex justify-center rounded-lg shadow-md p-4">
          <ul className="list-disc text-lg list-inside text-gray-700 mt-3">
            {data?.description
              ? data.description.split('.').map((point, index) =>
                  point.trim() ? <li key={index}>{point.trim()}</li> : null
                )
              : <p className="text-gray-500">No description available.</p>}
          </ul>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Details;
