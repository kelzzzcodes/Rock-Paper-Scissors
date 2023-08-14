"use client";
import { useState, useEffect } from "react";
import { CustomCard, CustomButton } from "../components";
import { customCardsData, selectedData } from "../constants";

const GamePage = () => {
  const [selected, setSelected] = useState(false);
  const [winner, setWinner] = useState(true);

  const handleSelected = () => {
    if (selected === true) {
      setSelected(selected);
    }
  };

  const handleWinner = () => {
    if (winner === true) {
      setWinner(winner);
    }
  };

  useEffect(() => {
    handleSelected();
    handleWinner();
  });

  return (
    <div className="w-full flex flex-col h-[calc(100vh-5rem)] justify-center ">
      <div className="flex justify-center mb-8 ">
        <div className="flex flex-col justify-center gap-10 items-center ">
          {winner && (
            <div className="flex flex-col items-center gap-2 ">
              <p className="text-[#1bc359] text-4xl uppercase font-bold">
                PAPER WON
              </p>
              <p className="text-primary uppercase text-2xl font-bold">
                You WIN <span className="text-white">XXX.XX</span>
              </p>
            </div>
          )}
          {selected ? (
            <>
              {selectedData.map((item, index) => (
                <div className="flex gap-10 items-baseline">
                  <p className="text-5xl font-bold uppercase">{item.rock}</p>
                  <span className="text-primary text-2xl font-bold">VS</span>
                  <p className="text-5xl font-bold uppercase">{item.paper}</p>
                </div>
              ))}
            </>
          ) : (
            <h2 className="flex uppercase  text-xl  text-primary">
              pick your positions
            </h2>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center  justify-items-center">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {customCardsData.map((cardData) => {
            return <CustomCard key={cardData.title} {...cardData} />;
          })}
        </div>
        <CustomButton title="Play" />
      </div>
    </div>
  );
};

export default GamePage;
