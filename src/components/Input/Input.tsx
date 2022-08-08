import React, { FC, HTMLInputTypeAttribute } from "react";
import "./styles.css";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name?: string;
  label?: string;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  onFocus?: (e: React.SyntheticEvent) => void;
  onBlur?: (e: React.SyntheticEvent) => void;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  testId?: string;
}

const Input: FC<InputProps> = ({
  label,
  inputType = "text",
  value,
  name,
  onChange,
  onBlur = () => {},
  onFocus = () => {},
  placeholder,
  error,
  errorText,
  ...props
}) => {
  return (
    <label className="input-wrapper" data-testid={props?.testId}>
      {label && <span>{label}</span>}
      <input
        className="input-control"
        value={value}
        type={inputType}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
      {error && errorText && <span className="input-error">{errorText}</span>}
    </label>
  );
};

export default Input;
