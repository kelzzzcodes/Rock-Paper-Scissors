import { MouseEventHandler,HTMLProps } from "react";
export interface CustomCardProps {
  value?: number;
  title: string;
  containerStyles: string;

};

export interface CustomButtonProps {
  handleClick?:
  MouseEventHandler<HTMLButtonElement>;
  title:string;

};
