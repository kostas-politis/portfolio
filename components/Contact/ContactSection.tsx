import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function ContactSection({}) {
  return (
    <div
      id="contact"
      className="mx-auto grid grid-cols-1 items-center justify-center gap-12 pb-24 lg:grid-cols-2 lg:gap-0"
    >
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
