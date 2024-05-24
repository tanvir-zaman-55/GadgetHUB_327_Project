import React, { useContext } from "react";
import { ShopContext } from "../../context/shop_context";
import { FaHeart } from 'react-icons/fa'; // Import the heart icon from react-icons

export const Product = (props) => {
  const { id, productName, price, rating, productImage } = props.data;
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useContext(ShopContext); // Get addToWishlist and removeFromWishlist functions from context
  const isInWishlist = wishlist.includes(id); // Check if the product is already in the wishlist

  const handleAddToCart = () => {
    addToCart(id);
  };

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(id); // If already in wishlist, remove it
    } else {
      addToWishlist(id); // If not in wishlist, add it
    }
  };

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <p className="rating">⭐️ {rating}/5</p>
      </div>
      <div>
        <button className="addToCartBttn" onClick={handleAddToCart}>
          Add To Cart
        </button>
        <button className="wishlistButton" onClick={handleToggleWishlist}>
          <FaHeart color={isInWishlist ? 'red' : 'gray'} />
        </button>
      </div>
    </div>
  );
};
