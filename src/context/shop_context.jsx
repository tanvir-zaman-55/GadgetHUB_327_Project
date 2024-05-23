import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";
/**
 * Context for the shop.
 * @typedef {Object} ShopContextType
 * @property {Object} cartItems - Items in the cart with their quantities.
 * @property {function(number):void} addToCart - Function to add item to the cart.
 * @property {function(number, number):void} updateCartItemCount - Function to update item count in the cart.
 * @property {function(number):void} removeFromCart - Function to remove item from the cart.
 * @property {function():number} getTotalCartAmount - Function to get total cart amount.
 * @property {function():void} checkout - Function to checkout and clear the cart.
 * @property {function(Object):void} addProduct - Function to add a new product.
 * @property {Array} products - List of products.
 */
export const ShopContext = createContext(null);
/**
 * ShopContextProvider component to provide shop-related data and functions.
 * @component
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element} The ShopContextProvider component.
 */
export const ShopContextProvider = (props) => {
    // Move getDefaultCart function declaration above its usage
    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < PRODUCTS.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    };

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [products, setProducts] = useState(PRODUCTS); // Add state for products
    /**
     * Calculates the total amount for items in the cart.
     * @returns {number} The total cart amount.
     */
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item)); // Use products state instead of PRODUCTS directly
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };
    /**
     * Adds an item to the cart.
     * @param {number} itemId - The ID of the item to add.
     */
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    /**
     * Removes an item from the cart.
     * @param {number} itemId - The ID of the item to remove.
     */
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    /**
     * Updates the quantity of an item in the cart.
     * @param {number} newAmount - The new quantity of the item.
     * @param {number} itemId - The ID of the item to update.
     */
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };
    /**
     * Clears the cart after checkout.
     */
    const checkout = () => {
        setCartItems(getDefaultCart());
    };
    /**
     * Adds a new product to the products list.
     * @param {Object} newProduct - The new product to add.
     */
    // Function to add new product to the products state
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
        addProduct, // Include addProduct in the context value
        products, // Include products state in the context value
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
