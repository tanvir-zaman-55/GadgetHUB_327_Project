import React, { useState } from "react";
import "./price.css";

export default function Price() {
    const [selectedPriceRange, setSelectedPriceRange] = useState("all");

    const handlePriceRangeChange = (event) => {
        setSelectedPriceRange(event.target.value);
    }

    return (
        <div className="SidebarPrice">
            <h2>Price</h2>
            <div className="SidebarItems"> 
                <label>
                    <input 
                        type="radio" 
                        value="all" 
                        checked={selectedPriceRange === "all"} 
                        onChange={handlePriceRangeChange}
                    />
                    All
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="0-100" 
                        checked={selectedPriceRange === "0-100"} 
                        onChange={handlePriceRangeChange}
                    />
                    $0 - $100
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="100-500" 
                        checked={selectedPriceRange === "100-500"} 
                        onChange={handlePriceRangeChange}
                    />
                    $100 - $500
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="500-1000" 
                        checked={selectedPriceRange === "500-1000"} 
                        onChange={handlePriceRangeChange}
                    />
                    $500 - $1000
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="1000-5000" 
                        checked={selectedPriceRange === "1000-5000"} 
                        onChange={handlePriceRangeChange}
                    />
                    $1000 - $5000
                </label>
            </div>
        </div>
    );
}
