import React, { useContext } from "react";


export const Product = (props) => {
  const { id, productName, price, rating, productImage } = props.data;
 

  const cartItemCount = 0;

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
      <button className="addToCartBttn" >
        Add To Cart 
      </button>
    </div>
  );
};
