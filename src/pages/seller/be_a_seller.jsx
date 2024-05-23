
import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/shop_context";
import "./be_a_seller.css";

export const Seller = () => {
  const { addProduct } = useContext(ShopContext);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productImage) {
      alert("Please select an image");
      return;
    }

    const base64Image = await convertToBase64(productImage);

    // Create a new product object
    const newProduct = {
      id: Date.now(), // Generate a unique id
      productName,
      price: parseFloat(price),
      productImage: base64Image, // Set productImage as base64 string
    };

    // Call the addProduct function with the new product
    addProduct(newProduct);

    // Reset form fields
    setProductName("");
    setPrice("");
    setProductImage(null);
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]); // Set productImage to the file object
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="Seller"> {/* Corrected classname */}
      <h2>Product Info</h2>
      <form onSubmit={handleSubmit} className="ProductForm">
        <div className="FormGroup">
          <label htmlFor="productName"><h5>Product Name:</h5></label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="FormGroup">
          <label htmlFor="price"><h5>Product Price:</h5></label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="FormGroup">
          <label htmlFor="productImage"><h5>Product Image:</h5></label>
          <input
            type="file"
            id="productImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
};