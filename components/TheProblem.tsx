import React from 'react';
import { Eyebrow } from './ui';

const issues = [
  {
    title: 'Institutional Stagnation',
    desc: 'Legacy institutions often lack the specialized infrastructure and corporate networks required to compete in a modern, hyper-active job market.',
  },
  {
    title: 'Talent Fragmentation',
    desc: 'The professional ecosystem struggles to identify and integrate job-ready individuals from regions outside major metropolitan centers.',
  },
  {
    title: 'Exposure Deficits',
    desc: 'High-potential students remain invisible to the global economy due to a lack of structured, professional mentorship and exposure.',
  },
];

const TheProblem: React.FC = () => {
  return (
    <section className="grain relative overflow-hidden bg-ink py-28 text-white md:py-36">
      <div className="mx-auto max-w-site px-6">
        <div className="reveal grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow tone="dark">The landscape</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-5xl">
              Current placement systems have a{' '}
              <span className="font-serif text-[1.1em] font-normal italic text-ember-400">structural</span> problem.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/50 lg:col-span-4 lg:col-start-9">
            The gap isn&rsquo;t talent — it&rsquo;s infrastructure, networks and exposure. Three failures compound each
            other.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {issues.map((issue, i) => (
            <article
              key={issue.title}
              className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 transition-colors duration-500 hover:border-white/15 hover:bg-white/[0.04]`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/35">0{i + 1}</span>
                <span className="h-px w-10 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-ember/60" />
              </div>
              <h3 className="mt-14 text-xl font-semibold tracking-tight">{issue.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/50">{issue.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
