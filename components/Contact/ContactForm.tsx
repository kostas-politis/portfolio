'use client';

import React, { useState } from 'react';
import FormInput from './FormInput';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully! I’ll get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
    >
      <h2 className="text-accent">Let’s work together</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
        blanditiis asperiores.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput
          type="text"
          placeholder="First name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          placeholder="Last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          placeholder="Email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          type="tel"
          placeholder="Phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Type your message here."
        className="h-[200px] rounded-md border border-white/10 bg-background p-2.5 text-base font-light outline-none focus:border-accent"
        required
      ></textarea>
      <button
        type="submit"
        className="self-start rounded-md bg-accent px-5 py-2.5 text-center text-sm font-medium text-background focus:outline-none"
      >
        Send Message
      </button>
      {status && <p className="text-sm">{status}</p>}
    </form>
  );
}
