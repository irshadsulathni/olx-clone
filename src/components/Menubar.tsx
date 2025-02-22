import { useState } from "react";
import arrow from "../assets/arrow.png";

function Menubar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border shadow-md mx-4 md:mx-[150px] p-4">
      <div className="flex items-center justify-between">
        {/* Left Section: Categories */}
        <div className="flex items-center space-x-2">
          <h2 className="text-sm font-bold">ALL CATEGORIES</h2>
          <img src={arrow} className="w-5 h-5 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} alt="Arrow Icon" />
        </div>

        {/* Center Section: Menu Items (Hidden in Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <h1 className="hover:text-teal-400 cursor-pointer text-xs">Cars</h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-xs">Motorcycles</h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-xs">Mobile Phones</h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-xs">
            For Sale: Houses & Apartments
          </h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-xs">Scooter</h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-xs">
            Commercial & Other Vehicles
          </h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-xs">
            For Rent: Houses & Apartments
          </h1>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 bg-white shadow-md p-3 rounded-lg">
          <h1 className="hover:text-teal-400 cursor-pointer text-sm">Cars</h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-sm">Motorcycles</h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-sm">Mobile Phones</h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-sm">
            For Sale: Houses & Apartments
          </h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-sm">Scooter</h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-sm">
            Commercial & Other Vehicles
          </h1>
          <h1 className="hover:text-teal-400 cursor-pointer text-sm">
            For Rent: Houses & Apartments
          </h1>
        </div>
      )}
    </div>
  );
}

export default Menubar;
