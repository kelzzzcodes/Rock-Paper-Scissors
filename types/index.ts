import { MouseEventHandler } from "react";
export interface CustomCardProps {
  backgroundColor: string;
  value?: number;
  title: string;
  borderColor: string;
};

export interface CustomButtonProps {
  handleClick?:
  MouseEventHandler<HTMLButtonElement>;
  title:string;

};
