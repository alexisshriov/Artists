import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
  children: ReactNode;
}

const Button = ({ theme = '', children, ...props }: ButtonProps) => {
  return (
    <button className={`button ${theme}-theme`} {...props}>
      {children}
    </button>
  );
};

export default Button;