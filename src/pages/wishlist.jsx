import React, { useContext } from "react";
import { ShopContext } from "../context/shop_context";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap stylesheet

/**
 * Wishlist component to display products added to the wishlist.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export const Wishlist = () => {
  // Destructuring wishlist, removeFromWishlist, and products from ShopContext
  const { wishlist, removeFromWishlist, products } = useContext(ShopContext);

  return (
    <div className="container">
      {/* Wishlist title */}
      <h1>Wishlist</h1>
      {/* Conditional rendering based on wishlist length */}
      {wishlist.length === 0 ? (
        // Rendered when wishlist is empty
        <p>Your wishlist is empty.</p>
      ) : (
        // Rendered when wishlist has items
        <div className="row">
          {/* Map through each wishlist item */}
          {wishlist.map((itemId) => {
            // Find product associated with the item ID
            const product = products.find((p) => p.id === itemId);
            return (
              // Render product card
              <div key={itemId} className="col-md-4 mb-4">
                <div className="card">
                  {/* Product image */}
                  <img className="card-img-top" src={product.productImage} alt={product.productName} />
                  <div className="card-body">
                    {/* Product name */}
                    <h5 className="card-title">{product.productName}</h5>
                    {/* Product price */}
                    <p className="card-text">Price: ${product.price}</p>
                    {/* Remove button */}
                    <button className="btn btn-danger" onClick={() => removeFromWishlist(itemId)}>Remove</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
