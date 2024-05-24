import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  // Check if the user is logged in
  const isLoggedIn = sessionStorage.getItem("user");

  return (
    <div className="navbar">
      <div className="links">
        <div><Link to="/">Be a Seller</Link></div>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/contact">About Us</Link></div>
        <div><Link to="/contact">Contact Us</Link></div>
        <div className="icons">
          <Link to="/checkout">
            <ShoppingCart size={32} />
          </Link>
          {/* Conditionally render the profile icon */}
          {isLoggedIn ? (
            <Link to="/profile">
              <User size={32} />
            </Link>
          ) : (
            <Link to="/login">
              <User size={32} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
