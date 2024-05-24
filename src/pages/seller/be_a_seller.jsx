import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/shop_context";
import "./be_a_seller.css"; // PascalCase for CSS file name
import { useProducts } from "../../products";
/**
 * Seller component allows users to add new products.
 * @component
 * @returns {JSX.Element} The rendered Seller component.
 */
export const Seller = () => {
    const { addProduct } = useContext(ShopContext);
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [price, setPrice] = useState("");
    const [productImage, setProductImage] = useState(null);

    const products = useProducts();
    /**
     * Handles form submission to add a new product.
     * @param {object} e - The event object.
     */
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
            productCategory,
            productImage: base64Image, // Set productImage as base64 string
        };

        // Call the addProduct function with the new product
        products.push(newProduct);

        // Reset form fields
        setProductName("");
        setProductCategory("");
        setPrice("");
        setProductImage(null);
    };
    /**
     * Handles image file input change event.
     * @param {object} e - The event object.
     */
    const handleImageChange = (e) => {
        setProductImage(e.target.files[0]); // Set productImage to the file object
    };
    /**
     * Converts a file to a base64 string.
     * @param {File} file - The file to convert.
     * @returns {Promise<string>} A promise that resolves to the base64 string.
     */
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <div className="Seller"> {/* PascalCase for CSS class name */}
            <h2>Product Info</h2>
            <form onSubmit={handleSubmit} className="ProductForm"> {/* PascalCase for CSS class name */}
                <div className="FormGroup"> {/* PascalCase for CSS class name */}
                    <label htmlFor="productName"><h5>Product Name:</h5></label>
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div className="FormGroup"> {/* PascalCase for CSS class name */}
                    <label htmlFor="price"><h5>Product Price:</h5></label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="FormGroup"> {/* PascalCase for CSS class name */}
                    <label htmlFor="productName"><h5>Category:</h5></label>
                    <input
                        type="text"
                        id="productCategory"
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        required
                    />
                </div>
                <div className="FormGroup"> {/* PascalCase for CSS class name */}
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
