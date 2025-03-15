import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <div className="py-14 grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2 lg:gap-0">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
