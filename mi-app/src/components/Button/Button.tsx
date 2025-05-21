import React from 'react';
import RBButton from 'react-bootstrap/Button';

interface ButtonProps {
  variant?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", onClick, children }) => {
  return (
    <RBButton variant={variant} onClick={onClick}>
      {children}
    </RBButton>
  );
};

export default Button;
