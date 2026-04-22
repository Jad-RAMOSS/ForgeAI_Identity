// cat-tokens.jsx — Color, Typography, Spacing sections
const { useState, useEffect } = React;

function flash() {
  const el = document.getElementById('copiedFlash');
  if (!el) return;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1400);
}

// ── Color Swatch ──────────────────────────────────────────────────────────────
function Swatch({ name, hex, rgb, usage }) {
  const copy = () => { navigator.clipboard?.writeText(hex).catch(() => {}); flash(); };
  return (
    <div className="sw-card" onClick={copy}>
      <div className="sw-block" style={{ background: hex }}>
        <span className="sw-hint">Copy hex</span>
      </div>
      <div className="sw-meta">
        <div className="sw-name">{name}</div>
        <div className="sw-hex">{hex}</div>
        {rgb && <div className="sw-hex">{rgb}</div>}
        {usage && <div className="sw-use">{usage}</div>}
      </div>
    </div>
  );
}

// ── Scale Row ─────────────────────────────────────────────────────────────────
function ScaleRow({ label, colors }) {
  const [hov, setHov] = useState(null);
  const copy = (hex) => { navigator.clipboard?.writeText(hex).catch(() => {}); flash(); };
  return (
    <div style={{ marginBottom: 32 }}>
      <div className="subh">{label}</div>
      <div className="scale-row">
        {colors.map((c, i) => (
          <div key={i} className="scale-sw" style={{ flex: hov === i ? 2 : 1 }}
            onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
            onClick={() => copy(c.hex)}>
            <div className="scale-sw-b" style={{ background: c.hex }} />
            <div className="scale-sw-l">
              <div style={{ fontWeight: 700 }}>{c.step}</div>
              <div style={{ fontSize: 8, fontStyle: 'italic' }}>{c.hex}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Opacity System ────────────────────────────────────────────────────────────
function OpacityCol({ colorHex, rgb, label }) {
  const steps = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--t2)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
      {steps.map(op => (
        <div key={op} className="op-row">
          <div className="op-dot" style={{ background: colorHex, opacity: op / 100, border: '1px solid rgba(255,255,255,0.08)' }} />
          <span className="op-lbl">{op}%</span>
          <span className="op-val">rgba({rgb}, {(op / 100).toFixed(2)})</span>
        </div>
      ))}
    </div>
  );
}

// ── COLOR SECTION ─────────────────────────────────────────────────────────────
function ColorSection() {
  const core = [
    { name: 'Fuchsia — Primary', hex: '#F71BF8', rgb: 'rgb(247, 27, 248)', usage: 'Primary accent · glow source · CTA highlights' },
    { name: 'Electric Cyan', hex: '#00FFFF', rgb: 'rgb(0, 255, 255)', usage: 'Secondary accent · refraction · hover states' },
    { name: 'Transmissive Base', hex: '#E1E4F2', rgb: 'rgb(225, 228, 242)', usage: 'Glass core fill · internal diffusion' },
    { name: 'Deep Blue Shadow', hex: '#2E4259', rgb: 'rgb(46, 66, 89)', usage: 'High-legibility text on light surfaces' },
    { name: 'Deep Obsidian', hex: '#0A0A0A', rgb: 'rgb(10, 10, 10)', usage: 'Dark mode background environment' },
    { name: 'Bright White', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', usage: 'Light mode bg · specular highlights' },
  ];
  const fuchsia = [
    { step: '50', hex: '#fff0ff' }, { step: '100', hex: '#ffd6ff' }, { step: '200', hex: '#ffaaff' },
    { step: '300', hex: '#ff6aff' }, { step: '400', hex: '#fa30fa' }, { step: '500 ★', hex: '#F71BF8' },
    { step: '600', hex: '#c900c9' }, { step: '700', hex: '#980098' }, { step: '800', hex: '#650065' }, { step: '900', hex: '#320032' },
  ];
  const cyan = [
    { step: '50', hex: '#e0ffff' }, { step: '100', hex: '#b0ffff' }, { step: '200', hex: '#66ffff' },
    { step: '300', hex: '#33ffff' }, { step: '400 ★', hex: '#00FFFF' }, { step: '500', hex: '#00d4d4' },
    { step: '600', hex: '#00a3a3' }, { step: '700', hex: '#006e6e' }, { step: '800', hex: '#003d3d' }, { step: '900', hex: '#001a1a' },
  ];
  const trans = [
    { step: '50', hex: '#f8f9ff' }, { step: '100', hex: '#f0f1fa' }, { step: '200 ★', hex: '#E1E4F2' },
    { step: '300', hex: '#c5cadf' }, { step: '400', hex: '#a0a8cc' }, { step: '500', hex: '#7c86b8' },
  ];
  const semantic = [
    { name: 'Success', hex: '#00E5A0', usage: 'Confirmations · completed states · positive feedback' },
    { name: 'Warning', hex: '#FFB830', usage: 'Caution · pending actions · degraded performance' },
    { name: 'Error / Destructive', hex: '#FF3366', usage: 'Errors · destructive actions · critical alerts' },
    { name: 'Info / System', hex: '#6B8AFF', usage: 'Informational messages · system hints · tooltips' },
  ];

  return (
    <section className="sw" id="section-03">
      <div className="sh">
        <div className="eyebrow">03 — Color Palette</div>
        <h2 className="stitle">Prism System</h2>
        <p className="sdesc">A neon-transmissive spectrum anchored by Fuchsia and Cyan — two complementary energies defining the Forge AI material language. Every surface either emits or refracts from these two sources. Click any swatch to copy hex.</p>
      </div>

      <div className="subh">Core Brand Colors</div>
      <div className="color-grid">
        {core.map(c => <Swatch key={c.name} {...c} />)}
      </div>

      <ScaleRow label="Fuchsia Scale (#F71BF8)" colors={fuchsia} />
      <ScaleRow label="Cyan Scale (#00FFFF)" colors={cyan} />
      <ScaleRow label="Transmissive Base Scale (#E1E4F2)" colors={trans} />

      <div className="subh" style={{ marginTop: 44 }}>Opacity System</div>
      <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--t3)', marginBottom: 24, fontStyle: 'italic' }}>
        All glass surfaces use opacity-derived values. Minimum 4% opacity — below that, surfaces disappear on dark backgrounds.
      </p>
      <div className="op-grid">
        <OpacityCol colorHex="#F71BF8" rgb="247, 27, 248" label="Fuchsia Opacity Scale" />
        <OpacityCol colorHex="#00FFFF" rgb="0, 255, 255" label="Cyan Opacity Scale" />
      </div>

      <div className="subh" style={{ marginTop: 44 }}>Semantic Colors</div>
      <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--t3)', marginBottom: 20, fontStyle: 'italic' }}>
        Derived to harmonize with the Fuchsia–Cyan spectrum. Never substitute brand accents for semantic signals.
      </p>
      <div className="color-grid">
        {semantic.map(s => <Swatch key={s.name} {...s} />)}
      </div>

      {/* Color reference image */}
      <div className="subh" style={{ marginTop: 44 }}>Color Analysis Reference</div>
      <div style={{ borderRadius: 'var(--r20)', overflow: 'hidden', border: '1px solid var(--bds)' }}>
        <img src="uploads/color-analysis.png" style={{ width: '100%', display: 'block' }} alt="Color gradient & transparency analysis" />
      </div>
    </section>
  );
}

// ── TYPOGRAPHY SECTION ────────────────────────────────────────────────────────
function TypeSection() {
  const scale = [
    { role: 'Display', font: 'Glass Capsule*', wt: '900', px: '80px', lh: '1.0', tr: '−0.01em', sample: 'Forge AI', note: 'Hero headers, brand marks only. Never for body.' },
    { role: 'H1 — Page Title', font: 'Europa 700', wt: '700', px: '56px', lh: '1.1', tr: '−0.01em', sample: 'Intelligent Automation', note: 'One per page maximum.' },
    { role: 'H2 — Section', font: 'Europa 700', wt: '700', px: '40px', lh: '1.15', tr: '0', sample: 'System Architecture', note: 'Section headers, feature headings.' },
    { role: 'H3 — Subsection', font: 'Europa 700', wt: '700', px: '28px', lh: '1.3', tr: '0', sample: 'Component Library', note: 'Card headings, panel titles.' },
    { role: 'H4 — UI Heading', font: 'Europa 700', wt: '700', px: '22px', lh: '1.35', tr: '0.01em', sample: 'API Reference', note: 'Table headers, modal titles.' },
    { role: 'Label / Eyebrow', font: 'Europa 700', wt: '700', px: '11px', lh: '1.0', tr: '0.22em', sample: 'BRAND IDENTITY CATALOGUE', note: 'ALL CAPS always. UI labels, section markers.' },
    { role: 'Body Large', font: 'Europa 400', wt: '400', px: '18px', lh: '1.7', tr: '0', sample: 'Forge AI exists to bridge human potential and intelligent automation.', note: 'Hero body, intro paragraphs.' },
    { role: 'Body', font: 'Europa 400', wt: '400', px: '15px', lh: '1.7', tr: '0', sample: 'Technical yet tactile. We value clarity as much as we value the glow. Every surface must simulate an internal light source.', note: 'Standard body text, descriptions.' },
    { role: 'Body Small', font: 'Europa 300', wt: '300', px: '13px', lh: '1.65', tr: '0', sample: 'Supporting content only — never for primary copy or interactive elements.', note: 'Captions, metadata, supporting copy.' },
    { role: 'Caption', font: 'Europa 300', wt: '300', px: '11px', lh: '1.5', tr: '0.04em', sample: 'v1.0 · April 2026 · forgeai.services', note: 'Timestamps, fine print, footnotes.' },
  ];
  const weights = [
    { name: 'Light', wt: 300, style: 'normal', samp: 'Europa Light — ABCDEFGHIJKLMNOPQRSTUVWXYZ · 0123456789' },
    { name: 'Light Italic', wt: 300, style: 'italic', samp: 'Europa Light Italic — Authoritative, calm, and highly intelligent.' },
    { name: 'Regular', wt: 400, style: 'normal', samp: 'Europa Regular — Forge AI bridges human potential and automation.' },
    { name: 'Regular Italic', wt: 400, style: 'italic', samp: 'Europa Italic — Indistinguishable from reality.' },
    { name: 'Bold', wt: 700, style: 'normal', samp: 'Europa Bold — NEON-GLASS SYSTEM · CYBER-PREMIUM PRECISION' },
    { name: 'Bold Italic', wt: 700, style: 'italic', samp: 'Europa Bold Italic — The architects of the future.' },
  ];

  return (
    <section className="sw" id="section-04">
      <div className="sh">
        <div className="eyebrow">04 — Typography</div>
        <h2 className="stitle">Type Hierarchy</h2>
        <p className="sdesc">Europa is the sole typeface of the Forge AI system. Geometric, timeless, precise. Glass Capsule (display only) adds neon-infused character at hero scale. No other typefaces are permitted in any Forge AI collateral.</p>
      </div>

      {/* Font licensing note */}
      <div style={{ background: 'rgba(247,27,248,0.06)', border: '1px solid rgba(247,27,248,0.2)', borderRadius: 'var(--r12)', padding: '14px 18px', marginBottom: 32, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <span style={{ color: 'var(--fuchsia)', fontWeight: 700, flexShrink: 0 }}>!</span>
        <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--t2)', lineHeight: 1.6 }}>
          <strong style={{ fontWeight: 700, color: 'var(--t1)' }}>Licensing:</strong> Europa requires a commercial license (Adobe Fonts / Fontspring). Glass Capsule is a display font — source via the Forge AI design team. Drop .woff2 files in <code>/fonts/</code> — Plus Jakarta Sans renders as fallback until then. Orbitron is shown as a Glass Capsule simulation in specimens.
        </div>
      </div>

      <div className="subh">Type Scale</div>
      <div className="type-list">
        {scale.map((t, i) => {
          const isDisplay = t.role === 'Display';
          const dispSize = Math.min(parseInt(t.px), 52);
          return (
            <div key={i} className="type-row">
              <div className="tr-meta">
                <strong>{t.role}</strong>
                {t.font}<br />
                {t.px} / {t.lh}lh
              </div>
              <div style={{
                fontFamily: isDisplay ? 'Orbitron, var(--font)' : 'var(--font)',
                fontSize: dispSize + 'px',
                fontWeight: t.wt,
                lineHeight: t.lh,
                letterSpacing: t.tr,
                fontStyle: 'normal',
                textTransform: t.role === 'Label / Eyebrow' ? 'uppercase' : 'none',
                background: isDisplay ? 'linear-gradient(135deg,#fff 0%,#F71BF8 45%,#00FFFF 90%)' : 'none',
                WebkitBackgroundClip: isDisplay ? 'text' : 'initial',
                WebkitTextFillColor: isDisplay ? 'transparent' : 'inherit',
                backgroundClip: isDisplay ? 'text' : 'initial',
                color: !isDisplay ? 'var(--t1)' : undefined,
                overflow: 'hidden', display: '-webkit-box',
                WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
              }}>{t.sample}</div>
              <div className="tr-tok" style={{ fontSize: 9, lineHeight: 1.6 }}>
                <div style={{ fontStyle: 'normal', fontWeight: 700 }}>{t.px}</div>
                <div style={{ marginTop: 3 }}>{t.note}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Weight specimens */}
      <div className="subh" style={{ marginTop: 48 }}>Europa — All Weights & Styles</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {weights.map((w, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 20, padding: '16px 22px', borderRadius: 'var(--r12)', transition: 'background 0.18s', cursor: 'default' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--sf)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <div style={{ minWidth: 108, fontSize: 10, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.14em', flexShrink: 0 }}>{w.name}</div>
            <div style={{ flex: 1, fontFamily: 'var(--font)', fontSize: 20, fontWeight: w.wt, fontStyle: w.style, color: 'var(--t1)' }}>{w.samp}</div>
            <div style={{ fontSize: 10, color: 'var(--t3)', fontStyle: 'italic', flexShrink: 0 }}>{w.wt}</div>
          </div>
        ))}
      </div>

      {/* Character set */}
      <div className="subh" style={{ marginTop: 48 }}>Character Set Specimen</div>
      <div style={{ fontFamily: 'var(--font)', lineHeight: 1.85, padding: 28, background: 'var(--sf)', borderRadius: 'var(--r20)', border: '1px solid var(--bds)' }}>
        <div style={{ fontSize: 16, fontWeight: 300, color: 'var(--t2)' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz</div>
        <div style={{ fontSize: 16, fontWeight: 400, color: 'var(--t1)', marginTop: 8 }}>0123456789 · !@#$%^&amp;*()_+-=[]&#123;&#125;|;':",&lt;&gt;?/.</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--t1)', marginTop: 8 }}>FORGE AI — INTELLIGENT AUTOMATION SYSTEM — v1.0</div>
        <div style={{ fontSize: 15, fontWeight: 300, fontStyle: 'italic', color: 'var(--t3)', marginTop: 8 }}>"Indistinguishable from reality." — Authoritative, calm, highly intelligent.</div>
      </div>
    </section>
  );
}

// ── SPACING SECTION ───────────────────────────────────────────────────────────
function SpacingSection() {
  const spScale = [
    { t: 'sp-1',  px: 4,   rem: '0.25rem', use: 'Icon gap, inline tight' },
    { t: 'sp-2',  px: 8,   rem: '0.5rem',  use: 'Tight padding, list gaps' },
    { t: 'sp-3',  px: 12,  rem: '0.75rem', use: 'Input padding, small gaps' },
    { t: 'sp-4',  px: 16,  rem: '1rem',    use: 'Base padding unit' },
    { t: 'sp-5',  px: 20,  rem: '1.25rem', use: 'Card inner (small)' },
    { t: 'sp-6',  px: 24,  rem: '1.5rem',  use: 'Card inner (standard)' },
    { t: 'sp-8',  px: 32,  rem: '2rem',    use: 'Section sub-item gaps' },
    { t: 'sp-10', px: 40,  rem: '2.5rem',  use: 'Section heading margins' },
    { t: 'sp-12', px: 48,  rem: '3rem',    use: 'Section padding (mobile)' },
    { t: 'sp-16', px: 64,  rem: '4rem',    use: 'Section padding (tablet)' },
    { t: 'sp-20', px: 80,  rem: '5rem',    use: 'Section padding (desktop)' },
    { t: 'sp-24', px: 96,  rem: '6rem',    use: 'Section padding (large)' },
    { t: 'sp-32', px: 128, rem: '8rem',    use: 'Hero padding, xl gaps' },
  ];
  const radii = [
    { t: '--r4',    val: '4px',    use: 'Inner nested elements' },
    { t: '--r6',    val: '6px',    use: 'Chips, code blocks' },
    { t: '--r12',   val: '12px',   use: 'Inputs, dropdowns, tags' },
    { t: '--r20',   val: '20px',   use: 'Cards, panels, modals' },
    { t: '--r32',   val: '32px',   use: 'Large feature cards' },
    { t: '--rpill', val: '100px',  use: 'Buttons, badges, avatars' },
  ];

  return (
    <section className="sw" id="section-05">
      <div className="sh">
        <div className="eyebrow">05 — Spacing & Grid</div>
        <h2 className="stitle">Spatial System</h2>
        <p className="sdesc">4px base unit. Harmonic scale. Generous whitespace is a brand mandate — the "F" logo and all glass elements must breathe. Never crowd the transmissive material.</p>
      </div>

      <div className="subh">Spacing Scale</div>
      <div className="sp-list" style={{ marginBottom: 48 }}>
        {spScale.map((s, i) => (
          <div key={i} className="sp-row">
            <div className="sp-lbl">{s.t}</div>
            <div className="sp-bar" style={{ width: Math.min(s.px * 2.2, 340) + 'px' }} />
            <div className="sp-val">{s.px}px · {s.rem}</div>
            <div className="sp-use">{s.use}</div>
          </div>
        ))}
      </div>

      <div className="subh">Border Radius Scale</div>
      <div className="r-grid" style={{ marginBottom: 48 }}>
        {radii.map((r, i) => (
          <div key={i} className="r-card">
            <div className="r-box" style={{ width: 44 + i * 10, height: 44 + i * 10, borderRadius: r.val }} />
            <div className="r-name">{r.t}</div>
            <div className="r-val">{r.val}</div>
            <div style={{ fontSize: 9, color: 'var(--t3)', textAlign: 'center', maxWidth: 80, lineHeight: 1.4 }}>{r.use}</div>
          </div>
        ))}
      </div>

      <div className="subh">12-Column Grid</div>
      <div style={{ background: 'var(--sf)', border: '1px solid var(--bds)', borderRadius: 'var(--r20)', padding: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 6, marginBottom: 12 }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} style={{ background: i % 2 === 0 ? 'rgba(247,27,248,0.12)' : 'rgba(0,255,255,0.08)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 4, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: i % 2 === 0 ? '#F71BF8' : '#00FFFF', opacity: 0.85 }}>
              {i + 1}
            </div>
          ))}
        </div>
        {[['4fr', '4fr', '4fr'], ['8fr', '4fr']].map((cols, ri) => (
          <div key={ri} style={{ display: 'grid', gridTemplateColumns: cols.join(' '), gap: 6, marginBottom: 6 }}>
            {cols.map((c, ci) => (
              <div key={ci} style={{ background: ri === 0 ? 'rgba(247,27,248,0.06)' : 'rgba(0,255,255,0.05)', border: `1px dashed ${ri === 0 ? 'rgba(247,27,248,0.2)' : 'rgba(0,255,255,0.18)'}`, borderRadius: 6, padding: '10px', fontSize: 10, fontWeight: 600, color: 'var(--t3)', textAlign: 'center' }}>
                {c === '4fr' ? '4 cols' : c === '8fr' ? '8 cols — content' : '4 cols — sidebar'}
              </div>
            ))}
          </div>
        ))}
        <div style={{ marginTop: 14, fontSize: 11, color: 'var(--t3)', display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[['Columns', '12'], ['Gutter', '24px'], ['Margin', '80px desktop · 24px mobile'], ['Max-width', '1280px']].map(([k, v]) => (
            <span key={k}>{k}: <strong style={{ color: 'var(--t2)', fontWeight: 700 }}>{v}</strong></span>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ColorSection, TypeSection, SpacingSection });
