import React from "react";

export const HomeCard = ({product}) => {

  

  return (
    <div className="bg-gray-400 w-72 pb-7 m-5 rounded-lg">
      <div className="">
        <img
          className="rounded-t-lg"
          src={product.src}
          alt=""
        />
      </div>
      <div className="p-2">
        <h1 className="font-bold text-center text-gray-800 text-lg">
          {product.name}
        </h1>
      </div>
      <div className="flex justify-between px-2 items-center">
        <h2>${product.price}</h2>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
