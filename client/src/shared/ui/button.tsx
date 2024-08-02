import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '../lib/utils';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return <button {...props} className={cn("bg-black h-10 px-5 rounded-md text-white text-sm disabled:bg-gray-300", className)}/>;
};
