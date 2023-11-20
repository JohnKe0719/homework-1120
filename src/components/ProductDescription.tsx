// src/components/ProductDescription.tsx
import React from "react";
import { mockProductDescription } from "../mocks/mockData";

const ProductDescription: React.FC = () => {
  return (
    <div className="text-white mx-[12px] mt-[12px] p-[12px] rounded-[12px] bg-[rgba(39,41,52,1)]">
      <div>
        <p className="text-[14px] leading-[22px] text-[rgba(255,255,255,0.6)]">
          商品分類
        </p>
        <p className="text-[14px] leading-[22px]">
          {mockProductDescription.category}
        </p>
      </div>
      <div className="border border-[rgba(29,31,39,1)] my-[8px]">
        {/* Divider */}
      </div>
      <div>
        <p className="text-[14px] leading-[22px] text-[rgba(255,255,255,0.6)]">
          商品描述
        </p>
        <p className="text-[14px] leading-[22px]">
          {mockProductDescription.description}
        </p>
      </div>
      <div className="border border-[rgba(29,31,39,1)] my-[8px]">
        {/* Divider */}
      </div>
      <div>
        <p className="text-[14px] leading-[22px] text-[rgba(255,255,255,0.6)]">
          商品備註
        </p>
        <p className="text-[14px] leading-[22px]">
          {mockProductDescription.notes}
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
