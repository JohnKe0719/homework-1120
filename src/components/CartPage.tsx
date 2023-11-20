import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useCart();
  console.log("cart", cart);

  if (cart.length === 0) {
    return (
      <div className="flex w-screen items-center text-white text-lg">
        購物車尚未擁有東西
      </div>
    );
  }

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index} className="flex flex-col text-white text-xs">
          <p>{`productName：${item.name}`}</p>
          <p>{`productImage：${item.image}`}</p>
          <p>{`productPrice：${item.price}`}</p>
          <p>{`productColor：${item.color}`}</p>
          <p>{`productSize：${item.size}`}</p>
          <p>{`productAmount：${item.amount}`}</p>
          <div className="border border-[rgba(29,31,39,1)] mt-[8px]">
            {/* Divider */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
