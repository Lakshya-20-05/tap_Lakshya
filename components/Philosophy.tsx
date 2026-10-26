import React from 'react';
import { ArrowRight, Container } from './ui';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="bg-paper py-24 text-ink md:py-36">
      <Container>
        <blockquote className="reveal font-display text-[clamp(2.5rem,7.5vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          Talent is universal.
          <br />
          <span className="text-ink/35">Opportunity is not.</span>
        </blockquote>
        <div className="reveal mt-14 flex flex-col gap-6 border-t border-ink/15 pt-8 md:mt-20 md:flex-row md:items-center md:justify-between md:gap-12">
          <p className="max-w-2xl text-lg leading-relaxed text-ink/65">
            Every part of our work is meant to give students outside the big cities a fair route into the job
            market.
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 font-medium text-ink transition-colors hover:text-ember-600"
          >
            Work with us
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Philosophy;
