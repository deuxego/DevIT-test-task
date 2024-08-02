import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        'flex h-10 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-0',
        className
      )}
    />
  );
});
