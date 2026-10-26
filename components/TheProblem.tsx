import React from 'react';
import { Container, SectionHeader } from './ui';

const issues = [
  {
    title: 'Limited placement infrastructure',
    desc: 'Many colleges do not have a dedicated placement team or an established list of corporate contacts, so they struggle to bring recruiters to campus.',
  },
  {
    title: 'Talent recruiters cannot find',
    desc: 'Employers find it hard to identify job-ready candidates outside the major cities, and strong students are often overlooked.',
  },
  {
    title: 'Little industry exposure',
    desc: 'Students get few chances for structured mentoring or contact with industry, so many walk into interviews underprepared.',
  },
];

const TheProblem: React.FC = () => {
  return (
    <section className="bg-ink py-24 text-white md:py-32">
      <Container>
        <SectionHeader
          tone="dark"
          title="Why current placement systems fall short"
          intro="Colleges in smaller cities have capable students but weak links to employers. The same three problems come up again and again."
        />

        <div className="relative mt-16 md:mt-20">
          <div className="draw absolute inset-x-0 top-0 h-px bg-white/15" />
          <div className="stagger grid grid-cols-1 md:grid-cols-3">
            {issues.map((issue, i) => (
              <article
                key={issue.title}
                style={{ '--i': i } as React.CSSProperties}
                className={`group relative border-b border-white/15 py-10 md:border-b-0 md:py-12 ${
                  i > 0 ? 'md:border-l md:pl-10' : ''
                } ${i < 2 ? 'md:pr-10' : ''}`}
              >
                <span
                  className={`absolute top-0 h-0.5 origin-left scale-x-0 bg-ember transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${
                    i > 0 ? 'left-0 right-0 md:left-10' : 'left-0 right-0'
                  } ${i < 2 ? 'md:right-10' : ''}`}
                />
                <span className="inline-block font-display text-sm font-semibold text-ember transition-transform duration-500 group-hover:translate-x-1">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.015em]">{issue.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/80">
                  {issue.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TheProblem;
