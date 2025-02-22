import favicon from '../assets/fav.jpg';

type ProductsProp = {
  products: any;
};

function Home(props: ProductsProp) {
  return (
    <div className="border shadow-md mx-[150px] p-5">
      <h1 className="text-neutral-950 text-xl font-semibold">Fresh Recommendations</h1>
      
      {/* Product Grid */}
      <div className="grid mt-4 grid-cols-4 gap-6">
        {props?.products?.map((data: any, index: number) => (
          <div 
            key={index} 
            className="relative border-2 p-4 shadow-lg rounded-lg hover:shadow-xl transition"
          >
            {/* Favorite Icon at Top-Right */}
            <img 
              src={favicon} 
              className="absolute top-2 right-2 h-5 w-5 cursor-pointer"
              alt="Favorite Icon"
            />

            {/* Product Image */}
            <img
              src={data?.image}
              className="cursor-pointer w-40 h-40 mx-auto"
              alt="Product"
            />

            {/* Product Details */}
            <div className="mt-2">
              <h1 className="font-bold text-lg">₹ {data?.price}</h1>
              <h1 className="text-gray-700">{data?.title}</h1>
              <h1 className="text-gray-500">{data?.category}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
