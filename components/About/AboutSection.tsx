import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import Socials from './Socials';
import ScrollIndicator from './ScrollIndicator';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export default function AboutSection() {
  return (
    <div
      id="home"
      className="relative mb-24 flex flex-col items-center justify-between gap-8 lg:h-screen lg:flex-row-reverse"
    >
      <ProfilePhoto />
      <div className="text-center lg:order-none lg:text-left">
        <span className="text-xl">Software Engineer</span>
        <h1 className="mb-6">
          Hello I&apos;m
          <br />
          <span className="text-accent">Konstantinos</span>
        </h1>
        <p className="mb-9 max-w-[650px] text-white/80">
          I excel at crafting elegant digital expreiences and I am proficient in
          vaious programming technologies.
        </p>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <a
            href="resume.pdf"
            download="Resume_Konstantinos_Politis"
            className="block rounded-full border border-accent bg-transparent px-4 py-2 font-semibold text-accent hover:border-transparent hover:bg-accent hover:text-foreground"
          >
            DONWLOAD CV <ArrowDownTrayIcon className="inline size-6 pb-1" />
          </a>
          <Socials />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto mb-[80px] hidden w-fit lg:block">
        <ScrollIndicator />
      </div>
    </div>
  );
}
