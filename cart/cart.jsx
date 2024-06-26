
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop_context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart_item";
import { useNavigate } from "react-router-dom";

import "./cart.css"; 
/**
 * Cart component that displays items in the shopping cart and handles checkout.
 * @component
 * @returns {JSX.Element} The rendered Cart component.
 */
export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="Cart"> 
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="CartItems"> 
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />; 
                    }
                    return null; 
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="Checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <button
                        onClick={() => {
                            checkout();
                            navigate("/checkout");
                        }}
                    >
                        Checkout
                    </button>
                </div>
            ) : (
                <h1>Your Shopping Cart is Empty</h1>
            )}
        </div>
    );
};
