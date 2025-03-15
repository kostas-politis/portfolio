'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'resume',
    href: '/resume',
  },
  {
    label: 'contact',
    href: '/contact',
  },
];

export default function Nav({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <nav className={className}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className={`${
              link.label === pathname && 'border-b-2 border-accent text-accent'
            } font-medium capitalize transition-all hover:text-accent`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
