import AboutSection from '@/components/About/AboutSection';
import ContactSection from '@/components/Contact/ContactSection';
import Navbar from '@/components/Navbar/Navbar';
import SkillsSection from '@/components/Skills/SkillsSection';
import VerticalTimeline from '@/components/Timeline/Timeline';

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <AboutSection />
      <SkillsSection />
      <VerticalTimeline />
      <ContactSection />
    </div>
  );
}
