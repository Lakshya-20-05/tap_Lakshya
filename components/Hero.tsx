import React from 'react';
import { ArrowRight, Container } from './ui';

const facts = [
  { label: 'Who we work with', value: 'Tier-2 and Tier-3 colleges' },
  { label: 'What we run', value: 'The full placement function' },
  { label: 'Where students go', value: 'Startups to Fortune 500 companies' },
];

const Hero: React.FC = () => {
  return (
    <section id="top" className="bg-ink pt-[72px] text-white">
      <Container className="pb-16 pt-20 md:pb-20 md:pt-28 xl:pt-36">
        <h1 className="reveal font-display text-[clamp(2.75rem,8.4vw,9.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          Bridging untapped talent
          <br className="hidden md:block" /> with opportunity<span className="text-ember">.</span>
        </h1>

        <div className="reveal mt-14 grid grid-cols-1 gap-10 border-t border-white/15 pt-10 md:mt-20 md:grid-cols-2 md:items-end">
          <p className="max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
            Ascend runs placements for colleges in emerging cities. We connect their students with
            employers and prepare them for the roles those employers are hiring for.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-ember px-7 py-4 font-medium text-ink transition-colors duration-200 hover:bg-ember-400"
            >
              Partner with us
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#approach"
              className="inline-flex items-center justify-center border border-white/25 px-7 py-4 font-medium text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-ink"
            >
              See how it works
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <dl className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {facts.map((f, i) => (
              <div key={f.label} className={`py-8 md:py-10 ${i > 0 ? 'md:pl-10' : ''} ${i < 2 ? 'md:pr-10' : ''}`}>
                <dt className="text-sm text-white/45">{f.label}</dt>
                <dd className="mt-2 font-display text-xl font-medium tracking-[-0.01em] md:text-2xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
