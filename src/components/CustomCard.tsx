import { CustomCardProps } from "../../types";

const CustomCard = ({
  backgroundColor,
  borderColor,
  value,
  title,
}: CustomCardProps) => {
  return (
    <div
      className={`bg-${backgroundColor} flex flex-col gap-4 w-[200px] h-[200px] items-center justify-center rounded-xl border-2  border-${borderColor} cursor-pointer`}
    >
      {value && (
        <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border-4 border-blue-900 bg-white text-black">
          <p>{value}</p>
        </div>
      )}
      <div>
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>
    </div>
  );
};

export default CustomCard;
