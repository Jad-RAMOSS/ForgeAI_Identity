'use client';

import { useEffect } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export default function WebDesignPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="page-eyebrow">Selected Work</div>
        <h1 className="page-h1">Web Design</h1>
        <p className="page-sub">
          Professional, creative websites — built faster than the industry standard and at a fraction of the usual production cost.
        </p>
      </div>

      <hr className="section-divider" />

      <section className="projects">
        <div className="projects-grid">
          <a
            href="https://damen-website.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="glass proj-card reveal"
          >
            <div className="gl-blur" />
            <div className="g-mesh" />
            <div className="gl-overlay" />
            <div className="gl-rim" />
            <div className="proj-thumb">
              <img src="/uploads/damen-website.png" alt="Damen Website" />
            </div>
            <div className="proj-body gl-content">
              <div className="proj-badge"><div className="proj-dot" />Live</div>
              <div className="proj-title">Damen ePayment Website</div>
              <div className="proj-desc">
                A professional website for Damen, one of the top leading e-payment companies in Egypt — delivered in record time, fully powered by AI.
              </div>
              <div className="proj-link">
                View Live
                <svg viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      <hr className="section-divider" />
    </>
  );
}
