import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart,Heart } from "phosphor-react"; // Import the Heart icon
import "./navbar.css";

export const Navbar = () => {

  return (
    <div className="navbar">
      <div className="links">
        <div><Link to="/">Be a Seller</Link></div>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/contact">About Us</Link></div>
        <div><Link to="/contact">Contact Us</Link></div>
        <div className="icons">
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
          <Link to="/wishlist"> {/* Link to the wishlist page */}
            <Heart size={32} /> {/* Love icon for wishlist */}
          </Link>
      
        </div>
      </div>
    </div>
  );
};
