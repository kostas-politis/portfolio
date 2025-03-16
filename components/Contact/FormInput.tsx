// app/components/FormInput.tsx
import React from 'react';

interface FormInputProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  type,
  placeholder,
  name,
  value,
  onChange,
}: FormInputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-md border border-white/10 bg-background p-2.5 text-base font-light outline-none focus:border-accent"
      required
    />
  );
}
