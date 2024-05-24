import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { Sidebar }from "../../components/sidebar/sidebar";
import "./shop.css";

export const Shop = () => {
  return (<>
      <Sidebar />
    <div className="shop">
      <div className="shopTitle">
        <h1>Gadget Hub</h1>
      </div>

     <div className="search">
     <input type="search" id="search" placeholder="Search..."/>
     </div>
     
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    </>
  );
};
