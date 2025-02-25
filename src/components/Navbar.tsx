import { useContext, useState } from "react";
import olxlogo from '../assets/olx-logo.png';
import lens from '../assets/search.png';
import search from '../assets/search1.png';
import arrow from '../assets/arrow.png';
import favIcon from '../assets/fav.jpg';
import Login from './Login';
import { userContext } from "./Main";

type searchProp = {
    setSearch:(value:string) => void;
}

function Navbar(props:searchProp) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, setUser } = useContext(userContext);

    return (
        <>
            <div className="flex items-center justify-between p-5 bg-slate-100 shadow-md">
                {/* Left Section: Logo */}
                <img src={olxlogo} className="w-11 h-9 cursor-pointer" alt="OLX Logo" />

                {/* Location Input (Hidden on Small Screens) */}
                <div className="hidden md:flex items-center border-4 border-blue-400 px-3 py-2 w-64 rounded-md">
                    <img src={lens} className="w-6 h-5" alt="Search Icon" />
                    <input placeholder="Location" className="ml-3 flex-grow outline-none" />
                    <img src={arrow} className="w-6 h-6 cursor-pointer" alt="Arrow" />
                </div>

                {/* Search Input */}
                <div className="hidden md:flex items-center border-4 border-black px-3 py-2 w-[40rem] rounded-md">
                    <input onChange={(e)=> props?.setSearch(e.target.value) } placeholder="Find Cars, Bikes, Mobile Phones..." className="flex-grow outline-none" />
                    <img src={search} className="w-7 cursor-pointer" alt="Search Background" />
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden flex items-center space-x-2">
                    {/* Show user name if logged in */}
                    {user && (
                        <span className="text-lg mr-5 font-semibold text-black">Hello {user}</span>
                    )}
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <svg className="w-8 h-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-x-6">
                    {/* Language & Favorite Icon */}
                    <div className="flex items-center space-x-2">
                        <h1 className="font-semibold">English</h1>
                        <img src={arrow} className="w-6 h-5 cursor-pointer" alt="Arrow Icon" />
                    </div>
                    <img src={favIcon} className="h-9 w-10 cursor-pointer hover:invert-[20%] hover:sepia-[80%] hover:saturate-[200%] hover:hue-rotate-[90deg]" alt="Favorite Icon" />
                    
                    {/* Login / Logout */}
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <h1 className="font-bold text-lg underline cursor-pointer hover:no-underline">
                                {user}
                            </h1>
                            <button 
                                onClick={() => setUser(null)}
                                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-md hover:from-red-500 hover:to-red-700 hover:text-white transition-all duration-300 transform hover:scale-105"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <h1
                            className="font-bold text-lg underline cursor-pointer hover:no-underline"
                            onClick={() => setIsLoginOpen(true)}
                        >
                            Login
                        </h1>
                    )}
                </div>

                {/* Sell Button */}
                <div className="hidden md:flex items-center justify-center w-24 h-12 cursor-pointer rounded-full shadow-lg font-semibold text-black bg-white border-4 border-transparent"
                    style={{
                        background: "linear-gradient(white, white) padding-box, conic-gradient(cyan 0deg 90deg, yellow 90deg 225deg, blue 225deg 360deg) border-box",
                        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)"
                    }}
                >
                    <h1 className="text-sm">+ SELL</h1>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-white shadow-lg p-5 space-y-4">
                    <div className="flex items-center space-x-2">
                        <h1 className="font-semibold">English</h1>
                        <img src={arrow} className="w-6 h-5 cursor-pointer" alt="Arrow Icon" />
                    </div>
                    <img src={favIcon} className="h-9 w-10 cursor-pointer hover:invert-[20%] hover:sepia-[80%] hover:saturate-[200%] hover:hue-rotate-[90deg]" alt="Favorite Icon" />

                    {user ? (
                        <div className="flex flex-col items-center space-y-2">
                            <h1 className="font-bold text-lg">{user}</h1>
                            <button 
                                onClick={() => setUser(null)}
                                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-md hover:from-red-500 hover:to-red-700 hover:text-white transition-all duration-300 transform hover:scale-105"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <h1 className="font-bold text-lg underline cursor-pointer hover:no-underline" onClick={() => setIsLoginOpen(true)}>
                            Login
                        </h1>
                    )}

                    {/* Sell Button */}
                    <div className="flex items-center justify-center w-24 h-12 cursor-pointer rounded-full shadow-lg font-semibold text-black bg-white border-4 border-transparent"
                        style={{
                            background: "linear-gradient(white, white) padding-box, conic-gradient(cyan 0deg 90deg, yellow 90deg 225deg, blue 225deg 360deg) border-box",
                            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)"
                        }}
                    >
                        <h1 className="text-sm">+ SELL</h1>
                    </div>
                </div>
            )}

            {/* Login Modal */}
            {isLoginOpen && <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />}
        </>
    );
}

export default Navbar;
