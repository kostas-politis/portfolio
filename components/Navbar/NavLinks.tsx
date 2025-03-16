'use client';

import { scrollToSection } from '@/util/scroll';

const links = ['home', 'resume', 'contact'];

export default function NavLinks({ className }: { className?: string }) {
  return (
    <nav className={className}>
      {links.map((link, index) => {
        return (
          <button
            key={index}
            className="font-medium capitalize transition-all hover:text-accent"
            onClick={() => scrollToSection(link)}
          >
            {link}
          </button>
        );
      })}
    </nav>
  );
}
