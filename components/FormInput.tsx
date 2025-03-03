import { HTMLInputTypeAttribute } from 'react';

type FormInputProps = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
};

export default function FormInput({
  type = 'text',
  placeholder,
}: FormInputProps) {
  return (
    <input
      type={type}
      className="rounded-md border border-white/10 bg-background p-2.5 text-base font-light outline-none focus:border-accent"
      placeholder={placeholder}
      required
    />
  );
}
