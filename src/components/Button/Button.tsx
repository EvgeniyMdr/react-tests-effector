import React, { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ label, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {label}
    </button>
  );
};

export default Button;
