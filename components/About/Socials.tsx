import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import envelope from '@/public/envelope.svg';
import github from '@/public/github.svg';
import linkedin from '@/public/linkedin.svg';

export default function Socials() {
  return (
    <ul className="flex gap-4">
      <Link
        href="https://www.linkedin.com/in/kostas-politis-8056791b8"
        target="_blank"
      >
        <li className="rounded-full border border-accent p-2">
          <Image src={linkedin} alt="LinkedIn Profile" />
        </li>
      </Link>
      <Link href="https://github.com/kostas-politis" target="_blank">
        <li className="rounded-full border border-accent p-2">
          <Image src={github} alt="GitHub" />
        </li>
      </Link>
      <Link href="mailto:politisk273@gmail.com">
        <li className="rounded-full border border-accent p-2">
          <Image src={envelope} alt="Send email" />
        </li>
      </Link>
    </ul>
  );
}
