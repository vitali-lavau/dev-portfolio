import React from 'react';

type InputProps = {
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  disabled?: boolean;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  id,
  disabled,
  required,
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
      disabled={disabled}
      required={required}
    />
  );
};

export default Input;
