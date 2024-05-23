import React, { useContext } from "react";

import { ShopContext } from "../../context/shop_context";
export const Product = (props) => {
  const { id, productName, price, rating, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

 
  const cartItemCount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
        <div className="description">
            <p>
            <b>{productName}</b>
            </p>
            <p> ${price}</p>
            <p className="rating">⭐️ {rating}/5</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
