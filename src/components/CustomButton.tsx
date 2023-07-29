import React from "react";
import { CustomButtonProps } from "../../types";
const CustomButton = ({
  title,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-[#111111] px-16 py-4 border-2 border-[#ffcb74] rounded-full text-[#ffcb74] text-2xl font-bold uppercase"
    >
      {title}
    </button>
  );
};

export default CustomButton;