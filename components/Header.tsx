import Link from 'next/link';
import DrawerMenu from './DrawerMenu';
import NavLinks from './NavLinks';

export default function Temp() {
  return (
    <header className="py-8 xl:py-12">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h2 className="text-4xl font-semibold">
            Politis<span className="text-accent">.</span>
          </h2>
        </Link>
        <NavLinks className="hidden gap-8 md:flex" />
        <DrawerMenu className="md:hidden" />
      </div>
    </header>
  );
}
