import React from "react";

import NavigationBar from "../components/NavigationBar";
import CartPage from "../components/CartPage";

import { CartProvider } from "../context/CartContext";

const Cart = () => {
  return (
    <>
      <div className="bg-black h-auto">
        <NavigationBar />
        <CartPage />
      </div>
    </>
  );
};

export default Cart;
