import React, { useEffect, useState } from 'react';
import { ArrowRight } from './ui';

const links = [
  { href: '#mission', label: 'Mission' },
  { href: '#approach', label: 'Approach' },
  { href: '#services', label: 'What We Do' },
  { href: '#philosophy', label: 'Philosophy' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:pt-5">
      <nav
        className={`mx-auto flex h-14 max-w-site items-center justify-between rounded-full border px-3 pl-5 transition-all duration-500 ${
          scrolled || open
            ? 'border-white/10 bg-ink-800/80 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2.5 text-white" onClick={() => setOpen(false)}>
          <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-white text-ink">
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
              <path d="M10 2l8 15H2z" />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-ember ring-2 ring-ink" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Ascend</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-white/60 transition-colors duration-300 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ink transition-colors duration-300 hover:bg-ember sm:inline-flex"
          >
            Consult With Us
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/5 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-site overflow-hidden rounded-3xl border border-white/10 bg-ink-800/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3.5 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-ink"
          >
            Consult With Us <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
