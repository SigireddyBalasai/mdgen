import type { ButtonHTMLAttributes } from 'react';

const Button = ({
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`rounded-lg border border-transparent px-4 py-2 text-lg font-medium bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition ${className}`}
    {...props}
  />
);

export default Button;
