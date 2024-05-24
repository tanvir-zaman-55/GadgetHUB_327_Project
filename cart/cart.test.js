import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Cart } from "./cart";
import { ShopContext } from "../../context/shop_context";
import { BrowserRouter as Router } from "react-router-dom";

// Mock ShopContext values
const mockContextValues = {
    cartItems: { 1: 2, 2: 0 }, // Example cart items
    getTotalCartAmount: jest.fn(() => 200), // Example total amount
    checkout: jest.fn(), // Mocked checkout function
};

describe("Cart Component", () => {
    test("renders cart items correctly", () => {
        render(
            <ShopContext.Provider value={mockContextValues}>
                <Router>
                    <Cart />
                </Router>
            </ShopContext.Provider>
        );

       
    });

    test("displays correct total amount", () => {
        render(
            <ShopContext.Provider value={mockContextValues}>
                <Router>
                    <Cart />
                </Router>
            </ShopContext.Provider>
        );

        
    });

    test("calls checkout function when checkout button is clicked", () => {
        render(
            <ShopContext.Provider value={mockContextValues}>
                <Router>
                    <Cart />
                </Router>
            </ShopContext.Provider>
        );

       
    });
});
