import React from 'react';
import { ArrowRight, Eyebrow } from './ui';

const pipeline = [
  { step: 'Institution onboarded', meta: 'Placement board set up', done: true },
  { step: 'Students assessed', meta: 'Skill & role-fit mapping', done: true },
  { step: 'Readiness training', meta: 'CV, interviews, domain prep', done: true },
  { step: 'Partner interviews', meta: 'Startups to Fortune 500', done: false },
];

const Hero: React.FC = () => {
  return (
    <section id="top" className="grain relative overflow-hidden bg-ink pt-36 md:pt-44">
      {/* Backdrop */}
      <div className="bg-grid-dark mask-fade pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-ember/[0.12] blur-[120px]" />

      <div className="relative mx-auto grid max-w-site grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-7">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-xs text-white/70">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-ember/15">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            </span>
            Placement partner for Tier-2 &amp; Tier-3 institutions
          </div>

          <h1 className="text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[76px]">
            Bridging{' '}
            <span className="font-serif text-[1.12em] font-normal italic tracking-[-0.01em] text-white/90">untapped</span>
            <br className="hidden sm:block" /> talent with opportunity<span className="text-ember">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
            A premium institutional partner transforming the recruitment landscape for emerging hubs — so geography
            no longer decides a student&rsquo;s career.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-ember-400 hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.7)]"
            >
              Initiate Partnership
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#approach"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
            >
              View Our Model
            </a>
          </div>
        </div>

        {/* Pipeline card */}
        <div className="reveal reveal-delay-2 lg:col-span-5">
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-2 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="rounded-[20px] border border-white/5 bg-ink-800/80 p-6">
              <div className="mb-6 flex items-center justify-between">
                <Eyebrow tone="dark">Placement pipeline</Eyebrow>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Active
                </span>
              </div>

              <ol className="relative space-y-1">
                {pipeline.map((p, i) => (
                  <li key={p.step} className="relative flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/[0.03]">
                    {i < pipeline.length - 1 && (
                      <span className="absolute left-[25px] top-10 h-[calc(100%-16px)] w-px bg-white/10" />
                    )}
                    <span
                      className={`relative z-10 mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[10px] font-semibold ${
                        p.done ? 'border-ember/40 bg-ember/15 text-ember-400' : 'border-white/15 bg-ink text-white/40'
                      }`}
                    >
                      {p.done ? (
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M2.5 6.5l2.2 2L9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </span>
                    <div>
                      <div className={`text-sm font-medium ${p.done ? 'text-white' : 'text-white/60'}`}>{p.step}</div>
                      <div className="mt-0.5 text-xs text-white/40">{p.meta}</div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 border-t border-white/5 pt-5">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="text-white/50">Readiness</span>
                  <span className="font-mono text-white/70">Role-fit first</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-ember-600 to-ember-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capability strip */}
      <div className="relative mt-24 border-t border-white/5 py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pr-12 text-sm text-white/35">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-12" aria-hidden={k === 1}>
              {[
                'Placement Outsourcing',
                'Corporate Relations',
                'Institutional Branding',
                'CV Architecture',
                'Interview Strategy',
                'Skill Alignment',
                'Role-Fit Placement',
                'Partner Integration',
              ].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="text-ember/60">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
