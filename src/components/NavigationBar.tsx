import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center min-w-screen h-[44px]">
      <div
        onClick={goHome}
        className="flex items-center w-[24px] h-[24px] ml-[10px] text-white text-[24px] cursor-pointer"
      >
        {"<"}
      </div>
    </div>
  );
};

export default NavigationBar;
