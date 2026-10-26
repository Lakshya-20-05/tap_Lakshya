import React from 'react';
import { Eyebrow } from './ui';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="relative bg-paper py-28 text-ink md:py-36">
      <div className="mx-auto max-w-site px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-5">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-5xl">
              Where student potential meets{' '}
              <span className="font-serif text-[1.1em] font-normal italic">professional demand.</span>
            </h2>
          </div>

          <div className="reveal reveal-delay-1 lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-ink/70 md:text-xl">
              We serve as the architectural layer for Tier-2 and Tier-3 institutions — an extended placement board
              that delivers high-impact recruitment infrastructure to colleges in emerging economic hubs.
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink/55 md:text-lg">
              By engineering connections between high-potential students and the global corporate ecosystem, we
              ensure that geography no longer dictates professional trajectory.
            </p>

            <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-paper-300 bg-paper-300 sm:grid-cols-3">
              {[
                { k: 'Focus', v: 'Tier-2 & Tier-3 colleges' },
                { k: 'Model', v: 'Extended placement board' },
                { k: 'Reach', v: 'Startups to Fortune 500' },
              ].map((item) => (
                <div key={item.k} className="bg-white p-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">{item.k}</dt>
                  <dd className="mt-2 text-sm font-semibold leading-snug">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
