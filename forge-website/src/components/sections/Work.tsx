'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Work() {
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
    <section className="work" id="work" ref={ref}>
      <div className="container">
        <div className="s-eyebrow">Selected Work</div>
        <h2 className="s-title">Our Projects.</h2>
        <p className="s-desc">Systems currently initializing. Each engagement is a bespoke architecture — built to the exact tolerances of the brand.</p>
        <div className="work-grid">

          <Link href="/work/web-design" className="glass w-card reveal" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div className="gl-blur" />
            <div className="g-mesh" />
            <div className="gl-overlay" />
            <div className="gl-rim" />
            <div className="w-hdr" style={{ background: 'none', padding: 0 }}>
              <img src="/uploads/damen-website.png" alt="Damen Website" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="w-body">
              <div className="w-badge"><div className="w-dot" />Live</div>
              <div className="w-title">Web Design</div>
              <div className="w-desc">Professional, creative websites — delivered faster than you&apos;d expect, at a cost that won&apos;t break production budgets.</div>
            </div>
          </Link>

          <div className="glass w-card reveal" style={{ transitionDelay: '.08s' }}>
            <div className="gl-blur" />
            <div className="g-mesh" />
            <div className="gl-overlay" />
            <div className="gl-rim" />
            <div className="w-hdr" style={{ background: 'linear-gradient(135deg,rgba(0,255,255,.13),rgba(80,60,240,.09) 45%,rgba(247,27,248,.11))' }}>
              <div className="w-hdr-label">AI</div>
            </div>
            <div className="w-body">
              <div className="w-badge"><div className="w-dot" />Initializing...</div>
              <div className="w-title">AI Brand Identity</div>
              <div className="w-desc">Full-system brand architecture — from design tokens to generative identity systems that evolve with your product.</div>
            </div>
          </div>

          <div className="glass w-card reveal" style={{ transitionDelay: '.16s' }}>
            <div className="gl-blur" />
            <div className="g-mesh" />
            <div className="gl-overlay" />
            <div className="gl-rim" />
            <div className="w-hdr" style={{ background: 'linear-gradient(135deg,rgba(140,60,220,.18),rgba(247,27,248,.09) 50%,rgba(0,100,200,.09))' }}>
              <div className="w-hdr-label">AG</div>
            </div>
            <div className="w-body">
              <div className="w-badge"><div className="w-dot" />Initializing...</div>
              <div className="w-title">Agentic AI</div>
              <div className="w-desc">Autonomous multi-agent systems operating at production scale — reasoning, acting, and improving without human bottlenecks.</div>
            </div>
          </div>

          <div className="glass w-card reveal" style={{ transitionDelay: '.24s' }}>
            <div className="gl-blur" />
            <div className="g-mesh" />
            <div className="gl-overlay" />
            <div className="gl-rim" />
            <div className="w-hdr" style={{ background: 'linear-gradient(135deg,rgba(0,200,200,.11),rgba(60,100,240,.09) 45%,rgba(140,60,220,.12))' }}>
              <div className="w-hdr-label">AW</div>
            </div>
            <div className="w-body">
              <div className="w-badge"><div className="w-dot" />Initializing...</div>
              <div className="w-title">Automation &amp; Workflows</div>
              <div className="w-desc">End-to-end pipeline engineering. Integrate, orchestrate, and automate complex business processes across any stack.</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
