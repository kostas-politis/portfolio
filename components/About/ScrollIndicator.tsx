'use client';

import { scrollToSection } from '@/util/scroll';
import React from 'react';

export default function ScrollIndicator() {
  return (
    <div
      className="h-[60px] w-[35px] cursor-pointer rounded-full border-[3.5px] border-foreground"
      onClick={() => scrollToSection('resume')}
    >
      <div className="indicator-bounce mx-auto my-[10px] h-[10px] w-[10px] rounded-full bg-foreground"></div>
    </div>
  );
}
