import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`w-full px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`}>{children}</div>;

export const SectionHeader: React.FC<{
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: 'dark' | 'light';
}> = ({ title, intro, tone = 'light' }) => (
  <div className="reveal grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end md:gap-12">
    <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] md:text-5xl xl:text-6xl">
      {title}
    </h2>
    {intro && (
      <p
        className={`max-w-2xl text-lg leading-relaxed md:justify-self-end ${
          tone === 'dark' ? 'text-white/60' : 'text-ink/60'
        }`}
      >
        {intro}
      </p>
    )}
  </div>
);

export const ArrowRight: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
    <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M12 3L22 21H2z" fill="currentColor" />
      <path d="M12 12.5L16.2 20H7.8z" fill="#F97316" />
    </svg>
    <span className="font-display text-lg font-bold tracking-[-0.02em]">Ascend</span>
  </span>
);
