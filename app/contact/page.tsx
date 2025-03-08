import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

export default function Contact() {
  return (
    <div className="grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2 lg:gap-0">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
