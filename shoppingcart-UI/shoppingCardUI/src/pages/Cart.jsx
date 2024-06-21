import React from "react";
import { CartComponentList, Header } from "../components";

export const Cart = () => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold text-center pt-10">Cart Items : 2</h1>
      <CartComponentList />
    </div>
  );
};
