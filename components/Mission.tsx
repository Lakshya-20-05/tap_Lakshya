import React from 'react';
import { Container } from './ui';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="bg-paper py-24 text-ink md:py-32">
      <Container>
        <div className="stagger grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <h2
            style={{ '--i': 0 } as React.CSSProperties}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] md:text-5xl xl:text-6xl"
          >
            An extended placement office for <span className="mark">Tier-2 and Tier-3 colleges.</span>
          </h2>
          <div style={{ '--i': 1 } as React.CSSProperties} className="space-y-6 text-lg leading-relaxed text-ink/70 md:text-xl">
            <p>
              Ascend works with colleges in emerging cities to run their placement function. We handle corporate
              outreach, recruiter relationships and student preparation, the same work a Tier-1 placement office does.
            </p>
            <p>
              Students at these colleges are often as capable as their peers in large cities. They have fewer ways to
              reach recruiters. We build those connections so that where a student studies does not limit where they
              can work.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
