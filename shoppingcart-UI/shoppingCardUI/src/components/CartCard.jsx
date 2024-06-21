import React from "react";

export const CartCard = () => {
  return (
    <div className="bg-gray-400 w-[40rem] max-h-28 m-auto my-5 flex justify-between items-center px-6 py-2">
      <div className="w-24">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <h1 className="font-bold text-center text-gray-800 text-lg">
        Sony Wh1 - Earphone
      </h1>

      <h2>$149</h2>
      <button className="text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5">
        Remove
      </button>
    </div>
  );
};
