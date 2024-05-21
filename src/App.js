import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";


function App() {
  return (
    <div className="App">
     
        <Router>
          <Navbar />
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
