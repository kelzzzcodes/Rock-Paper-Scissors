import { CustomCardProps } from "../../types";

const CustomCard = ({ containerStyles, value, title }: CustomCardProps) => {

  return (
    <div
      className={`custom-card ${containerStyles}`}
    >
    <div className={`custom-card-wrapper`}>
    {value && (
        <div className={`custom-circle`}>
          <p className=" text-xs" >{value}</p>
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
