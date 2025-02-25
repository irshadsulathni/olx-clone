import favicon from "../assets/fav.jpg";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  image: string;
  price: number;
  title: string;
  category: string;
};

type ProductsProp = {
  products?: Product[];
  search: string;
};

function Home({ products = [], search }: ProductsProp) {
  return (
    <div className="border shadow-md mx-4 sm:mx-10 md:mx-20 lg:mx-[150px] p-4 sm:p-6">
      <h1 className="text-neutral-950 text-lg sm:text-xl font-semibold">
        Fresh Recommendations
      </h1>

      {/* Product Grid */}
      <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products
          .filter((data) => data?.title?.toLowerCase().includes(search.toLowerCase())) // Fix search filtering
          .map((data, index) => (
            <Link to="details" state={{ data }} key={index}>
              <div className="relative border p-4 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col h-full">
                {/* Favorite Icon at Top-Right */}
                <img
                  src={favicon}
                  className="absolute top-2 right-2 h-5 w-5 cursor-pointer"
                  alt="Favorite Icon"
                />

                {/* Product Image */}
                <img
                  src={data.image}
                  className="cursor-pointer w-full h-40 object-cover rounded-md mx-auto"
                  alt="Product"
                />

                {/* Product Details */}
                <div className="mt-2 flex flex-col justify-between flex-grow">
                  <h1 className="font-bold text-base sm:text-lg">
                    ₹ {Math.floor(data.price * 80)}
                  </h1>
                  <h1 className="text-gray-700 text-sm sm:text-base">{data.title}</h1>
                  <h1 className="text-gray-500 text-xs sm:text-sm">{data.category}</h1>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
