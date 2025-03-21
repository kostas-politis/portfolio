import Link from 'next/link';
import DrawerMenu from './DrawerMenu';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-10 w-full bg-background py-8 lg:-mb-[104px] xl:py-12"
    >
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
