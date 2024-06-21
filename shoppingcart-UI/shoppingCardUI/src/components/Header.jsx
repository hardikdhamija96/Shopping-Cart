import React from "react";
import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-gray-300 p-4">
      <nav className="w-full flex justify-between px-4 items-center">
        <div>
          <Link>
            <h1 className="font-serif font-semibold uppercase text-2xl text-gray-800">
              Shopping Cart
            </h1>
          </Link>
        </div>
        <div className="flex px-3 text-lg font-semibold text-red-900">
          <NavLink end to="/" className="px-2">
            Home
          </NavLink>
          <NavLink to="/cart" className="px-2">
            Cart
          </NavLink>
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            Cart : <span className="text-xl font-semibold">2</span>
          </h1>
        </div>
      </nav>
    </div>
  );
};
