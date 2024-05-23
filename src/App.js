import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { ShopContextProvider } from "./context/shop_context";
import { Seller } from "./pages/seller/be_a_seller"


function App() {
  return (
    <div className="App">
     <ShopContextProvider>
        <Router>
          <Navbar />
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Seller" element={<Seller />} /> 
          </Routes>
        </Router>
        </ShopContextProvider>
      
    </div>
  );
}

export default App;
