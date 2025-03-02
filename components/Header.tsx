import Image from 'next/image';
import menu from '../public/menu.svg';
import Link from 'next/link';

import Nav from './Nav';
export default function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h2 className="text-4xl font-semibold">
            Politis<span className="text-accent">.</span>
          </h2>
        </Link>

        {/* Mobile Nav */}
        {/* <div className="xl:flex">mobile nav</div> */}

        {/* Desktop Nav RODO flex -> hidden*/}
        <div className="hidden xl:flex">
          <Nav />
          {/* <Link href="/contact">Hire me</Link> */}
        </div>
        <Image src={menu} alt="Menu" width={40} height={40} />
      </div>
    </header>
  );
}
