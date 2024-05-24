
import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const filteredProducts = searchInput
        ? PRODUCTS.filter(
              (product) =>
                  product.productName.toLowerCase().includes(searchInput.toLowerCase())
          )
        : PRODUCTS;

    return (
        <div className="Shop">
            <div className="ShopTitle">
                <h1>Gadget Hub</h1>
            </div>

            <div className="Search">
                <input
                    type="search"
                    id="search"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="Products">
                {filteredProducts.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};