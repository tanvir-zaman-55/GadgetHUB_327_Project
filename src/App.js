import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { ShopContextProvider } from "./context/shop_context";
import { Seller } from "./pages/seller/be_a_seller";
import { Cart } from "./pages/cart/cart";
import { ProductProvider } from "./products";
/**
 * Main component representing the entire application.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <ProductProvider>
                        <Sidebar />
                        <Routes>
                            <Route path="/" element={<Shop />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/seller" element={<Seller />} /> 
                        </Routes>
                    </ProductProvider>
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;
