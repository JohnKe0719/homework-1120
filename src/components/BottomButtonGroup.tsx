import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ShoppingCartIcon } from "../icons/shopping-cart.svg";
import ProductModal from "./ProductModal";
import { useCart } from "../context/CartContext";

const BottomButtonGroup: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartItemCount = cart.length;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonType, setButtonType] = useState(0);

  const handleAddToCart = () => {
    setButtonType(0);
    setIsModalOpen(true);
  };

  const handleCheckout = () => {
    setButtonType(1);
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center text-white min-h-[56px] py-[8px] px-[12px] mt-[14px] gap-[8px] bg-[rgba(47,49,64,1)]">
        <div className="flex flex-col items-center w-[52px]">
          <div
            onClick={() => {
              navigate("/cart");
            }}
            className="relative cursor-pointer"
          >
            <ShoppingCartIcon className="h-[28px] w-[28px] text-white" />
            <div className="absolute -top-[2.5px] -right-[5.5px] text-[11px] leading-[12px] w-[21px] h-[20px] py-[4px] px-[8px] rounded-[32px] gap-[10px] bg-[rgba(207,76,95,1)]">
              {cartItemCount}
            </div>
          </div>
          <p className="text-[11px] leading-[12px] text-center mt-[2px]">
            購物車
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className="py-[12px] px-[16px] rounded-[12px] gap-[8px] bg-[rgba(67,70,94,1)] hover:bg-gray-600 text-[18px] leading-[24px] font-bold"
        >
          加入購物車
        </button>
        <button
          onClick={handleCheckout}
          className="py-[12px] px-[16px] rounded-[12px] gap-[8px] bg-[rgba(186,41,67,1)] hover:bg-red-600 text-[18px] leading-[24px] font-bold"
        >
          立即購買
        </button>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={onModalClose}
        buttonType={buttonType}
      />
    </>
  );
};

export default BottomButtonGroup;
