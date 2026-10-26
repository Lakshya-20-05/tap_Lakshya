import React from 'react';
import { Eyebrow } from './ui';

const tracks = [
  {
    no: '01',
    audience: 'For institutions',
    title: 'Institutional Advancement',
    desc: 'We equip colleges with the corporate relations and recruitment machinery of a Tier-1 institution. We build the brand, the board, and the bridges.',
    items: ['Placement Board Outsourcing', 'Corporate Relation Management', 'Institutional Branding'],
    dark: false,
  },
  {
    no: '02',
    audience: 'For students',
    title: 'Talent Engineering',
    desc: 'We refine untapped student potential into job-ready talent for startups and Fortune 500 firms alike. Our students don’t just apply — they fit.',
    items: ['Skill Alignment Pipelines', 'Interview Training Ecosystems', 'Professional Readiness'],
    dark: true,
  },
];

const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Approach: React.FC = () => {
  return (
    <section id="approach" className="relative overflow-hidden bg-paper-200 py-28 text-ink md:py-36">
      <div className="bg-grid-light mask-fade pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-site px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow>Our strategy</Eyebrow>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-5xl">
            Dual-impact <span className="font-serif text-[1.1em] font-normal italic">positioning</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/55 md:text-lg">
            One partnership, two outcomes — stronger institutions and job-ready graduates.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {tracks.map((t, i) => (
            <article
              key={t.no}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col overflow-hidden rounded-[28px] p-8 transition-shadow duration-500 md:p-12 ${
                t.dark
                  ? 'bg-ink text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]'
                  : 'border border-paper-300 bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)]'
              }`}
            >
              {t.dark && (
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ember/20 blur-[90px]" />
              )}
              <div className="relative flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    t.dark ? 'bg-white/10 text-white/70' : 'bg-paper-200 text-ink/60'
                  }`}
                >
                  {t.audience}
                </span>
                <span className={`font-serif text-5xl italic ${t.dark ? 'text-white/20' : 'text-ink/15'}`}>{t.no}</span>
              </div>

              <h3 className="relative mt-12 text-2xl font-semibold tracking-tight md:text-3xl">{t.title}</h3>
              <p className={`relative mt-4 text-base leading-relaxed md:text-lg ${t.dark ? 'text-white/55' : 'text-ink/60'}`}>
                {t.desc}
              </p>

              <ul className={`relative mt-10 space-y-3 border-t pt-8 ${t.dark ? 'border-white/10' : 'border-paper-300'}`}>
                {t.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-full ${
                        t.dark ? 'bg-ember/15 text-ember-400' : 'bg-ink text-white'
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
