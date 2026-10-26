import React from 'react';
import { Button, Container } from './ui';

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
        <div className="stagger grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end md:gap-12">
          <h2
            style={{ '--i': 0 } as React.CSSProperties}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] md:text-5xl xl:text-6xl"
          >
            Why colleges work with <span className="mark">Ascend</span>
          </h2>
          <div style={{ '--i': 1 } as React.CSSProperties} className="md:justify-self-end">
            <p className="max-w-2xl text-lg leading-relaxed text-white/60">
              Capable students are spread across the country, but access to recruiters is concentrated in a few
              cities. We give partner colleges that access and help their students make use of it.
            </p>
            <Button href="#contact" variant="light" className="mt-8">
              Talk to our team
            </Button>
          </div>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="draw absolute inset-x-0 top-0 h-px bg-white/15" />
          <div className="stagger grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                style={{ '--i': i } as React.CSSProperties}
                className={`group border-b border-white/15 py-10 xl:border-b-0 xl:py-12 ${
                  i % 2 === 1 ? 'sm:border-l sm:pl-8' : 'sm:pr-8'
                } ${i > 0 ? 'xl:border-l xl:pl-8' : ''} ${i < 3 ? 'xl:pr-8' : ''}`}
              >
                <h3 className="flex items-center gap-3 font-display text-2xl font-semibold tracking-[-0.015em]">
                  <span className="h-2 w-0 rounded-full bg-ember transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-2" />
                  <span className="transition-colors duration-300 group-hover:text-ember">{p.title}</span>
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyAscend;
