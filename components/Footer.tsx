import React from 'react';
import { ArrowRight, Container, Logo } from './ui';

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
      <div className="bg-ember text-ink">
        <Container className="py-20 md:py-28">
          <div className="reveal grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end md:gap-12">
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl xl:text-7xl">
              Bring a stronger placement process to your campus.
            </h2>
            <div className="md:justify-self-end">
              <p className="max-w-xl text-lg leading-relaxed text-ink/75">
                Tell us about your college and its students. We will explain how a partnership with Ascend would work
                for you.
              </p>
              <a
                href="#"
                className="group mt-8 inline-flex items-center gap-2 bg-ink px-7 py-4 font-medium text-white transition-colors duration-200 hover:bg-ink-600"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-2 gap-12 py-16 md:grid-cols-4 md:py-20">
          <div className="col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/55">
              Institutional recruitment and placement outsourcing for Tier-2 and Tier-3 colleges.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white/45">Explore</p>
            <ul className="mt-5 space-y-3 text-base text-white/75">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-ember">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-white/45">Connect</p>
            <ul className="mt-5 space-y-3 text-base text-white/75">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="transition-colors hover:text-ember">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2025 Ascend Institutional Recruitment. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Security</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
