import React, { useState } from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/hero";
import BagCategoryList from "./components/BagCategoryList";
import ProductGrid from "./components/ProductGrid";
import SideBtn from "./components/SideBtn";

const Home = () => {
  const [cart, setCart] = useState({
    items: [],
    totalAmount: 0,
  });

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.items.find(
        (item) => item.id === product.id
      );

      let updatedItems;

      if (existingItem) {
        // If exists, increase its quantity by 1
        updatedItems = prevCart.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If not in cart, add new item with quantity 1
        updatedItems = [...prevCart.items, { ...product, quantity: 1 }];

      }

      // Calculate total
      const newTotal = updatedItems.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      );

   
      

      return {
        items: updatedItems,
        totalAmount: newTotal,
        
      };
      
    });
  };

  // decrease quantity by 1 and remove if quantity becomes 0
const handleDecrease = (productId) => {
  setCart((prevCart) => {
    const updated = prevCart.items
      .map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0);

    const newTotal = updated.reduce((s, i) => s + Number(i.price) * i.quantity, 0);
    return { items: updated, totalAmount: newTotal };
  });
};

// remove item entirely
const handleRemove = (productId) => {
  setCart((prevCart) => {
    const updated = prevCart.items.filter(item => item.id !== productId);
    const newTotal = updated.reduce((s, i) => s + Number(i.price) * i.quantity, 0);
    return { items: updated, totalAmount: newTotal };
  });
};


  return (
    <div className="min-h-screen bg-gray-100 h-7">
      <div className="bg-gray-50">
        {/* Other components like Hero, Footer, etc. can be added here */}
        <Hero />
        <div className="bg-white flex justify-between scrollbar-hide overflow-x-auto">
          <img
            className="m-3 w-120 h-50.54"
            src="src/assets/imgi_61_offer-4.png"
          />
          <img
            className="m-3 w-120 h-50.54"
            src="src/assets/imgi_63_offer-3.png"
          />
          <img
            className="m-3 w-120 h-50.54"
            src="src/assets/imgi_59_offer-5 (1).png"
          />
          <img
            className="m-3 w-120 h-50.54"
            src="src/assets/imgi_65_offer-2.png"
          />
          <img
            className="m-3 w-120 h-50.54"
            src="src/assets/imgi_67_offer-1.png"
          />
        </div>

        <div className="bg-white flex h-[500px] mt-4">
          <div className="m-3 w-70">
            <BagCategoryList />
          </div>

          <div className="w-full overflow-y-auto scrollbar-hide bg-gray-100">
            {/* ✅ Pass handleAddToCart function to ProductGrid */}
            <ProductGrid onAddToCart={handleAddToCart} cart={cart} />

            {/* ✅ Floating side cart button */}
            <SideBtn
              itemCount={cart.items.length}
              totalAmount={cart.totalAmount}
              cart={cart}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
