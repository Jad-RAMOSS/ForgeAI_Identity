// cat-brand.jsx — Logo, Iconography, Motion, Voice/Tone, Sidebar, App root
const { useState, useEffect } = React;

// ── BRAND ESSENCE ─────────────────────────────────────────────────────────────
function BrandSection() {
  const pillars = [
    { n: '01', title: 'Luminance', body: 'Every element must simulate an internal light source. Surfaces emit; they do not merely reflect. Glow is structural, not decorative.' },
    { n: '02', title: 'Material Precision', body: 'Backdrop blur, sharp reflective edges, and gaseous internal gradients are non-negotiable. Glass is a physics problem, not a visual trend.' },
    { n: '03', title: 'Minimalism', body: 'Generous whitespace is a brand mandate. The F logo must always float with room to breathe. Never crowd the transmissive material.' },
  ];
  return (
    <section className="sw" id="section-01">
      <div className="sh">
        <div className="eyebrow">01 — Brand Essence</div>
        <h2 className="stitle">Neon-Transmissive</h2>
        <p className="sdesc">Forge AI bridges human potential and intelligent automation. The brand language is cyber-premium, precise, and visionary. We are the architects of the future — not the salespeople.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 28 }}>
        {pillars.map(p => (
          <div key={p.n} style={{
            background: 'linear-gradient(148deg, rgba(255,255,255,0.15) 0%, rgba(225,228,242,0.1) 55%, rgba(0,255,255,0.06) 100%)',
            border: '1px solid rgba(255,255,255,0.22)',
            borderRadius: 'var(--r20)', padding: 26, position: 'relative', overflow: 'hidden',
            backdropFilter: 'blur(28px) saturate(160%)',
            WebkitBackdropFilter: 'blur(28px) saturate(160%)',
            boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,0.38), inset 0 -1px 0 rgba(0,255,255,0.14), 0 6px 32px rgba(0,0,0,0.32)',
          }}>
            {/* Specular top rim */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.32) 30%,rgba(247,27,248,0.22) 60%,transparent)', pointerEvents: 'none' }} />
            {/* Gaseous corner glow */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: 100, height: 100, background: 'radial-gradient(ellipse at top right,rgba(247,27,248,0.14),transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: 80, height: 80, background: 'radial-gradient(ellipse at bottom left,rgba(0,255,255,0.08),transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ fontFamily: 'Orbitron,var(--font)', fontSize: 30, fontWeight: 900, background: 'linear-gradient(90deg,var(--fuchsia),var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 10, position: 'relative' }}>{p.n}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--t1)', marginBottom: 8, position: 'relative' }}>{p.title}</div>
            <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--t2)', lineHeight: 1.7, position: 'relative' }}>{p.body}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div style={{
          background: 'linear-gradient(148deg, rgba(255,255,255,0.13), rgba(225,228,242,0.08))',
          border: '1px solid rgba(255,255,255,0.2)', borderRadius: 'var(--r20)', padding: 26,
          backdropFilter: 'blur(24px) saturate(150%)', WebkitBackdropFilter: 'blur(24px) saturate(150%)',
          boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,0.32), inset 0 -1px 0 rgba(0,255,255,0.08), 0 6px 28px rgba(0,0,0,0.28)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.28) 40%,transparent)', pointerEvents: 'none' }} />
          <div className="subh">Personality</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {['Cyber-premium', 'Precise', 'Visionary', 'Authoritative', 'Calm', 'Intelligent', 'Technical', 'Tactile'].map(t => (
              <div key={t} className="tag">{t}</div>
            ))}
          </div>
        </div>
        <div style={{
          background: 'linear-gradient(148deg, rgba(247,27,248,0.16), rgba(225,228,242,0.08) 50%, rgba(0,255,255,0.07))',
          border: '1px solid rgba(247,27,248,0.35)', borderRadius: 'var(--r20)', padding: 26,
          backdropFilter: 'blur(24px) saturate(165%)', WebkitBackdropFilter: 'blur(24px) saturate(165%)',
          boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,255,255,0.14), 0 6px 32px rgba(0,0,0,0.28), 0 0 50px rgba(247,27,248,0.1)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(247,27,248,0.35) 40%,rgba(0,255,255,0.28) 70%,transparent)', pointerEvents: 'none' }} />
          <div className="subh">Brand Voice</div>
          <blockquote style={{ fontFamily: 'var(--font)', fontSize: 19, fontWeight: 300, fontStyle: 'italic', color: 'var(--t1)', lineHeight: 1.6, borderLeft: '3px solid var(--fuchsia)', paddingLeft: 18, marginBottom: 10 }}>
            "Indistinguishable from reality."
          </blockquote>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--t3)' }}>Technical yet tactile. We value clarity as much as we value the glow.</div>
        </div>
      </div>
    </section>
  );
}

