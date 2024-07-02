import React from "react";
import { CartCard } from "./CartCard";

const cartProductList = [
  {
    id: 1002,
    name: "Apple AirPods Pro - Earphone",
    price: 249,
    src: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 1003,
    name: "Bose QuietComfort 35 II - Headphones",
    price: 299,
    src: "https://m.media-amazon.com/images/I/71W7VDwM7IL._AC_UF1000,1000_QL80_.jpg"
  }
];

export const CartComponentList = () => {
  return (
    <div>
      {
        cartProductList.map(item=>(
          <CartCard key={item.id} product={item}/>
        ))
      }
    </div>
  );
};
