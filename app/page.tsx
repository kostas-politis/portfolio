import Photo from '@/components/ProfilePhoto';
import Socials from '@/components/Socials';

export default function Home() {
  return (
    <section className="h-full">
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row-reverse">
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
      </div>
    </section>
  );
}
