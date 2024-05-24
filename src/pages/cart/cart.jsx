import React, { useContext } from "react";
import { ShopContext } from "../../context/shop_context";
import { CartItem } from "./cart_item";
import { useNavigate } from "react-router-dom";
import "./cart.css"; 

export const Cart = () => {
    const { cartItems, getTotalCartAmount, products, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="Cart"> 
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="CartItems"> 
                {products.map((product) => {
                    if (cartItems[product.id] > 0) {
                        return <CartItem key={product.id} data={product} />; 
                    }
                    return null; 
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="Checkout">
                    <p>Subtotal: ${totalAmount.toFixed(2)}</p>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <button
                        onClick={() => {
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
