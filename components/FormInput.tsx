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
      className="rounded-md border border-white/10 bg-background p-2.5 text-base font-light outline-none autofill:bg-background autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0)] focus:border-accent"
      placeholder={placeholder}
      required
    />
  );
}
