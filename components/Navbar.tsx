import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Logo } from './ui';

const links = [
  { id: 'mission', label: 'About' },
  { id: 'approach', label: 'Approach' },
  { id: 'services', label: 'Services' },
  { id: 'why', label: 'Why Ascend' },
  { id: 'philosophy', label: 'Philosophy' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // Hide when scrolling down past the hero, show again when scrolling up
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 400);
        lastY = y;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled || open ? 'border-white/10 bg-ink/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      } ${hidden && !open ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div
        ref={progressRef}
        className="absolute inset-x-0 bottom-[-1px] h-0.5 origin-left scale-x-0 bg-ember"
        aria-hidden="true"
      />
      <Container>
        <nav className="flex h-[72px] items-center justify-between gap-8" aria-label="Primary">
          <a
            href="#top"
            className="fade-up transition-opacity duration-300 hover:opacity-80"
            onClick={() => setOpen(false)}
          >
            <Logo className="h-7 md:h-8" />
          </a>

          <div className="hidden h-full items-center gap-9 lg:flex">
            {links.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                className={`fade-up group relative flex h-full items-center text-[15px] transition-colors duration-300 hover:text-white ${
                  active === l.id ? 'text-white' : 'text-white/60'
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-ember transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active === l.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-white/40'
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button href="#contact" className="!hidden !px-5 !py-2.5 text-[15px] sm:!inline-flex">
              Contact us
            </Button>
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
                  className={`absolute left-0 h-0.5 bg-current transition-all duration-300 ${
                    open ? 'top-1.5 w-6 -rotate-45' : 'top-3 w-4'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </Container>

      <div
        className={`overflow-hidden bg-ink transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? 'max-h-[100vh]' : 'max-h-0'
        }`}
      >
        <Container className="flex h-[calc(100vh-72px)] flex-col border-t border-white/10 py-6">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.1 + i * 0.05}s` : '0s' }}
              className={`flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl font-medium text-white transition-all duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {l.label}
              <span className={`h-2 w-2 rounded-full ${active === l.id ? 'bg-ember' : 'bg-white/15'}`} />
            </a>
          ))}
          <Button href="#contact" onClick={() => setOpen(false)} magnetic={false} className="mt-8">
            Contact us
          </Button>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
