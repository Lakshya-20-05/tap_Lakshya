import React from 'react';
import { ArrowRight, Container } from './ui';

const pillars = [
  { title: 'Merit-based', desc: 'Students are put forward on ability and nothing else.' },
  { title: 'Transparent', desc: 'Partner colleges see the same data and outcomes we do.' },
  { title: 'Outcome-driven', desc: 'We measure our work by the students who get hired.' },
  { title: 'Long-term', desc: 'We build recruiter relationships that last beyond a single season.' },
];

const WhyAscend: React.FC = () => {
  return (
    <section id="why" className="bg-ink py-24 text-white md:py-32">
      <Container>
        <div className="reveal grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end md:gap-12">
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] md:text-5xl xl:text-6xl">
            Why colleges work with Ascend
          </h2>
          <div className="md:justify-self-end">
            <p className="max-w-2xl text-lg leading-relaxed text-white/60">
              Capable students are spread across the country, but access to recruiters is concentrated in a few
              cities. We give partner colleges that access and help their students make use of it.
            </p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 bg-white px-7 py-4 font-medium text-ink transition-colors duration-200 hover:bg-ember"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-white/15 sm:grid-cols-2 md:mt-20 xl:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal border-b border-white/15 py-10 sm:px-0 xl:border-b-0 xl:py-12 ${
                i % 2 === 1 ? 'sm:border-l sm:pl-8' : 'sm:pr-8'
              } ${i > 0 ? 'xl:border-l xl:pl-8' : ''} ${i < 3 ? 'xl:pr-8' : ''}`}
            >
              <h3 className="font-display text-2xl font-semibold tracking-[-0.015em]">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/60">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyAscend;
