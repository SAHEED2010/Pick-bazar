import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shops from "./pages/shops/Shop";
import Sellers from "./pages/sellers/Seller";
import Offer from "./pages/offer/offer";
import Join from "./pages/join/Join";
import ContactPage from "./pages/contact/ContactPage";
import NavBar from "./components/NavBar";
import SideBtn from "./components/SideBtn";
import ProductDetails from "./pages/product/ProductDetails";
import Pagenotfound from "./pages/notfound/Pagenotfound";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
};

export default App;
