// import React from "react";
// import { PRODUCTS } from "../../products";
// import { Product } from "./product";
// import "./shop.css";

// export const Shop = () => {
//   return (
//     <div className="shop">
//       <div className="shopTitle">
//         <h1>Gadget Hub</h1>
//       </div>

//      <div className="search">
//      <input type="search" id="search" placeholder="Search..."/>
//      </div>
     
//       <div className="products">
//       {PRODUCTS.map((product, idx) => (
//           <Product key={idx} data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css"; 

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
