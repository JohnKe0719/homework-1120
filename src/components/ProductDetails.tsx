import React from "react";
import { mockProductDetails } from "../mocks/mockData";

const ProductDetails: React.FC = () => {
  return (
    <div className="text-white mx-[12px] mt-[12px] p-[12px] rounded-[12px] bg-[rgba(39,41,52,1)]">
      <h2 className="text-[16px] font-bold leading-[24px] tracking-[0em] text-left">
        {mockProductDetails.name}
      </h2>
      <div className="flex items-center py-[2px] my-[2px]">
        <p className="text-[16px] font-bold leading-[24px] tracking-[0em] text-left">
          {mockProductDetails.priceRange}
        </p>
        <p className="text-[rgba(255,255,255,0.3)] text-[14px] leading-[22px] line-through ml-[6px]">
          {mockProductDetails.originalPrice}
        </p>
      </div>
      <div className="flex py-[4px]">
        {mockProductDetails.activities.map((activity, index) => (
          <p
            key={index}
            className={`${
              index === 0 ? "" : "ml-[8px]"
            } bg-[rgba(109,34,53,1)] py-[3px] px-[6px] rounded-[4px] gap-[10px] text-[11px] font-bold leading-[15.4px]`}
          >
            {activity}
          </p>
        ))}
      </div>
      <div className="border border-[rgba(29,31,39,1)] my-[8px]">
        {/* Divider */}
      </div>
      <ul className="list-disc pl-[12px] py-[2px] text-[14px] leading-[22px] gap-[10px]`">
        {mockProductDetails.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
