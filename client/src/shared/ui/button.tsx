import { FC, HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return <button {...props} className={cn("bg-black h-10 px-5 rounded-md text-white text-sm", className)}/>;
};
