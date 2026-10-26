import React, { useEffect, useState } from 'react';
import { ArrowRight, Container, Logo } from './ui';

const links = [
  { id: 'mission', label: 'About' },
  { id: 'approach', label: 'Approach' },
  { id: 'services', label: 'Services' },
  { id: 'why', label: 'Why Ascend' },
  { id: 'philosophy', label: 'Philosophy' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link for the section currently in view
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-white/10 bg-ink/95 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-[72px] items-center justify-between gap-8" aria-label="Primary">
          <a href="#top" className="text-white" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <div className="hidden h-full items-center gap-9 lg:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative flex h-full items-center text-[15px] transition-colors duration-200 hover:text-white ${
                  active === l.id ? 'text-white' : 'text-white/60'
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-ember transition-transform duration-300 ${
                    active === l.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden items-center gap-2 bg-ember px-5 py-2.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-ember-400 sm:inline-flex"
            >
              Contact us
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center text-white lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-6">
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </Container>

      <div
        className={`overflow-hidden border-t border-white/10 bg-ink transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[100vh]' : 'max-h-0 border-transparent'
        }`}
      >
        <Container className="flex h-[calc(100vh-72px)] flex-col py-6">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-5 font-display text-2xl font-medium text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-ember px-5 py-4 font-medium text-ink"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </a>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
