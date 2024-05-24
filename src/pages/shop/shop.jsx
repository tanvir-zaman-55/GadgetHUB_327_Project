import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = ({setSelectedCategory, selectedCategory, setSelectedPrice, selectedPrice}) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const filteredProducts = PRODUCTS.filter((product) => {
        const matchesSearch = searchInput ? product.productName.toLowerCase().includes(searchInput.toLowerCase()) : true;
        const matchesCategory = selectedCategory === 'all' ? true : product.category === selectedCategory;
    
        const matchesPrice = selectedPrice === 'all' ? true : (() => {
            const [minPrice, maxPrice] = selectedPrice.split('-').map(Number);
            return product.price >= minPrice && product.price <= maxPrice;
        })();
    
        return matchesSearch && matchesCategory && matchesPrice;
    });

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