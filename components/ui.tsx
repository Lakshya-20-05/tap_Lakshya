import React, { useEffect, useRef } from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`w-full px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`}>{children}</div>;

export const SectionHeader: React.FC<{
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: 'dark' | 'light';
}> = ({ title, intro, tone = 'light' }) => (
  <div className="stagger grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end md:gap-12">
    <h2
      style={{ '--i': 0 } as React.CSSProperties}
      className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] md:text-5xl xl:text-6xl"
    >
      {title}
    </h2>
    {intro && (
      <p
        style={{ '--i': 1 } as React.CSSProperties}
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

/** Round orange full stop, echoing the dot in the logo. */
export const Dot: React.FC<{ className?: string }> = ({ className = 'bg-ember' }) => (
  <span
    aria-hidden="true"
    className={`ml-[0.05em] inline-block h-[0.15em] w-[0.15em] rounded-full align-baseline transition-colors duration-700 ${className}`}
  />
);

export const Logo: React.FC<{ className?: string }> = ({ className = 'h-7' }) => (
  <img src={`${import.meta.env.BASE_URL}ascend-logo.png`} alt="ASCEND" width={666} height={140} className={`w-auto select-none ${className}`} draggable={false} />
);

/** Pulls an element slightly toward the cursor while hovered (fine pointers only). */
export function useMagnetic<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return ref;
}

type Variant = 'primary' | 'outline' | 'light' | 'dark';

const variants: Record<Variant, { base: string; fill: string }> = {
  // orange, fills white on hover
  primary: { base: 'bg-ember text-ink', fill: '#FFFFFF' },
  // outlined on dark, fills white on hover
  outline: { base: 'border border-white/25 text-white hover:border-white hover:text-ink', fill: '#FFFFFF' },
  // white, fills orange on hover
  light: { base: 'bg-white text-ink', fill: '#F97316' },
  // black, fills white on hover
  dark: { base: 'bg-ink text-white hover:text-ink', fill: '#FFFFFF' },
};

export const Button: React.FC<{
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  magnetic?: boolean;
  className?: string;
  onClick?: () => void;
}> = ({ href, children, variant = 'primary', arrow = true, magnetic = true, className = '', onClick }) => {
  const ref = useMagnetic<HTMLAnchorElement>(magnetic ? 0.25 : 0);
  const v = variants[variant];
  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      style={{ '--btn-fill': v.fill } as React.CSSProperties}
      className={`btn group inline-flex items-center justify-center gap-2.5 px-7 py-4 font-medium ${v.base} ${className}`}
    >
      {children}
      {arrow && (
        <span className="arrow-swap">
          <ArrowRight />
          <ArrowRight />
        </span>
      )}
    </a>
  );
};
