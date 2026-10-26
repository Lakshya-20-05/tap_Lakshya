import React from 'react';
import { ArrowRight, Eyebrow, Icon } from './ui';

const pillars = [
  { icon: 'scale', title: 'Merit-Based', subtitle: 'Integrity over everything.' },
  { icon: 'eye', title: 'Transparent', subtitle: 'Clear data, real outcomes.' },
  { icon: 'chart', title: 'Outcome-Driven', subtitle: 'Measured by success stories.' },
  { icon: 'network', title: 'Ecosystem-Thinking', subtitle: 'Building for the future.' },
];

const WhyAscend: React.FC = () => {
  return (
    <section className="grain relative overflow-hidden bg-ink py-28 text-white md:py-36">
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-ember/10 blur-[120px]" />
      <div className="relative mx-auto max-w-site px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-5">
            <Eyebrow tone="dark">The response</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-5xl">
              The answer to the{' '}
              <span className="font-serif text-[1.1em] font-normal italic">recruitment question.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/55 md:text-lg">
              Ascend is built on the belief that quality talent exists everywhere, but infrastructure does not. We
              provide the ecosystem that makes talent discoverable.
            </p>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-ember"
            >
              Explore Our Results
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`reveal reveal-delay-${(i % 2) + 1} group rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors duration-500 hover:border-ember/30 hover:bg-white/[0.04]`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white/70 transition-colors duration-500 group-hover:border-ember/40 group-hover:text-ember-400">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-8 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-sm text-white/45">{p.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAscend;
