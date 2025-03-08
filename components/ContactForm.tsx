import React from 'react';
import FormInput from './FormInput';

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10">
      <h2 className="text-accent">Let&apos;s work together</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
        blanditiis asperiores.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput type="text" placeholder="First name" />
        <FormInput type="text" placeholder="Last name" />
        <FormInput type="email" placeholder="Email address" />
        <FormInput type="tel" placeholder="Phone number" />
      </div>
      <textarea
        placeholder="Type your message here."
        className="h-[200px] rounded-md border border-white/10 bg-background p-2.5 text-base font-light outline-none focus:border-accent"
      ></textarea>
      <button
        type="submit"
        className="self-start rounded-md bg-accent px-5 py-2.5 text-center text-sm font-medium text-background focus:outline-none"
      >
        Send Message
      </button>
    </form>
  );
}
