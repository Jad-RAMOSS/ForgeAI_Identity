'use client';

import { useEffect, useRef } from 'react';

interface StatDef {
  target: number;
  prefix: string;
  suffix: string;
  decimals: number;
  commas: boolean;
  label: string;
  display: string;
  delay: string;
}

const stats: StatDef[] = [
  { target: 5000, prefix: '', suffix: '+', decimals: 0, commas: true,  label: 'Agents Deployed',    display: '5,000+', delay: '0s' },
  { target: 50,   prefix: '', suffix: 'M+', decimals: 0, commas: false, label: 'Messages Processed', display: '50M+',   delay: '.08s' },
  { target: 99.999, prefix: '', suffix: '%', decimals: 3, commas: false, label: 'Uptime',            display: '99.999%', delay: '.16s' },
  { target: 500,  prefix: '<', suffix: 'ms', decimals: 0, commas: false, label: 'Response Time',    display: '<500ms',  delay: '.24s' },
];

function animateCount(el: HTMLElement, stat: StatDef) {
  if ((el as any)._running) return;
  (el as any)._running = true;
  const duration = 1800;
  const t0 = performance.now();

  function fmt(v: number): string {
    if (stat.decimals > 0) return v.toFixed(stat.decimals);
    const n = Math.floor(v);
    return stat.commas ? n.toLocaleString() : String(n);
  }

  function tick(now: number) {
    const pct = Math.min((now - t0) / duration, 1);
    const ease = pct < 1 ? 1 - Math.pow(2, -10 * pct) : 1;
    el.textContent = stat.prefix + fmt(ease * stat.target) + stat.suffix;
    if (pct < 1) {
      requestAnimationFrame(tick);
    } else {
      (el as any)._running = false;
    }
  }
  requestAnimationFrame(tick);
}

export default function Platform() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = statsRef.current;
    if (!container) return;

    const statEls = container.querySelectorAll<HTMLElement>('.stat');
    const numEls = container.querySelectorAll<HTMLElement>('.stat-num[data-idx]');

    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.12 }
    );
    statEls.forEach(el => revealObs.observe(el));

    const statObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          const numEl = e.target.querySelector<HTMLElement>('.stat-num[data-idx]');
          if (!numEl) return;
          const idx = parseInt(numEl.dataset.idx || '0', 10);
          if (e.isIntersecting) {
            animateCount(numEl, stats[idx]);
          } else {
            (numEl as any)._running = false;
          }
        });
      },
      { threshold: 0.4 }
    );
    statEls.forEach(el => statObs.observe(el));

    return () => { revealObs.disconnect(); statObs.disconnect(); };
  }, []);

  return (
    <section className="after-hero" id="platform">
      <div className="container">
        <p className="ah-intro">Built on-top of the world&apos;s leading AI providers.</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '52px' }}>
          <div className="no-lock">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <rect x="1.5" y="4.5" width="8" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.1" />
              <path d="M3.5 4.5V3A2 2 0 017.5 3v1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
            No Lock-In
          </div>
        </div>

        <div className="providers">
          {[
            { src: '/uploads/anthropic.png', alt: 'Anthropic' },
            { src: '/uploads/OpenAI.svg.png', alt: 'OpenAI' },
            { src: '/uploads/Gemini.svg.png', alt: 'Gemini' },
            { src: '/uploads/Perplexity.svg.png', alt: 'Perplexity' },
            { src: '/uploads/meta.png.webp', alt: 'Meta' },
          ].map(p => (
            <div key={p.alt} className="provider">
              <img src={p.src} alt={p.alt} className="provider-logo" />
            </div>
          ))}
        </div>

        <div className="stats-row" ref={statsRef}>
          {stats.map((s, i) => (
            <div key={s.label} className="stat reveal" style={{ transitionDelay: s.delay }}>
              <span className="stat-num" data-idx={i}>{s.display}</span>
              <span className="stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
