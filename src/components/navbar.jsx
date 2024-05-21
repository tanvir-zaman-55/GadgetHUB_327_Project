import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <div> <Link to="/"> Be a Seller </Link></div>
        <div><Link to="/"> Home </Link></div>
        <div>    <Link to="/contact"> About Us </Link> </div>
        <div>
          <Link to="/contact">Contact Us </Link>
        </div> 
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
     
    </div>
  );
};
