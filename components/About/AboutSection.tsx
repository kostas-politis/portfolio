import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import Socials from './Socials';
import ScrollIndicator from './ScrollIndicator';

export default function AboutSection() {
  return (
    <div className="relative flex lg:h-full flex-col items-center justify-between gap-8 lg:flex-row-reverse mb-14">
      <ProfilePhoto />
      <div className="text-center lg:order-none lg:text-left">
        <span className="text-xl">Software Engineer</span>
        <h1 className="mb-6">
          Hello I&apos;m
          <br />
          <span className="text-accent">Konstantinos</span>
        </h1>
        {/* text-sm xl:text-base */}
        <p className="mb-9 max-w-[650px] text-white/80">
          I excel at crafting elegant digital expreiences and I am proficient in
          vaious programming technologies.
        </p>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <button className="block rounded-full border border-accent bg-transparent px-4 py-2 font-semibold text-accent hover:border-transparent hover:bg-accent hover:text-foreground">
            DONWLOAD CV <span>+</span>
          </button>
          <Socials />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 mx-auto mb-[80px] w-fit">
        <ScrollIndicator />
      </div>
    </div>
  );
}
