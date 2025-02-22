import arrow from '../assets/arrow.png';

function Menubar() {
  return (
    <div className="flex items-center justify-between border shadow-md mx-[150px] p-4">
      {/* Left Section: Categories */}
      <div className="flex items-center space-x-2">
        <h2 className="text-sm font-bold">ALL CATEGORIES</h2>
        <img src={arrow} className="w-6 h-6 cursor-pointer" alt="Arrow Icon" />
      </div>

      {/* Center Section: Menu Items */}
      <div className="flex items-center space-x-6">
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
  );
}

export default Menubar;
