import React, {useState} from "react";
import "./categories.css"
export default function Categories(){
    const [selectedCategory, setSelectedCategory] = useState("all");
    
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    
    return(
       <div className="sidebarCategory">
           <h2>Category</h2>
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