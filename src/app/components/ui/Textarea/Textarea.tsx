import React from 'react';

type TextareaProps = {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholder,
  value,
  onChange,
  id,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="textarea"
    />
  );
};

export default Textarea;
