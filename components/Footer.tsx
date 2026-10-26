import React from 'react';
import { Button, Container, Logo } from './ui';

const explore = [
  { href: '#mission', label: 'About' },
  { href: '#approach', label: 'Approach' },
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Ascend' },
  { href: '#philosophy', label: 'Philosophy' },
];

const socials = [
  { label: 'Linktree', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="relative overflow-hidden bg-ember text-ink">
        {/* Large ink circle echoing the logo dot */}
        <div className="reveal pointer-events-none absolute -bottom-[45%] -right-[10%] aspect-square w-[55vw] max-w-[820px] rounded-full border border-ink/10" />
        <div className="reveal pointer-events-none absolute -bottom-[35%] -right-[2%] aspect-square w-[38vw] max-w-[560px] rounded-full border border-ink/10" />
        <Container className="relative py-20 md:py-28">
          <div className="stagger grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end md:gap-12">
            <h2
              style={{ '--i': 0 } as React.CSSProperties}
              className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl xl:text-7xl"
            >
              Bring a stronger placement process to your campus.
            </h2>
            <div style={{ '--i': 1 } as React.CSSProperties} className="md:justify-self-end">
              <p className="max-w-xl text-lg leading-relaxed text-ink/75">
                Tell us about your college and its students. We will explain how a partnership with Ascend would work
                for you.
              </p>
              <Button href="#" variant="dark" className="mt-8">
                Start a conversation
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="stagger grid grid-cols-2 gap-12 py-16 md:grid-cols-4 md:py-20">
          <div style={{ '--i': 0 } as React.CSSProperties} className="col-span-2">
            <Logo className="h-8" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/55">
              Institutional recruitment and placement outsourcing for Tier-2 and Tier-3 colleges.
            </p>
          </div>

          <div style={{ '--i': 1 } as React.CSSProperties}>
            <p className="font-display text-sm font-semibold text-white/45">Explore</p>
            <ul className="mt-5 space-y-3 text-base text-white/75">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ '--i': 2 } as React.CSSProperties}>
            <p className="font-display text-sm font-semibold text-white/45">Connect</p>
            <ul className="mt-5 space-y-3 text-base text-white/75">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="link-underline hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2025 Ascend Institutional Recruitment. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="link-underline hover:text-white">Privacy</a>
            <a href="#" className="link-underline hover:text-white">Terms</a>
            <a href="#" className="link-underline hover:text-white">Security</a>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:bg-ember hover:text-ink"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden="true">
                <path d="M10 16V4M5 9l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
