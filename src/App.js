import React from "react";
import { Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Home from "./views/Home.tsx";
import Cart from "./views/Cart.tsx";

const _ = require("lodash");

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </CartProvider>
  );
}