// ── LOGO SECTION ──────────────────────────────────────────────────────────────
function LogoSection() {
  const rules = [
    { title: 'File Format', body: 'Always transparent PNG — minimum 512×512px source. Never JPEG. Never with a solid background fill of any color.' },
    { title: 'Clear Space', body: 'Minimum clearance on all sides equal to the cap-height of the F. The logo must always breathe — never clip it.' },
    { title: 'Minimum Size', body: 'Digital: 32px height minimum. Print: 8mm minimum. Below these limits, use the wordmark alone.' },
    { title: 'Dark Mode', body: 'Glow variant. drop-shadow: Fuchsia 24px + Cyan 48px. Add glowPulse animation at 3s ease-in-out infinite.' },
    { title: 'Light Mode', body: 'Refractive variant. drop-shadow: rgba(0,150,220,0.3) at 8px only. No pulse. Emphasize structural clarity.' },
    { title: 'Never', body: 'Do not stretch, rotate, recolor, place on a gradient, or apply drop shadows that contradict the active theme.' },
  ];
  return (
    <section className="sw" id="section-02">
      <div className="sh">
        <div className="eyebrow">02 — Logo System</div>
        <h2 className="stitle">The Neon-Glass F</h2>
        <p className="sdesc">The F is a monolithic, intelligent entity. Its treatment changes precisely with the active theme. Always a transparent PNG — never backgrounded, never flattened.</p>
      </div>
      <div className="ds-split" style={{ marginBottom: 24 }}>
        <div className="dp-dark">
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F71BF8', marginBottom: 12 }}>Dark Mode — Glow Variant</div>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 180, height: 180 }}>
            <div style={{ position: 'absolute', inset: -20, borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(247,27,248,0.28) 0%,rgba(0,255,255,0.12) 55%,transparent 75%)', filter: 'blur(18px)', animation: 'pulse-glow 3s ease-in-out infinite' }} />
            <img src="uploads/Dark-logo-no-bckgrnd.png" style={{ width: 160, height: 160, objectFit: 'contain', position: 'relative', filter: 'drop-shadow(0 0 24px rgba(247,27,248,0.8)) drop-shadow(0 0 48px rgba(0,255,255,0.4))' }} alt="Forge AI dark logo" />
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', marginTop: 10 }}>Gaseous Infusion · Bloom Active</div>
          <div style={{ fontSize: 10, color: 'rgba(247,27,248,0.55)', marginTop: 4, letterSpacing: '0.08em' }}>filter: drop-shadow glow · pulse animation</div>
        </div>
        <div className="dp-light">
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0090CC', marginBottom: 12 }}>Light Mode — Refractive Variant</div>
          <img src="uploads/light-logo-no_bckgrnd.png" style={{ width: 160, height: 160, objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(0,150,220,0.3)) drop-shadow(0 0 2px rgba(247,27,248,0.18))' }} alt="Forge AI light logo" />
          <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.32)', marginTop: 10 }}>Caustic Refraction · Clarity Mode</div>
          <div style={{ fontSize: 10, color: '#0090CC', marginTop: 4, letterSpacing: '0.08em', opacity: 0.7 }}>subtle drop-shadow only · no pulse</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 28 }}>
        {rules.map(r => (
          <div key={r.title} style={{
            background: 'linear-gradient(148deg, rgba(0,255,255,0.13) 0%, rgba(255,255,255,0.08) 100%)',
            border: '1px solid rgba(0,255,255,0.28)',
            borderRadius: 'var(--r12)', padding: 18,
            backdropFilter: 'blur(20px) saturate(145%)', WebkitBackdropFilter: 'blur(20px) saturate(145%)',
            boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,255,255,0.12), 0 4px 18px rgba(0,0,0,0.24)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,255,255,0.3) 50%,transparent)', pointerEvents: 'none' }} />
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: 7 }}>{r.title}</div>
            <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--t2)', lineHeight: 1.65 }}>{r.body}</div>
          </div>
        ))}
      </div>
      {/* Liquid glass reference */}
      <div className="subh">Reference — Liquid Glass Material Language</div>
      <div style={{ borderRadius: 'var(--r20)', overflow: 'hidden', border: '1px solid var(--bds)', marginBottom: 0 }}>
        <img src="uploads/liquid-glass-ref.jpg" style={{ width: '100%', display: 'block' }} alt="Liquid glass material reference" />
      </div>
    </section>
  );
}

