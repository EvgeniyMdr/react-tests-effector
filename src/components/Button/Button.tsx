import React, { FC } from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  children?: JSX.Element | string;
  testId?: string;
}

const Button: FC<ButtonProps> = ({
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <button onClick={onClick} {...props} data-testid={props?.testId}>
      {children}
    </button>
  );
};

export default Button;
