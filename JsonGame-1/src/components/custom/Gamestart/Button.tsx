import React from 'react';
import { ButtonProps } from '../../../types/quiz.types';

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  onClick, 
  children, 
  className,
  style,
  ...props 
}) => (
  <button
    onClick={onClick}
    className={className}
    style={style}
    {...props}
  >
    {children}
  </button>
);

export default Button;