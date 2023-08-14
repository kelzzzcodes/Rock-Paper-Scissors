import { MouseEventHandler } from 'react'
export interface CustomCardProps {
  value?: number
  title: string
  containerStyles: string,
  status?: boolean
}

export interface CustomButtonProps {
  handleClick?: MouseEventHandler<HTMLButtonElement>
  title: string
}
