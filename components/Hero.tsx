import React, { useEffect, useRef } from 'react';
import { Button, Container, Dot } from './ui';

const facts = [
  { label: 'Who we work with', value: 'Tier-2 and Tier-3 colleges' },
  { label: 'What we run', value: 'The full placement function' },
  { label: 'Where students go', value: 'Startups to Fortune 500 companies' },
];

const lines = [['Bridging', 'untapped', 'talent'], ['with', 'opportunity']];

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Headline drifts up and fades slightly as you scroll past it
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        if (titleRef.current) {
          titleRef.current.style.transform = `translateY(${y * -0.12}px)`;
          titleRef.current.style.opacity = String(1 - y / 1100);
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  let wordIndex = 0;

  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-[72px] text-white">
      <Container className="pb-16 pt-20 md:pb-20 md:pt-28 xl:pt-36">
        <h1
          ref={titleRef}
          className="font-display text-[clamp(2.75rem,8.4vw,9.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] will-change-transform"
        >
          {lines.map((line, li) => (
            <React.Fragment key={li}>
              {line.map((w, wi) => {
                const i = wordIndex++;
                const last = li === lines.length - 1 && wi === line.length - 1;
                return (
                  <React.Fragment key={w}>
                    <span className="word">
                      <span style={{ '--i': i } as React.CSSProperties}>{w}</span>
                    </span>
                    {!last && ' '}
                  </React.Fragment>
                );
              })}
              {li === 0 && <br className="hidden md:block" />}
            </React.Fragment>
          ))}
          <span className="dot-drop">
            <Dot />
          </span>
          <span className="sr-only">.</span>
        </h1>

        <div className="relative mt-14 md:mt-20">
          <div className="draw absolute inset-x-0 top-0 h-px bg-white/20" />
          <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-2 md:items-end">
            <p className="fade-up max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl" style={{ animationDelay: '0.7s' }}>
              Ascend runs placements for colleges in emerging cities. We connect their students with employers and
              prepare them for the roles those employers are hiring for.
            </p>
            <div className="fade-up flex flex-col gap-3 sm:flex-row md:justify-end" style={{ animationDelay: '0.85s' }}>
              <Button href="#contact">Partner with us</Button>
              <Button href="#approach" variant="outline" arrow={false}>
                See how it works
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative">
        <div className="draw absolute inset-x-0 top-0 h-px bg-white/10" />
        <Container>
          <dl className="stagger grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {facts.map((f, i) => (
              <div
                key={f.label}
                style={{ '--i': i + 2 } as React.CSSProperties}
                className={`group py-8 md:py-10 ${i > 0 ? 'md:pl-10' : ''} ${i < 2 ? 'md:pr-10' : ''}`}
              >
                <dt className="flex items-center gap-2 text-sm text-white/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember transition-transform duration-500 group-hover:scale-150" />
                  {f.label}
                </dt>
                <dd className="mt-2 font-display text-xl font-medium tracking-[-0.01em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 md:text-2xl">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
