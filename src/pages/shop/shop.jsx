
import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css"; 
/**
 * Shop component that displays a list of products.
 * @component
 * @returns {JSX.Element} The rendered Shop component.
 */
export const Shop = () => {
    return (
        <div className="Shop"> 
            <div className="ShopTitle"> 
                <h1>Gadget Hub</h1>
            </div>

            <div className="Search"> 
                <input type="search" id="search" placeholder="Search..." />
            </div>

            <div className="Products">
                {PRODUCTS.map((product, idx) => (
                    <Product key={idx} data={product} />
                ))}
            </div>
        </div>
    );
};
