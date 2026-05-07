'use client';

import { useEffect, useRef } from 'react';

const cards = [
  {
    num: '01',
    title: 'Launch Faster.',
    body: "Go from concept to deployment in days, not months. We eliminate the back-and-forth, the delays, and the bloat — so you ship what matters, on time.",
    icon: (id: string) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v16M2 10h16" stroke={`url(#${id})`} strokeWidth="1.8" strokeLinecap="round"/>
        <defs>
          <linearGradient id={id} x1="2" y1="2" x2="18" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Look Premium.',
    body: "World-class creative direction and professional execution — at a fraction of the cost. Your brand gets the quality of a full production house without the price tag.",
    icon: (id: string) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3.5" stroke={`url(#${id})`} strokeWidth="1.8"/>
        <circle cx="10" cy="10" r="8" stroke={`url(#${id})`} strokeWidth="1" strokeDasharray="2.5 2.5"/>
        <defs>
          <linearGradient id={id} x1="2" y1="2" x2="18" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Lower Costs.',
    body: "Replace high-overhead production with custom intelligent agents. One system does the work of a team — without the coordination overhead or human error.",
    icon: (id: string) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 15l4.5-4.5 3.5 3.5 5-6.5" stroke={`url(#${id})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id={id} x1="3" y1="3" x2="17" y2="17" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function Pillars() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="pillars" id="pillars" ref={ref}>
      <div className="container">
        <div className="s-eyebrow">Why Forge AI</div>
        <h2 className="s-title">Built Different.</h2>
        <p className="s-desc">We don&apos;t sell off-the-shelf automation. We architect bespoke intelligent systems that make your brand indistinguishable from the future.</p>
        <div className="pillars-grid">
          {cards.map((card, i) => (
            <div className="glass p-card reveal" key={card.num} style={{ transitionDelay: i === 0 ? undefined : `${i * 0.1}s` }}>
              <div className="gl-blur" />
              <div className="g-mesh" />
              <div className="gl-overlay" />
              <div className="gl-rim" />
              <div className="gl-content">
                <div className="p-num">{card.num}</div>
                <div className="p-icon">{card.icon(`pg${i}`)}</div>
                <div className="p-title">{card.title}</div>
                <div className="p-body">{card.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
