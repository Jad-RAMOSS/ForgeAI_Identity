export default function Hero() {
  return (
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline preload="auto">
        <source src="/uploads/background.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />

      <div className="hero-eyebrow">Custom Agentic AI</div>
      <h1 className="hero-h1">
        Indistinguishable<br />from Reality
      </h1>
      <p className="hero-sub">Custom Agentic AI for brands that refuse to look average.</p>
      <a href="/#contact">
        <button className="btn">
          Initialize Core
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </a>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
