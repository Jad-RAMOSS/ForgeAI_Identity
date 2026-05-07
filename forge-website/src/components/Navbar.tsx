'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 60);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav" ref={navRef}>
      <div className="gl-blur" />
      <div className="gl-overlay" />
      <div className="gl-rim" />
      <div className="nav-inner">
        <Link className="nav-brand" href="/">
          <img className="nav-logo-dark" src="/uploads/Dark-logo-no-bckgrnd.png" alt="Forge AI" />
          <img className="nav-logo-light" src="/uploads/light-logo-no_bckgrnd.png" alt="Forge AI" />
          <span className="nav-wordmark">Forge AI</span>
        </Link>
        <div className="nav-links">
          <a className="nav-link" href="/#platform">Platform</a>
          <a className="nav-link" href="/#pillars">Why Us</a>
          <a className="nav-link" href="/#work">Work</a>
          <a className="nav-link" href="/#contact">Contact</a>
        </div>
        <div className="nav-right">
          <ThemeSwitcher />
          <a className="nav-cta" href="/#contact">Get Access</a>
        </div>
      </div>
    </nav>
  );
}
