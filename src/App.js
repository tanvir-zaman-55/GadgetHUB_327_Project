import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Checkout } from "./pages/checkout";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop_context";
import { Wishlist } from "./pages/wishlist";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
