
import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";
import product5 from "./assets/products/5.png";
import product6 from "./assets/products/6.png";
import product7 from "./assets/products/7.png";
import product8 from "./assets/products/8.png";
import product9 from "./assets/products/9.png";
import product10 from "./assets/products/10.png";
import product11 from "./assets/products/11.png";
import { createContext, useContext } from "react";

export const PRODUCTS = [
    {
        id: 1,
        productName: "IPhone",
        price: 999.0,
        rating: 0,
        category: "phone",
        productImage: product1,
    },
    {
        id: 2,
        productName: "Macbook Pro 2022 (M1)",
        price: 1999.0,
        rating: 0,
        category: "computer",
        productImage: product2,
    },
    {
        id: 3,
        productName: "Cannon M50 Camera",
        price: 699.0,
        rating: 0,
        category: "camera",
        productImage: product3,
    },
    {
        id: 4,
        productName: "Apple Airpods",
        price: 250.0,
        rating: 0,
        category: "accessories",
        productImage: product4,
    },
    {
        id: 5,
        productName: "PlayStation 4",
        price: 329.99,
        rating: 0,
        category: "console",
        productImage: product5,
    },
    {
        id: 6, 
        productName: "Syncwire USB Charger",
        price: 68.0,
        rating: 0,
        category: "accessories",
        productImage: product6,
    },
    {
        id: 7,
        productName: "Sonox Headphones",
        price: 120.0,
        rating: 0,
        category: "accessories",
        productImage: product7,
    },
    {
        id: 8,
        productName: "Dji Spark Drown",
        price: 279.99,
        rating: 0,
        category: "drone",
        productImage: product8,
    },
    {
        id: 9,
        productName: "Amazon Echo Speaker", 
        price: 199.0,
        rating: 0,
        category: "accessories",
        productImage: product9,
    },
    {
        id: 10,
        productName: "Samsung S21",
        price: 799.99,
        rating: 0,
        category: "phone",
        productImage: product10,
    },
    {
        id: 11,
        productName: "Nintendo Switch",
        price: 399.99,
        rating: 0,
        category: "console",
        productImage: product11,
    },
];

const ProductContext = createContext(PRODUCTS);

export const ProductProvider = ({ children }) => {
    return (
        <ProductContext.Provider value={PRODUCTS}>
            {children}
        </ProductContext.Provider>
    );
};

// Custom hook to use the product context
export const useProducts = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
};
