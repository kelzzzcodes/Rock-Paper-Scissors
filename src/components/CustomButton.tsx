import React from "react";
import { CustomButtonProps } from "../../types";
const CustomButton = ({ title, handleClick }: CustomButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`custom-btn`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
