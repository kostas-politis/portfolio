import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import Header from '@/components/Header';
import Photo from '@/components/ProfilePhoto';
import ScrollIndicator from '@/components/ScrollIndicator';
import Socials from '@/components/Socials';
import VerticalTimeline from '@/components/Timeline';

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="relative flex h-full flex-col items-center justify-between gap-8 lg:flex-row-reverse">
        <Photo />
        <div className="text-center lg:order-none lg:text-left">
          <span className="text-xl">Software Engineer</span>
          <h1 className="mb-6">
            Hello I&apos;m
            <br />
            <span className="text-accent">Konstantinos</span>
          </h1>
          {/* text-sm xl:text-base */}
          <p className="mb-9 max-w-[650px] text-white/80">
            I excel at crafting elegant digital expreiences and I am proficient
            in vaious programming technologies.
          </p>
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <button className="block rounded-full border border-accent bg-transparent px-4 py-2 font-semibold text-accent hover:border-transparent hover:bg-accent hover:text-foreground">
              DONWLOAD CV <span>+</span>
            </button>
            <Socials />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 mx-auto mb-[80px] w-fit">
          <ScrollIndicator />
        </div>
      </div>
      <p className="mb-2 text-sm text-white/60">What I&apos;ve done so far</p>
      <h2 className="mb-14">Work Experience</h2>
      <VerticalTimeline />
      <div className="grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2 lg:gap-0">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
