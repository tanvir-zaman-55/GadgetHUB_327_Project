import React, {useState} from "react";
import "./price.css"
export default function Price(){
    const [selectedCategory, setSelectedCategory] = useState("all");
    
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    
    return(
       <div className="sidebarPrice">
           <h2>Price</h2>
           <div className="sidebarItems"> 
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
                    $0 - $100
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="cameras" 
                        checked={selectedCategory === "cameras"} 
                        onChange={handleCategoryChange}
                        />
                    $100 - $500
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="accessories" 
                        checked={selectedCategory === "accessories"} 
                        onChange={handleCategoryChange}
                        />
                    $500 - $1000
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="lights" 
                        checked={selectedCategory === "lights"} 
                        onChange={handleCategoryChange}
                        />
                    $1000 - $5000
                </label>
           </div>
       </div>
    );
}