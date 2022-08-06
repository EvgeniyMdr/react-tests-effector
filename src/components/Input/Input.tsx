import React, { FC, HTMLInputTypeAttribute } from "react";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name?: string;
  label?: string;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  onFocus?: (e: React.SyntheticEvent) => void;
  onBlur?: (e: React.SyntheticEvent) => void;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
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
    <label>
      {label && <span>{label}</span>}
      <input
        value={value}
        type={inputType}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
      {error && errorText && <span>{errorText}</span>}
    </label>
  );
};

export default Input;
