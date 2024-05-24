import React, { useContext } from "react";
import { ShopContext } from "../../context/shop_context";
/**
 * Product component to display product details and allow adding to cart.
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.data - The product data.
 * @param {number} props.data.id - The unique identifier for the product.
 * @param {string} props.data.productName - The name of the product.
 * @param {number} props.data.price - The price of the product.
 * @param {string} props.data.productImage - The image URL of the product.
 * @returns {JSX.Element} The rendered Product component.
 */
export const Product = (props) => {
    const { id, productName, price, rating, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];

    return (
        <div className="Product">
            <img src={productImage} alt={productName} />
            <div className="Description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price.toFixed(2)}</p>
                <p className="Rating">⭐️ {rating}/5</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};
