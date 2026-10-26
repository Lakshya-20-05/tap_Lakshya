import React from 'react';
import { Container, SectionHeader } from './ui';

const tracks = [
  {
    no: '01',
    title: 'For colleges',
    desc: 'We set up and run the corporate relations and recruitment process that a Tier-1 college would have, and help the institution build its reputation with employers.',
    items: ['Placement office outsourcing', 'Corporate relationship management', 'Institutional branding'],
    dark: false,
  },
  {
    no: '02',
    title: 'For students',
    desc: 'We train students in the skills and interview preparation that employers ask for, so they are ready for roles at startups and Fortune 500 companies alike.',
    items: ['Skill alignment programmes', 'Interview training', 'Professional readiness'],
    dark: true,
  },
];

const Approach: React.FC = () => {
  return (
    <section id="approach" className="bg-paper-200 py-24 text-ink md:py-32">
      <Container>
        <SectionHeader
          title="Two sides of every partnership"
          intro="We work with the college and its students at the same time. Stronger institutions attract better recruiters, and better-prepared students convert those opportunities into offers."
        />

        <div className="mt-16 grid grid-cols-1 md:mt-20 md:grid-cols-2">
          {tracks.map((t) => (
            <article
              key={t.no}
              className={`reveal flex flex-col p-8 sm:p-10 xl:p-14 ${
                t.dark ? 'bg-ink text-white' : 'border border-paper-300 bg-white md:border-r-0'
              }`}
            >
              <span className={`font-display text-sm font-semibold ${t.dark ? 'text-ember' : 'text-ember-600'}`}>
                {t.no}
              </span>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">{t.title}</h3>
              <p className={`mt-5 max-w-xl text-lg leading-relaxed ${t.dark ? 'text-white/65' : 'text-ink/65'}`}>
                {t.desc}
              </p>
              <ul className={`mt-auto pt-12 ${t.dark ? 'text-white' : 'text-ink'}`}>
                {t.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center justify-between border-t py-4 text-base font-medium ${
                      t.dark ? 'border-white/15' : 'border-paper-300'
                    }`}
                  >
                    {item}
                    <span className="h-1.5 w-1.5 bg-ember" />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Approach;
