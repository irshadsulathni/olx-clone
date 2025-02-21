import { useState } from "react";
import olxlogo from '../assets/olx-logo.png';
import lens from '../assets/search.png';
import search from '../assets/search1.png';
import arrow from '../assets/arrow.png';
import favIcon from '../assets/fav.jpg';
import Login from './Login';

function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <>
            <div className="flex items-center ml-2 p-5 space-x-5 bg-slate-100 shadow-md">
                <img src={olxlogo} className="w-11 h-9 cursor-pointer" alt="OLX Logo" />
                <div className="flex items-center border-4 border-blue-400 px-3 py-2 w-64 rounded-md">
                    <img src={lens} className="w-6 h-5" alt="Search Icon" />
                    <input placeholder="Location" className="ml-3 flex-grow outline-none" />
                    <img src={arrow} className="w-6 h-6 cursor-pointer" alt="Arrow" />
                </div>
                <div className="flex items-center border-4 border-black px-3 py-2 w-[75rem] rounded-md">
                    <input placeholder="Find Cars, Bikes, Mobile Phones..." className="flex-grow outline-none" />
                    <img src={search} className="w-7 cursor-pointer" alt="Search Background" />
                </div>
                <div className="flex items-center h-12 p-3 space-x-2">
                    <h1 className="font-semibold">English</h1>
                    <img src={arrow} className="w-8 h-7 cursor-pointer" alt="Arrow Icon" />
                    <img
                        src={favIcon}
                        className="h-9 w-10 cursor-pointer hover:invert-[20%] hover:sepia-[80%] hover:saturate-[200%] hover:hue-rotate-[90deg]"
                        alt="Favorite Icon"
                    />
                </div>
                <div className="flex items-center h-12 cursor-pointer space-x-2">
                    <h1 className="font-bold text-lg underline hover:no-underline" onClick={() => setIsLoginOpen(true)}>Login</h1>
                </div>
                <div
                    className="flex items-center justify-center w-24 h-12 cursor-pointer rounded-full shadow-lg font-semibold text-black bg-white border-4 border-transparent"
                    style={{
                        background: "linear-gradient(white, white) padding-box, conic-gradient(cyan 0deg 90deg, yellow 90deg 225deg, blue 225deg 360deg) border-box",
                        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)"
                    }}
                >
                    <h1 className="text-sm">+ SELL</h1>
                </div>
            </div>
            {isLoginOpen && <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />}
        </>
    );
}

export default Navbar;
