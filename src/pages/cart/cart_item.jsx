
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop_context";
/**
 * CartItem component to display and manage items in the shopping cart.
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.data - The product data.
 * @param {number} props.data.id - The unique identifier for the product.
 * @param {string} props.data.productName - The name of the product.
 * @param {number} props.data.price - The price of the product.
 * @param {string} props.data.productImage - The image URL of the product.
 * @returns {JSX.Element} The rendered CartItem component.
 */
export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className="CartItem"> 
            <img src={productImage} alt={productName} />
            <div className="Description"> 
                <p>
                    <b>{productName}</b>
                </p>
                <p>Price: ${price}</p>
                <div className="CountHandler"> 
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        type="number" // Ensure input type is number for quantity
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};
