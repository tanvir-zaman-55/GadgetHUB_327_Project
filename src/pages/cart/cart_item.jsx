
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop_context";

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