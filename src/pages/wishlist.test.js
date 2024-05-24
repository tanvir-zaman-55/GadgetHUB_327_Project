import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the matchers from jest-dom
import { ShopContext } from '../context/shop_context'; // Import ShopContext
import { Wishlist } from './wishlist'; 

// Mocked context data
const mockContextData = {
  wishlist: [1, 2, 3], // Example wishlist item IDs
  removeFromWishlist: jest.fn(), // Mock remove function
  products: [
    { id: 1, productName: 'Product 1', productImage: 'image1.jpg', price: 10 },
    { id: 2, productName: 'Product 2', productImage: 'image2.jpg', price: 20 },
    { id: 3, productName: 'Product 3', productImage: 'image3.jpg', price: 30 }
  ]
};

describe('Wishlist Component', () => {
  test('renders wishlist items', () => {
    render(
      <ShopContext.Provider value={mockContextData}> {/* Use ShopContext.Provider */}
        <Wishlist />
      </ShopContext.Provider>
    );

    // Check if the wishlist title is rendered
    expect(screen.getByText('Wishlist')).toBeInTheDocument();

    // Check if each product in the wishlist is rendered
    mockContextData.products.forEach(product => {
      expect(screen.getByText(product.productName)).toBeInTheDocument();
      expect(screen.getByText(`Price: $${product.price}`)).toBeInTheDocument();
    });

    // Check if remove buttons are rendered for each wishlist item
    const removeButtons = screen.getAllByText('Remove');
    expect(removeButtons).toHaveLength(mockContextData.wishlist.length);
  });

  test('calls removeFromWishlist function when remove button is clicked', () => {
    render(
      <ShopContext.Provider value={mockContextData}> {/* Use ShopContext.Provider */}
        <Wishlist />
      </ShopContext.Provider>
    );

    // Simulate click on remove button for each wishlist item
    const removeButtons = screen.getAllByText('Remove');
    removeButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(mockContextData.removeFromWishlist).toHaveBeenCalledWith(mockContextData.wishlist[index]);
    });
  });

  test('renders empty wishlist message when wishlist is empty', () => {
    const emptyWishlistData = { ...mockContextData, wishlist: [] }; // Empty wishlist data
    render(
      <ShopContext.Provider value={emptyWishlistData}> {/* Use ShopContext.Provider */}
        <Wishlist />
      </ShopContext.Provider>
    );

    // Check if the empty wishlist message is rendered
    expect(screen.getByText('Your wishlist is empty.')).toBeInTheDocument();
  });
});

