import type { ButtonHTMLAttributes } from 'react';
import { memo } from 'react';

const Button = memo(
  ({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
      className={`rounded-lg border border-transparent px-3 py-2 sm:px-4 sm:py-2 text-base sm:text-lg font-medium bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus-visible:ring-4 transition w-full sm:w-auto ${className}`}
      aria-label={
        props['aria-label'] ||
        (typeof props.children === 'string' ? props.children : undefined)
      }
      {...props}
    />
  ),
);

export default Button;
