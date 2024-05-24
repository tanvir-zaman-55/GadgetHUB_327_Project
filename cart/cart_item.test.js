import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { CartItem } from "./cart_item";
import { ShopContext } from "../../context/shop_context";

const mockContextValues = {
    cartItems: { 1: 2 },
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    updateCartItemCount: jest.fn(),
};

describe("CartItem Component", () => {
    const productData = {
        id: 1,
        productName: "Test Product",
        price: 100,
        productImage: "test_image.jpg",
    };

    const renderComponent = () =>
        render(
            <ShopContext.Provider value={mockContextValues}>
                <CartItem data={productData} />
            </ShopContext.Provider>
        );

    test("renders the cart item correctly", () => {
        renderComponent();
        
        expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
        expect(screen.getByText(/Price: \$100/i)).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /Test Product/i })).toBeInTheDocument();
        expect(screen.getByRole('spinbutton')).toHaveValue(2);
    });

    test("calls removeFromCart when - button is clicked", () => {
        renderComponent();
        
        fireEvent.click(screen.getByText(/-\s*/));
        expect(mockContextValues.removeFromCart).toHaveBeenCalledWith(1);
    });

    test("calls addToCart when + button is clicked", () => {
        renderComponent();
        
        fireEvent.click(screen.getByText(/\+\s*/));
        expect(mockContextValues.addToCart).toHaveBeenCalledWith(1);
    });

    test("updates cart item count when input value changes", () => {
        renderComponent();
        
        fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '3' } });
        expect(mockContextValues.updateCartItemCount).toHaveBeenCalledWith(3, 1);
    });
});
