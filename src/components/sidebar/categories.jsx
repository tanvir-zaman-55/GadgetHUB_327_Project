import React, { useState } from "react";
import "./categories.css"; // Updated CSS import
import { PRODUCTS } from "../../products";

export default function Categories() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    return (
        <div className="SidebarCategory"> {/* Updated class name */}
            <h2>Category</h2>
            <div className="SidebarItems"> 
                <label>
                    <input 
                        type="radio" 
                        value="all" 
                        checked={selectedCategory === "all"} 
                        onChange={handleCategoryChange}
                    />
                    All
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="phones" 
                        checked={selectedCategory === "phones"} 
                        onChange={handleCategoryChange}
                    />
                    Phones
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="cameras" 
                        checked={selectedCategory === "cameras"} 
                        onChange={handleCategoryChange}
                    />
                    Cameras
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="accessories" 
                        checked={selectedCategory === "accessories"} 
                        onChange={handleCategoryChange}
                    />
                    Accessories
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="lights" 
                        checked={selectedCategory === "lights"} 
                        onChange={handleCategoryChange}
                    />
                    Lights
                </label>
            </div>
        </div>
    );
}
