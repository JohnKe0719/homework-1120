import React, { useState, useEffect } from "react";
import { mockProductImages } from "../mocks/mockData";

const ProductCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = mockProductImages.length;

  useEffect(() => {
    setInterval(() => {
      goToNext();
    }, 1000);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalImages - 1 : (prevIndex - 1) % totalImages
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex relative">
      <button
        onClick={goToPrevious}
        className="absolute bottom-[50%] left-0 p-2 text-white bg-black bg-opacity-50 z-10"
      >
        {"<"}
      </button>
      <button
        onClick={goToNext}
        className="absolute bottom-[50%] right-0 p-2 text-white bg-black bg-opacity-50 z-10"
      >
        {">"}
      </button>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {mockProductImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Product ${index + 1}`}
              className="w-screen"
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-[12px] right-[12px] text-white text-center w-[35px] h-[28px] py-[4px] px-[8px] rounded-[32px] space-x-[5px] bg-opacity-30 bg-black text-[12px] leading-[20px]">
        {currentImageIndex + 1}/{totalImages}
      </div>
    </div>
  );
};

export default ProductCarousel;
