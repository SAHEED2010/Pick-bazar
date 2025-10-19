import React from "react";
import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import Shops from "./pages/shops/Shop";
import Sellers from "./pages/sellers/Seller";
import Offer from "./pages/offer/offer";
import Join from "./pages/join/Join";
import ContactPage from "./pages/contact/ContactPage";
import NavBar from "./components/NavBar";
import SideBtn from "./components/SideBtn";

const App = () => {
  
  return (
    <>
      <NavBar />
      <SideBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
      


    </>
  );
};

export default App;
