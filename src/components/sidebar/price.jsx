import React, { useState } from "react";
import "./price.css";

export default function Price({setSelectedPrice, selectedPrice}) {


    const handlePriceRangeChange = (event) => {
        setSelectedPrice(event.target.value);
    }

    return (
        <div className="SidebarPrice">
            <h2>Price</h2>
            <div className="SidebarItems"> 
                <label>
                    <input 
                        type="radio" 
                        value="all" 
                        checked={selectedPrice === "all"} 
                        onChange={handlePriceRangeChange}
                    />
                    All
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="0-100" 
                        checked={selectedPrice === "0-100"} 
                        onChange={handlePriceRangeChange}
                    />
                    $0 - $100
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="100-500" 
                        checked={selectedPrice === "100-500"} 
                        onChange={handlePriceRangeChange}
                    />
                    $100 - $500
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="500-1000" 
                        checked={selectedPrice === "500-1000"} 
                        onChange={handlePriceRangeChange}
                    />
                    $500 - $1000
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="1000-5000" 
                        checked={selectedPrice === "1000-5000"} 
                        onChange={handlePriceRangeChange}
                    />
                    $1000 - $5000
                </label>
            </div>
        </div>
    );
}
