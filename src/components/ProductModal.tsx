import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as CloseIcon } from "../icons/close.svg";
import { mockProductModal } from "../mocks/mockData";
import { useCart } from "../context/CartContext";

const products = [...mockProductModal];

const ProductModal = ({ isOpen, onClose, buttonType }) => {
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [amount, setAmount] = useState(1);

  const selectedProduct = products[selectedProductIndex];
  const selectedSize = selectedProduct.productSize[selectedSizeIndex];
  const isSizeAvailable = selectedSize.amount > 0;

  const onCloseAndReset = () => {
    setSelectedProductIndex(0);
    setSelectedSizeIndex(0);
    setAmount(1);
    onClose();
  };

  const handleSelectColor = (index) => {
    setSelectedProductIndex(index);
    setSelectedSizeIndex(0);
    setAmount(1);
  };

  const handleSelectSize = (index) => {
    if (selectedProduct.productSize[index].amount > 0) {
      setSelectedSizeIndex(index);
    }
  };

  const handleAmountChange = (num) => {
    setAmount((prevAmount) => {
      let newAmount = prevAmount + num;
      if (newAmount < 1) {
        newAmount = 1;
      } else if (newAmount > selectedSize.amount) {
        newAmount = selectedSize.amount;
      }
      return newAmount;
    });
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        name: selectedProduct.productName,
        image: selectedProduct.productImage,
        price: selectedProduct.productPrice,
        color: selectedProduct.productColor,
        size: selectedSize,
        amount: amount
      }
    });
    onCloseAndReset();
    if (buttonType === 1) {
      navigate("/cart");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-[rgba(47,49,64,1)] py-[12px] text-white text-[14px] leading-[22px] w-screen bottom-0 absolute">
        {/* 商品資訊 */}
        <div className="flex px-[24px]">
          <img
            src={selectedProduct.productImage}
            alt={selectedProduct.productName}
            className="w-[64px] h-[64px] rounded-[8px]"
          />

          <div className="flex flex-col ml-[11px] pr-[11px]">
            <p className="font-bold">{selectedProduct.productName}</p>
            <p className="">${selectedProduct.productPrice.toLocaleString()}</p>
          </div>

          <button
            onClick={onCloseAndReset}
            className="absolute top-[16px] right-[18px]"
          >
            <CloseIcon className="" />
          </button>
        </div>
        <div className="border border-[rgba(29,31,39,1)] mt-[8px]">
          {/* Divider */}
        </div>
        {/* 尺寸選擇 */}
        <div className="flex flex-col mt-[18px] px-[24px]">
          <div className="flex">
            <p className="text-[16px] leading-[24px]">{"尺寸"}</p>
            <p className="ml-[8px] text-[rgba(255,255,255,0.5)] text-[12px] leading-[20px]">
              {"補充說明"}
            </p>
          </div>
          <div className="flex flex-wrap gap-[10px] mt-[8px]">
            {selectedProduct.productSize.map((size, index) => (
              <button
                key={size.size}
                className={`px-3 py-1 rounded-md ${
                  selectedSizeIndex === index && isSizeAvailable
                    ? "bg-[rgba(186,41,67,1)]"
                    : "bg-[rgba(47,49,64,1)] border border-[rgba(84,88,114,1)]"
                }
                ${
                  size.amount === 0
                    ? "text-[rgba(255,255,255,0.2)] bg-[rgba(67,70,94,1)] border border-[rgba(67,70,94,1)] cursor-not-allowed"
                    : ""
                }
                `}
                disabled={size.amount === 0}
                onClick={() => handleSelectSize(index)}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>
        {/* 顏色選擇 */}
        <div className="flex flex-col mt-[18px] px-[24px]">
          <div className="flex">
            <p className="text-[16px] leading-[24px]">{"顏色"}</p>
            <p className="ml-[8px] text-[rgba(255,255,255,0.5)] text-[12px] leading-[20px]">
              {"補充說明"}
            </p>
          </div>
          <div className="flex flex-wrap gap-[10px] mt-[8px]">
            {products.map((product, index) => (
              <button
                key={product.productColor}
                className={`px-3 py-1 rounded-md ${
                  selectedProductIndex === index
                    ? "bg-[rgba(186,41,67,1)]"
                    : "bg-[rgba(47,49,64,1)] border border-[rgba(84,88,114,1)]"
                }
                ${
                  product.productAmount === 0
                    ? "text-[rgba(255,255,255,0.2)] bg-[rgba(67,70,94,1)] border border-[rgba(67,70,94,1)] cursor-not-allowed"
                    : ""
                }
                `}
                disabled={product.productAmount === 0}
                onClick={() => handleSelectColor(index)}
              >
                {product.productColor}
              </button>
            ))}
          </div>
        </div>
        <div className="border border-[rgba(29,31,39,1)] mt-[18px]">
          {/* Divider */}
        </div>
        {/* 數量選擇 */}
        <div className="flex justify-between mt-[18px] px-[24px]">
          <p className="text-[16px] leading-[24px]">{"購買數量"}</p>
          <div className="flex items-center space-x-2">
            <button
              className={`w-[22px] h-[22px] rounded-[3.3px] ${
                amount <= 1
                  ? "bg-[rgba(255,255,255,0.1)] cursor-not-allowed"
                  : "bg-[rgba(67,70,94,1)]"
              }`}
              onClick={() => handleAmountChange(-1)}
              disabled={amount <= 1}
            >
              -
            </button>
            <span className="">{amount}</span>
            <button
              className={`w-[22px] h-[22px] rounded-[3.3px] ${
                amount >= selectedSize.amount
                  ? "bg-[rgba(255,255,255,0.1)] cursor-not-allowed"
                  : "bg-[rgba(67,70,94,1)]"
              }`}
              onClick={() => handleAmountChange(1)}
              disabled={amount >= selectedSize.amount}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex px-[24px] mt-[20px]">
          <button
            className="w-full py-[12px] px-[16px] rounded-[12px] gap-[8px] bg-[rgba(186,41,67,1)] hover:bg-red-600 text-[18px] leading-[24px] font-bold"
            onClick={() => addToCart()}
            disabled={selectedProduct.productAmount === 0}
          >
            {buttonType === 0 ? "加入購物車" : "立即購買"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
