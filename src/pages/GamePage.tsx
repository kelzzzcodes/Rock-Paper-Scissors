import { CustomCard, CustomButton } from "../components";
import { customCardsData, selectedData } from "../constants";

const GamePage = () => {
  return (
    <div className="w-full flex flex-col h-[calc(100vh-5rem)] justify-center ">
      <div className="flex justify-center mb-32 ">
        <div className="flex gap-10 items-baseline">
          {selectedData ? (
            <>
              <p className="text-5xl font-bold uppercase">Rock</p>
              <span className="text-primary text-2xl font-bold">VS</span>
              <p className="text-5xl font-bold uppercase">Paper</p>
            </>
          ) : (
            <h2 className="flex uppercase text-xl  text-primary">
              pick your positions
            </h2>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center  justify-items-center">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {customCardsData.map((cardData) => (
            <CustomCard key={cardData.title} {...cardData} />
          ))}
        </div>
        <CustomButton title="Play" />
      </div>
    </div>
  );
};

export default GamePage;
