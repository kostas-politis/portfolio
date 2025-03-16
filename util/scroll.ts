export function scrollToSection(id: string) {
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
