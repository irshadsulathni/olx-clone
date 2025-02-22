import { createContext, useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

// Define userContext with proper types
export const userContext = createContext<{ 
  user: string | null; 
  setUser: (user: string | null) => void;
}>({ user: null, setUser: () => {} });

function Main() {
  const [user, setUser] = useState<string | null>(null);
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("")


  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <Navbar setSearch={setSearch} />
        <Menubar />
        <Home products={product} search={search} />
        
        {/* Load More Button */}
        <div className="flex items-center justify-center mt-24">
          <button className="relative px-4 py-2 rounded-md text-black bg-white border-2 border-black transition-all duration-200 
                            hover:shadow-[inset_0_0_0_2px_black]">
            Load More
          </button>
        </div>

        
        <Footer />
      </userContext.Provider>
    </div>
  );
}

export default Main;
