import React from "react";
import { HomeCard } from "./HomeCard";

const productList = [
  {
    id: 1001,
    name: "Sony WH-1000XM4 - Earphone",
    price: 149,
    src: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=2249&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
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
  },
  {
    id: 1004,
    name: "Samsung Galaxy Buds Pro - Earphone",
    price: 199,
    src: "https://img.global.news.samsung.com/in/wp-content/uploads/2021/01/Galaxy-Buds-Pro-PR_main1.jpg"
  },
  {
    id: 1005,
    name: "JBL Live 650BTNC - Headphones",
    price: 129,
    src: "https://cdn.mos.cms.futurecdn.net/RkjDvYcgNFe5hPZ4BmYdh4.jpg"
  },
  {
    id: 1006,
    name: "Sennheiser Momentum True Wireless 2 - Earphone",
    price: 279,
    src: "https://m.media-amazon.com/images/I/71512ak6TsL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 1007,
    name: "Beats Solo Pro - Headphones",
    price: 229,
    src: "https://cdn.mos.cms.futurecdn.net/vzp29Jkb8U8NrgGAFPnQw8.jpg"
  },
  {
    id: 1008,
    name: "Anker Soundcore Liberty Air 2 Pro - Earphone",
    price: 129,
    src: "https://cdn.mos.cms.futurecdn.net/UXEXrLF7Axa6wwKfkVSzBf-1200-80.jpg"
  },
  {
    id: 1009,
    name: "Sony WF-SP800N - Earphone",
    price: 169,
    src: "https://rukminim2.flixcart.com/image/850/1000/kbpeoi80/headphone/c/n/4/wf-sp800n-sony-original-imaftyfrghbmdymv.jpeg?q=90&crop=false"
  },
  {
    id: 1010,
    name: "Jabra Elite 85h - Headphones",
    price: 249,
    src: "https://i.rtings.com/assets/products/rbMiWITB/sony-wh-xb910n-wireless/design-medium.jpg?format=auto"
  }
];


export const HomeComponentList = () => {
  

  return (
    <div className="flex flex-wrap justify-center">
      {
        productList.map((item)=>(<HomeCard key={item.id} product={item} />))
      }
    </div>
  );
};
