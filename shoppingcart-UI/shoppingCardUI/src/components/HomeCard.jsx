import React from "react";

export const HomeCard = () => {
  return (
    <div className="bg-gray-400 w-72 pb-7 m-5 rounded-lg">
      <div className="">
        <img
          className="rounded-t-lg"
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="p-2">
        <h1 className="font-bold text-center text-gray-800 text-lg">
          Sony Wh1 - Earphone
        </h1>
      </div>
      <div className="flex justify-between px-2 items-center">
        <h2>$149</h2>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
