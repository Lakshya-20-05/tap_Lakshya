import React from 'react';
import { ArrowRight, ArrowUpRight } from './ui';

const socials = [
  { label: 'Linktree', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink pt-24 text-white md:pt-32">
      <div className="mx-auto max-w-site px-6">
        {/* CTA */}
        <div className="reveal grain relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-ink-700 to-ink-800 px-8 py-14 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-ember/20 blur-[110px]" />
          <div className="relative grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-6xl lg:col-span-8">
              Empowering students.
              <br />
              <span className="font-serif text-[1.1em] font-normal italic text-white/70">Elevating institutions.</span>
              <br />
              Connecting growth<span className="text-ember">.</span>
            </h2>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-white/55">
                Ready to bring Tier-1 placement infrastructure to your campus? Let&rsquo;s talk.
              </p>
              <a
                href="#"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-ember-400 hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.7)]"
              >
                Initiate Partnership
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-white text-ink">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M10 2l8 15H2z" />
                </svg>
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-ember ring-2 ring-ink" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">Ascend</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">
              Institutional recruitment and placement outsourcing for Tier-2 and Tier-3 institutions.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">Explore</div>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {[
                ['#mission', 'Mission'],
                ['#approach', 'Approach'],
                ['#services', 'What We Do'],
                ['#philosophy', 'Philosophy'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">Connect</div>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="group inline-flex items-center gap-1.5 transition-colors hover:text-white">
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-all group-hover:text-ember group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 py-8 text-xs text-white/35 md:flex-row md:items-center">
          <div>&copy; 2025 Ascend Institutional Recruitment. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Security</a>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="-mb-[0.22em] text-center font-serif text-[20vw] italic leading-none tracking-[-0.04em] text-white/[0.03]">
          Ascend
        </div>
      </div>
    </footer>
  );
};

export default Footer;
