import React from "react";
import { CartComponentList, Header } from "../components";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const {total}=useCart();
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold text-center pt-10">Cart Items : 2 | ${total} </h1>
      <CartComponentList />
    </div>
  );
};
