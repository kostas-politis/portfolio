'use client';

const links = ['home', 'resume', 'contact'];

export default function NavLinks({ className }: { className?: string }) {
  function scrollToSection(id: string) {
    const navbar = document.getElementById('header');
    const element = document.getElementById(id);

    if (!navbar || !element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      window.pageYOffset + elementPosition - navbar.clientHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
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
