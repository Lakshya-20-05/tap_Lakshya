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

        <div className="mt-16 grid grid-cols-1 gap-px border border-paper-300 bg-paper-300 sm:grid-cols-2 md:mt-20 xl:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group flex flex-col bg-paper p-8 transition-colors duration-300 hover:bg-white xl:min-h-[360px] xl:p-10"
            >
              <span className="font-display text-sm font-semibold text-ember-600">0{i + 1}</span>
              <h3 className="mt-6 font-display text-2xl font-semibold leading-tight tracking-[-0.015em]">{s.title}</h3>
              <p className="mt-auto pt-8 text-base leading-relaxed text-ink/65">{s.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
