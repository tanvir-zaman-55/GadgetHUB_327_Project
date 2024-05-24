import React from "react";
import "./sidebar.css"
import Categories from "./categories";
import Price from "./price";

export const Sidebar = () => {
    return (
        <section className="Sidebar">
            <Categories/>
            <Price/>
        </section>
    );
};