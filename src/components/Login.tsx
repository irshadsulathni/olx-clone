import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc"; 
import { MdPhone, MdClose, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"; 
import { FaGuitar, FaBuilding, FaCar } from "react-icons/fa"; 
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";
import { userContext } from "./Main";
interface ILogin{
    isOpen:boolean;
    onClose:() => void;
}

function Login({ isOpen, onClose }:ILogin) {
    const icons = [
        { 
            icon: <FaGuitar className="text-9xl text-blue-500" />, 
            label: "Guitar", 
            text: "Help us become one of the safest places to buy and sell" 
        },
        { 
            icon: <FaBuilding className="text-9xl text-red-500" />, 
            label: "Home", 
            text: "Express yourself with confidence and security"
        },
        { 
            icon: <FaCar className="text-9xl text-green-500" />, 
            label: "Car", 
            text: "Let the beats of trust and safety lead the way"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextIcon = () => setCurrentIndex((prev) => (prev + 1) % icons.length);
    const prevIcon = () => setCurrentIndex((prev) => (prev - 1 + icons.length) % icons.length);

    const {user,setUser} = useContext(userContext)

    if (!isOpen) return null;
    const googleSignin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log('before set',user);
            setUser(result.user.displayName)
            console.log('after set',user);
            onClose()
        } catch (error) {
            console.error("Google Sign-In Error: ", error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                {/* Close Button with Hover Effect */}
                <button 
                    onClick={onClose} 
                    className="absolute right-4 top-4 p-2 rounded-full transition-all border border-transparent hover:border-blue-300"
                >
                    <MdClose className="text-2xl text-gray-600" />
                </button>

                {/* Carousel Section */}
                <div className="flex items-center justify-between px-6 py-6">
                    <button onClick={prevIcon} className="p-2">
                        <MdArrowBackIos className="text-3xl text-gray-600" />
                    </button>
                    <div className="flex flex-col items-center text-center">
                        {icons[currentIndex].icon}
                        <h3 className="mt-3 text-lg font-semibold text-gray-800">
                            {icons[currentIndex].label}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 max-w-xs">
                            {icons[currentIndex].text}
                        </p>
                    </div>
                    <button onClick={nextIcon} className="p-2">
                        <MdArrowForwardIos className="text-3xl text-gray-600" />
                    </button>
                </div>

                {/* Sign In Options */}
                <div className="flex flex-col gap-5 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Sign In
                    </h2>

                    <button className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-md transition-all hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg">
                        <MdPhone className="text-2xl text-blue-500" />
                        <span className="font-medium text-gray-700">Continue with Phone</span>
                    </button>

                    <button className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-md transition-all hover:bg-gray-100 hover:border-gray-500 hover:shadow-lg">
                        <FcGoogle className="text-2xl" />
                        <span onClick={googleSignin} className="font-medium text-gray-700">Continue with Google</span>
                    </button>

                    {/* OR Login with Email */}
                    <div className="relative my-3">
                        <hr className="border-gray-300" />
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-gray-500 text-sm">
                            OR Login with Email
                        </span>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all"
                    >
                        Login with Email
                    </button>
                </div>

                {/* Footer */}
                <div className="pt-4 text-center">
                    <p className="text-sm text-gray-600">
                        All your personal details are safe with us.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        If you continue, you are accepting <span className="font-semibold">OLX Terms and Conditions</span> and <span className="font-semibold">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