// ── ICONOGRAPHY ───────────────────────────────────────────────────────────────
function IconSection() {
  const icons = [
    { name: 'API', svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="11" width="22" height="6" rx="3" stroke="url(#ig1)" strokeWidth="1.5"/><path d="M14 3v5M14 20v5M3 14h5M20 14h5" stroke="url(#ig1)" strokeWidth="1.5" strokeLinecap="round"/><defs><linearGradient id="ig1" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse"><stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/></linearGradient></defs></svg> },
    { name: 'Deploy', svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3L25 14L14 25L3 14L14 3Z" stroke="url(#ig2)" strokeWidth="1.5"/><circle cx="14" cy="14" r="3" fill="url(#ig2)"/><defs><linearGradient id="ig2" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse"><stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/></linearGradient></defs></svg> },
    { name: 'Model', svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="4" stroke="url(#ig3)" strokeWidth="1.5"/><circle cx="14" cy="14" r="9" stroke="url(#ig3)" strokeWidth="1" strokeDasharray="3 3"/><defs><linearGradient id="ig3" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/></linearGradient></defs></svg> },
    { name: 'Automate', svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14C5 9 9 5 14 5s9 4 9 9-4 9-9 9" stroke="url(#ig4)" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 23v-4M11 21l3 2 3-2" stroke="url(#ig4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="ig4" x1="5" y1="5" x2="23" y2="23" gradientUnits="userSpaceOnUse"><stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/></linearGradient></defs></svg> },
    { name: 'Analytics', svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 22L11 14l5 4 7-10" stroke="url(#ig5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="ig5" x1="5" y1="12" x2="23" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/></linearGradient></defs></svg> },
    { name: 'Security', svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3L5 7v7c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-4Z" stroke="url(#ig6)" strokeWidth="1.5" strokeLinejoin="round"/><defs><linearGradient id="ig6" x1="5" y1="3" x2="23" y2="23" gradientUnits="userSpaceOnUse"><stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/></linearGradient></defs></svg> },
    { name: 'Settings', svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="3" stroke="url(#ig7)" strokeWidth="1.5"/><path d="M14 4v3M14 21v3M4 14h3M21 14h3M7 7l2 2M19 19l2 2M7 21l2-2M19 9l2-2" stroke="url(#ig7)" strokeWidth="1.5" strokeLinecap="round"/><defs><linearGradient id="ig7" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/></linearGradient></defs></svg> },
    { name: 'Connect', svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="7" cy="14" r="3" stroke="url(#ig8)" strokeWidth="1.5"/><circle cx="21" cy="7" r="3" stroke="url(#ig8)" strokeWidth="1.5"/><circle cx="21" cy="21" r="3" stroke="url(#ig8)" strokeWidth="1.5"/><path d="M10 14h4M16.5 8.5L18 9.5M16.5 19.5L18 18.5" stroke="url(#ig8)" strokeWidth="1.5" strokeLinecap="round"/><defs><linearGradient id="ig8" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#F71BF8"/><stop offset="1" stopColor="#00FFFF"/></linearGradient></defs></svg> },
  ];
  const rules = [
    { r: 'Stroke Style', d: '1.5px outline only — never filled. Gradient: Fuchsia (#F71BF8) → Cyan (#00FFFF), 45° diagonal. Both gradient stops required.' },
    { r: 'Shape Language', d: 'Capsule and rounded-rectangle forms preferred. Reference the F-logo capsule geometry for visual consistency across the system.' },
    { r: 'Size Scale', d: '16px inline/label · 20px UI element · 28px feature · 40px hero. Scale stroke proportionally with icon size.' },
    { r: 'Spacing', d: 'Minimum 4px clearance between icon and adjacent text. Align to text baseline in inline contexts, center in containers.' },
    { r: 'Never', d: 'Do not use solid fills, monochrome colors, or strokes not using the brand gradient. Do not mix icon styles from external libraries.' },
    { r: 'Illustration', d: 'Complex illustrations follow the same rules: outline-only, gradient strokes, capsule geometry, dark glass panel backgrounds.' },
  ];
  return (
    <section className="sw" id="section-07">
      <div className="sh">
        <div className="eyebrow">07 — Iconography</div>
        <h2 className="stitle">Icon Language</h2>
        <p className="sdesc">Outline only. Fuchsia-to-Cyan gradient strokes on every icon — never solid fills, never monochrome. The icon system mirrors the F-logo's capsule geometry and transmissive character.</p>
      </div>
      <div className="ic-grid" style={{ marginBottom: 32 }}>
        {icons.map(ic => (
          <div key={ic.name} className="ic-card">
            {ic.svg}
            <div className="ic-name">{ic.name}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
        {rules.map(r => (
          <div key={r.r} style={{ background: 'var(--sf)', border: '1px solid var(--bds)', borderRadius: 'var(--r12)', padding: 18 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: 7 }}>{r.r}</div>
            <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--t2)', lineHeight: 1.65 }}>{r.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── MOTION ────────────────────────────────────────────────────────────────────
function MotionSection() {
  const easings = [
    { name: 'Brand Spring', css: 'cubic-bezier(0.22, 1, 0.36, 1)', use: 'Buttons, modals, cards entering. The signature Forge AI feel.' },
    { name: 'Smooth', css: 'cubic-bezier(0.4, 0, 0.2, 1)', use: 'State changes, color transitions, opacity fades.' },
    { name: 'Decelerate', css: 'cubic-bezier(0, 0, 0.2, 1)', use: 'Elements entering from offscreen — slide-in, fly-in.' },
    { name: 'Accelerate', css: 'cubic-bezier(0.4, 0, 1, 1)', use: 'Elements exiting — dismissals, slide-out.' },
  ];
  const durations = [
    { name: 'Instant', val: '100ms', use: 'Tooltip show/hide, immediate feedback' },
    { name: 'Fast', val: '150ms', use: 'Hover states, toggles, focus rings' },
    { name: 'Normal', val: '300ms', use: 'State transitions, color, size changes' },
    { name: 'Expressive', val: '450ms', use: 'Page transitions, modal entry, reveals' },
    { name: 'Deliberate', val: '600ms', use: 'Hero animations, logo reveals' },
    { name: 'Pulse', val: '3000ms', use: 'Ambient glow pulse — logo, bg orbs' },
  ];
  return (
    <section className="sw" id="section-08">
      <div className="sh">
        <div className="eyebrow">08 — Motion</div>
        <h2 className="stitle">Animation Principles</h2>
        <p className="sdesc">Motion reinforces material behavior. Glass surfaces spring into place, glow blooms and fades with intent. Every transition must feel like physics — not decoration.</p>
      </div>
      <div className="subh">Easing Curves</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 44 }}>
        {easings.map((e, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '14px 22px', borderRadius: 'var(--r12)', transition: 'background 0.18s', cursor: 'default' }}
            onMouseEnter={ev => ev.currentTarget.style.background = 'var(--sf)'}
            onMouseLeave={ev => ev.currentTarget.style.background = 'transparent'}>
            <div style={{ minWidth: 130, fontSize: 13, fontWeight: 700, color: 'var(--t1)' }}>{e.name}</div>
            <code style={{ fontSize: 11 }}>{e.css}</code>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--t3)', marginLeft: 'auto', maxWidth: 260, textAlign: 'right' }}>{e.use}</div>
          </div>
        ))}
      </div>
      <div className="subh">Duration Scale</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 44 }}>
        {durations.map((d, i) => (
          <div key={i} style={{ background: 'var(--sf)', border: '1px solid var(--bds)', borderRadius: 'var(--r12)', padding: '14px 18px' }}>
            <div style={{ fontSize: 22, fontWeight: 700, background: 'linear-gradient(90deg,var(--fuchsia),var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 3 }}>{d.val}</div>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--t2)', marginBottom: 4 }}>{d.name}</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--t3)', lineHeight: 1.5 }}>{d.use}</div>
          </div>
        ))}
      </div>
      <div className="subh">Live Motion Demos — hover to trigger</div>
      <div style={{ display: 'flex', gap: 14 }}>
        {[
          { label: 'Scale Spring', desc: 'Brand Spring · 300ms', cls: 'mot-scale' },
          { label: 'Rotation', desc: 'Smooth · 600ms', cls: 'mot-rotate' },
          { label: 'Float Up', desc: 'Decelerate · 450ms', cls: 'mot-slide' },
        ].map(m => (
          <div key={m.label} className="mot-card">
            <div className={`mot-box ${m.cls}`} />
            <div className="mot-n">{m.label}</div>
            <div className="mot-d">{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── VOICE & TONE ──────────────────────────────────────────────────────────────
function VoiceSection() {
  const pairs = [
    { do: 'Forge AI automates your most complex workflows with precision and clarity.', dont: 'Our cutting-edge AI solution revolutionizes your business like never before!' },
    { do: 'Deploy in minutes. Scale to millions. No configuration required.', dont: 'Our easy-to-use platform makes AI accessible for everyone, everywhere!' },
    { do: 'Built for teams that demand accuracy. Tested at enterprise scale.', dont: 'The best AI tool you\'ll ever use — loved by thousands of happy customers!' },
    { do: 'Model accuracy: 99.4%. Latency: sub-12ms. Uptime: 99.99%.', dont: 'Blazing fast! Super accurate! Your business will be transformed overnight!' },
  ];
  const traits = [
    { trait: 'Authoritative', opp: 'Not arrogant', desc: 'State facts. Let capability speak without boasting.' },
    { trait: 'Calm', opp: 'Not cold', desc: 'Confident without desperation or urgency.' },
    { trait: 'Precise', opp: 'Not terse', desc: 'Exact words only. No filler. No fluff.' },
    { trait: 'Intelligent', opp: 'Not academic', desc: 'Smart without being dense or inaccessible.' },
  ];
  return (
    <section className="sw" id="section-09" style={{ borderBottom: 'none' }}>
      <div className="sh">
        <div className="eyebrow">09 — Voice & Tone</div>
        <h2 className="stitle">Communication System</h2>
        <p className="sdesc">Forge AI speaks with authority, not hyperbole. The voice is technical, direct, and confident. We demonstrate capability through precision of language — never through exclamation.</p>
      </div>
      <div className="tone-grid" style={{ marginBottom: 28 }}>
        <div className="tone-card do-c">
          <div className="tone-lbl do-l">✓ Do — Brand Voice</div>
          {pairs.map((p, i) => <div key={i} className="tone-ex do-e">"{p.do}"</div>)}
        </div>
        <div className="tone-card dn-c">
          <div className="tone-lbl dn-l">✕ Don't — Off-Brand</div>
          {pairs.map((p, i) => <div key={i} className="tone-ex dn-e">"{p.dont}"</div>)}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
        {traits.map(t => (
          <div key={t.trait} style={{ background: 'var(--sf)', border: '1px solid var(--bds)', borderRadius: 'var(--r12)', padding: 18 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--t1)', marginBottom: 4 }}>{t.trait}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--fuchsia)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.opp}</div>
            <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--t3)', lineHeight: 1.55 }}>{t.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── SIDEBAR ───────────────────────────────────────────────────────────────────
const NAV = [
  { n: '01', label: 'Brand Essence',   id: 'section-01' },
  { n: '02', label: 'Logo System',     id: 'section-02', subs: ['Glow Variant','Refractive Variant','Clear Space Rules','Misuse'] },
  { n: '03', label: 'Color Palette',   id: 'section-03', subs: ['Core Colors','Fuchsia Scale','Cyan Scale','Opacity System','Semantic'] },
  { n: '04', label: 'Typography',      id: 'section-04', subs: ['Type Scale','All Weights','Character Set'] },
  { n: '05', label: 'Spacing & Grid',  id: 'section-05', subs: ['Spacing Scale','Radius Scale','12-Column Grid'] },
  { n: '06', label: 'UI Components',   id: 'section-06', subs: ['Buttons','Inputs & Controls','Cards','Badges & Tags','Navigation','Feedback'] },
  { n: '07', label: 'Iconography',     id: 'section-07' },
  { n: '08', label: 'Motion',          id: 'section-08', subs: ['Easing Curves','Duration Scale'] },
  { n: '09', label: 'Voice & Tone',    id: 'section-09' },
];

function Sidebar({ mode, setMode, active }) {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 16, behavior: 'smooth' });
  };
  return (
    <aside className="sidebar">
      <div className="sb-head">
        <div className="sb-logo-row">
          <img className="sb-logo-img" src={mode === 'dark' ? 'uploads/Dark-logo-no-bckgrnd.png' : 'uploads/light-logo-no_bckgrnd.png'} alt="Forge AI" />
          <div>
            <div className="sb-wordmark">Forge AI</div>
          </div>
        </div>
        <div className="sb-ver">Brand Identity Catalogue · v1.0</div>
        <div className="mode-pills">
          <div className={`mode-pill ${mode === 'dark' ? 'on' : ''}`} onClick={() => setMode('dark')}>Dark</div>
          <div className={`mode-pill ${mode === 'light' ? 'on' : ''}`} onClick={() => setMode('light')}>Light</div>
        </div>
      </div>
      <nav className="sb-nav">
        {NAV.map(item => (
          <div key={item.id}>
            <div className={`nav-item ${active === item.id ? 'on' : ''}`} onClick={() => go(item.id)}>
              <span className="nav-num">{item.n}</span>{item.label}
            </div>
            {item.subs && item.subs.map(s => (
              <div key={s} className="nav-sub">{s}</div>
            ))}
          </div>
        ))}
      </nav>
      <div className="sb-foot">v1.0 · April 2026<br />forgeai.services</div>
    </aside>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
function App() {
  const [mode, setMode] = useState('dark');
  const [active, setActive] = useState('section-01');

  useEffect(() => { document.body.setAttribute('data-mode', mode); }, [mode]);

  useEffect(() => {
    const ids = NAV.map(n => n.id);
    const obs = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(id); }, { rootMargin: '-15% 0px -65% 0px' });
      o.observe(el);
      return o;
    }).filter(Boolean);
    return () => obs.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="layout">
      <Sidebar mode={mode} setMode={setMode} active={active} />
      <main className="main">
        <BrandSection />
        <LogoSection />
        <ColorSection />
        <TypeSection />
        <SpacingSection />
        <ComponentSection />
        <IconSection />
        <MotionSection />
        <VoiceSection />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
