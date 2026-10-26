import React from 'react';
import { ArrowUpRight, Eyebrow, Icon } from './ui';

const services = [
  {
    icon: 'building',
    label: 'Institutional Relations',
    title: 'Placement Outsourcing & Corporate Relations',
    desc: 'End-to-end management of the recruitment lifecycle, acting as the primary liaison between your institution and global firms.',
  },
  {
    icon: 'doc',
    label: 'Student Preparation',
    title: 'CV Architecture & Interview Strategy',
    desc: 'Moving beyond basic templates to build narrative-driven CVs and interview skills that stand up to consulting-grade scrutiny.',
  },
  {
    icon: 'link',
    label: 'Market Alignment',
    title: 'Skill Optimization & Partner Integration',
    desc: 'Curating student skillsets directly aligned with the specific technical and cultural requirements of our partner firms.',
  },
  {
    icon: 'target',
    label: 'Strategic Outcomes',
    title: 'Role-Fit Placement Excellence',
    desc: 'We prioritize precision over volume. Our goal is not mass placement, but the right role for the right individual.',
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <section id="services" className="bg-paper py-28 text-ink md:py-36">
      <div className="mx-auto max-w-site px-6">
        <div className="reveal grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Our services</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-5xl">
              Operational excellence in{' '}
              <span className="font-serif text-[1.1em] font-normal italic">recruitment.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink/55 lg:col-span-4 lg:col-start-9">
            Four integrated services that cover the full journey — from the institution&rsquo;s first corporate
            conversation to a student&rsquo;s signed offer.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`reveal reveal-delay-${(i % 2) + 1} group relative flex flex-col rounded-3xl border border-paper-300 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)] md:p-10`}
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-paper-200 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-ember-400">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-ink/20 transition-all duration-500 group-hover:text-ember" />
              </div>
              <div className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">{s.label}</div>
              <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight md:text-2xl">{s.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/60">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
