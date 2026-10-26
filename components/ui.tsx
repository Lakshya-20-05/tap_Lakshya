import React from 'react';

type Tone = 'dark' | 'light';

export const Eyebrow: React.FC<{ children: React.ReactNode; tone?: Tone; className?: string }> = ({
  children,
  tone = 'light',
  className = '',
}) => (
  <div
    className={`inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] ${
      tone === 'dark' ? 'text-white/50' : 'text-ink/50'
    } ${className}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
    {children}
  </div>
);

export const ArrowRight: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
    <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowUpRight: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
    <path d="M6 14L14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const iconPaths: Record<string, React.ReactNode> = {
  building: (
    <>
      <path d="M4 20V8l8-4 8 4v12" />
      <path d="M9 20v-5h6v5M8 10h.01M12 10h.01M16 10h.01" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5M10 13h6M10 17h4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M6 20h12M5 8h14" />
      <path d="M5 8l-2.5 6a3 3 0 0 0 5 0zM19 8l-2.5 6a3 3 0 0 0 5 0z" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M7 16v-4M12 16V8M17 16v-7" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M12 7v4M12 11l-5.5 5.5M12 11l5.5 5.5" />
    </>
  ),
};

export const Icon: React.FC<{ name: keyof typeof iconPaths | string; className?: string }> = ({
  name,
  className = 'h-5 w-5',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {iconPaths[name]}
  </svg>
);
