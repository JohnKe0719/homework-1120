import React from "react";
import NavigationBar from "../components/NavigationBar";
import ProductCarousel from "../components/ProductCarousel";
import ProductDetails from "../components/ProductDetails";
import ProductDescription from "../components/ProductDescription";
import BottomButtonGroup from "../components/BottomButtonGroup";

import { CartProvider } from "../context/CartContext";

const Home = () => {
  return (
    <>
      <div className="bg-black h-auto">
        <NavigationBar />
        <ProductCarousel />
        <ProductDetails />
        <ProductDescription />
        <BottomButtonGroup />
      </div>
    </>
  );
};

export default Home;
