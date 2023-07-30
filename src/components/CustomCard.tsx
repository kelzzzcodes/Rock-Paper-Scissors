import { CustomCardProps } from "../../types";

const CustomCard = ({ containerStyles, value, title }: CustomCardProps) => {

  return (
    <div
      className={`custom-card ${containerStyles} `}
    >
      {value && (
        <div className={`custom-circle`}>
          <p className="text-sm" >{value}</p>
        </div>
      )}
      <div className="flex justify-end items-end">
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>
    </div>
  );
};

export default CustomCard;
