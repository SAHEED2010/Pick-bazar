import React from "react";
import Products from "../../mockdata/Product";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

/**
 * Renders a grid of products.
 * Each product is displayed as a ProductCard.
 *
 * @param {object} props - The component props.
 * @param {Function} props.onAddToCart - Function to handle adding a product to the cart.
 * @param {object} props.cart - The current state of the shopping cart.
 * @returns {JSX.Element} The ProductGrid component.
 */
const ProductGrid = ({ onAddToCart, cart }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Products.map((item) => {
          const cartItem = cart.items.find((i) => i.id === item.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <ProductCard
              key={item.id}
              item={item}
              quantity={quantity}
              onAddToCart={onAddToCart}
              onCardClick={(productId) => navigate(`/product/${productId}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
