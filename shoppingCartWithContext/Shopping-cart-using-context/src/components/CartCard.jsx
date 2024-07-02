import React from "react";

export const CartCard = ({product}) => {
  return (
    <div className="bg-gray-400 w-[40rem] max-h-28 m-auto my-5 flex justify-between items-center px-6 py-2">
      <div className="w-24">
        <img
          className="rounded-lg"
          src={product.src}
          alt=""
        />
      </div>

      <h1 className="font-bold text-center text-gray-800 text-lg">
        {product.name}
      </h1>

      <h2>${product.price}</h2>
      <button className="text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5">
        Remove
      </button>
    </div>
  );
};