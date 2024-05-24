import React from "react";
import "./sidebar.css"
import Categories from "./categories";
import Price from "./price";

export const Sidebar = ({setSelectedCategory, selectedCategory, setSelectedPrice, selectedPrice}) => {
    return (
        <section className="Sidebar">
            <Categories setSelectedCategory = {setSelectedCategory} selectedCategory={selectedCategory}/>
            <Price  selectedPrice = {selectedPrice} setSelectedPrice = {setSelectedPrice}/>
        </section>
    );
};