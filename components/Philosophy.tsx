import React from 'react';
import { Eyebrow } from './ui';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-paper py-32 text-ink md:py-44">
      <div className="bg-grid-light mask-fade pointer-events-none absolute inset-0" />
      <div className="reveal relative mx-auto max-w-5xl px-6 text-center">
        <Eyebrow>The Ascend philosophy</Eyebrow>
        <blockquote className="mt-10 font-serif text-5xl leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-8xl">
          Talent is universal.
          <br />
          <span className="italic text-ink/40">
            Opportunity is not<span className="not-italic text-ember">.</span>
          </span>
        </blockquote>
        <div className="mx-auto mt-12 flex max-w-md items-center gap-4">
          <span className="h-px flex-1 bg-ink/10" />
          <span className="text-sm text-ink/50">We exist to close that gap.</span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
