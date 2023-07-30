import React from "react";
import { CustomCard, CustomButton } from "../components";
import { customCardsData } from "../constants";

const GamePage = () => {
  return (
    <div className="w-full flex h-[calc(100vh-5rem)]">
      <div className="flex flex-col gap-10 justify-center items-center mx-auto justify-items-center">
        <h2 className="flex capitalize text-xl  text-primary">
          Pick your Positions
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {customCardsData.map((cardData) => (
            <CustomCard
              key={cardData.title}
              {...cardData}
            />
          ))}
        </div>
        <CustomButton title="Play" />
      </div>
    </div>
  );
};

export default GamePage;
