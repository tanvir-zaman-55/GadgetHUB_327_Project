import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < PRODUCTS.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    };

    const getDefaultWishlist = () => {
        return [];
    };

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [wishlist, setWishlist] = useState(getDefaultWishlist()); // State for wishlist

    const [products, setProducts] = useState(PRODUCTS);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const addToWishlist = (itemId) => {
        setWishlist((prev) => [...prev, itemId]);
    };

    const removeFromWishlist = (itemId) => {
        setWishlist((prev) => prev.filter((item) => item !== itemId));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const addProduct = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
        addProduct,
        products,
        wishlist, // Include wishlist state
        addToWishlist, // Add function to add to wishlist
        removeFromWishlist, // Add function to remove from wishlist
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
