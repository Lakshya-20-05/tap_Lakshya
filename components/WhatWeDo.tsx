import React from 'react';
import { Container, SectionHeader } from './ui';

const services = [
  {
    title: 'Placement outsourcing and corporate relations',
    desc: 'We manage the recruitment cycle end to end and act as the main point of contact between your college and hiring companies.',
  },
  {
    title: 'CV and interview preparation',
    desc: 'Students build CVs around their real projects and practise interviews in the formats used by consulting and corporate recruiters.',
  },
  {
    title: 'Skill alignment and partner integration',
    desc: 'We match student training to the technical and workplace requirements of our partner companies.',
  },
  {
    title: 'Role-fit placement',
    desc: 'We place each student in a role that suits their skills and goals. Fit matters more to us than the number of offers.',
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <section id="services" className="bg-paper py-24 text-ink md:py-32">
      <Container>
        <SectionHeader
          title="What we do"
          intro="Four services that cover the placement cycle, from the first conversation with a recruiter to a signed offer letter."
        />

        <div className="stagger mt-16 grid grid-cols-1 gap-px border border-paper-300 bg-paper-300 sm:grid-cols-2 md:mt-20 xl:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              style={{ '--i': i } as React.CSSProperties}
              className="group relative flex flex-col overflow-hidden bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-white xl:min-h-[380px] xl:p-10"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-ember transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-ember-600 transition-colors duration-500 group-hover:text-ember">
                  0{i + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-ink/15 transition-all duration-500 group-hover:scale-150 group-hover:bg-ember" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold leading-tight tracking-[-0.015em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                {s.title}
              </h3>
              <p className="mt-auto pt-8 text-base leading-relaxed text-ink/65 transition-colors duration-500 group-hover:text-white/70">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
