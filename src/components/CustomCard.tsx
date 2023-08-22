"use client";
import { useState, useEffect } from "react";
import { CustomCardProps } from "../../types";
const CustomCard = ({
  containerStyles,
  value,
  title,
  status,
}: CustomCardProps) => {
  // const [isClicked, setIsClicked] = useState();
  const [win, setWin] = useState(status);
  // const [win, setWin] = useState(false)

  // const handleCardBorder = () => {
  //   setIsClicked(!isClicked);
  // };
  const handleBorder = () => {
   if(status === true){
    setWin(win);
   }
  };

  useEffect(() => {
    handleBorder();
  });

  return (
    <div
      className={`custom-card ${containerStyles}
      ${win ? "border-4" : "border-2"}`}
    >
      <div className={`custom-card-wrapper`}>
        {value && (
          <div className={`custom-circle`}>
            <p className=" text-xs">{value}</p>
          </div>
        )}
        <div className="flex justify-end items-end">
          <h2 className="font-bold text-2xl uppercase">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
