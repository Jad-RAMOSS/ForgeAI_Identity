// cat-ui.jsx — UI Component Library section
const { useState, useEffect, useRef } = React;

// ── Interactive Toggle ────────────────────────────────────────────────────────
function Toggle({ label, on: init = false }) {
  const [on, set] = useState(init);
  return (
    <div className="tog-wrap" onClick={() => set(p => !p)}>
      <div className={`tog-track ${on ? 'on' : ''}`}><div className="tog-thumb" /></div>
      <span className="tog-lbl">{label}</span>
    </div>
  );
}

// ── Interactive Checkbox ──────────────────────────────────────────────────────
function Checkbox({ label, on: init = false }) {
  const [on, set] = useState(init);
  return (
    <div className="cb-wrap" onClick={() => set(p => !p)}>
      <div className={`cb-box ${on ? 'on' : ''}`}>{on && '✓'}</div>
      <span className="cb-txt">{label}</span>
    </div>
  );
}

// ── Interactive Radio Group ───────────────────────────────────────────────────
function RadioGroup({ opts, def }) {
  const [val, set] = useState(def || opts[0]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {opts.map(o => (
        <div key={o} className="cb-wrap" onClick={() => set(o)}>
          <div className="cb-box" style={{ borderRadius: '50%' }}>
            {val === o && <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--fuchsia)', boxShadow: '0 0 6px var(--fuchsia)' }} />}
          </div>
          <span className="cb-txt">{o}</span>
        </div>
      ))}
    </div>
  );
}

// ── Animated Progress ─────────────────────────────────────────────────────────
function Progress({ val, label }) {
  const [w, setW] = useState(0);
  useEffect(() => { const t = setTimeout(() => setW(val), 400); return () => clearTimeout(t); }, [val]);
  return (
    <div style={{ width: '100%' }}>
      <div className="prg-track"><div className="prg-fill" style={{ width: w + '%' }} /></div>
      <div className="prg-lbl"><span>{label}</span><span>{val}%</span></div>
    </div>
  );
}

// ── Glass Card — Active Gaseous Neon-Infusion Cell ───────────────────────────
function GlassCard() {
  return (
    <div className="ui-gc" style={{ width: 248 }}>
      {/* Internal Gaseous Neon-Infusion header — animated swirling core */}
      <div style={{
        height: 116, position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(138deg, rgba(247,27,248,0.3) 0%, rgba(140,58,220,0.22) 30%, rgba(62,90,242,0.18) 60%, rgba(0,255,255,0.24) 100%)',
        backgroundSize: '300% 300%',
        animation: 'gaseous-flow 8s ease-in-out infinite',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Precision glass casing — convex specular sheen */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '52%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 65%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        {/* Refraction caustic at base */}
        <div style={{
          position: 'absolute', bottom: 0, left: '8%', right: '8%', height: '28%',
          background: 'linear-gradient(0deg, rgba(0,255,255,0.2) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        {/* Left precision reflective edge */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: 0, width: 1,
          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.38) 40%, rgba(255,255,255,0.38) 60%, transparent)',
          pointerEvents: 'none',
        }} />
        <span style={{
          fontFamily: 'Orbitron,var(--font)', fontSize: 36, fontWeight: 900,
          background: 'linear-gradient(135deg, #fff 0%, #F71BF8 45%, #00FFFF 90%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          position: 'relative', zIndex: 1,
          filter: 'drop-shadow(0 0 16px rgba(247,27,248,0.75)) drop-shadow(0 0 32px rgba(0,255,255,0.45))',
        }}>F</span>
      </div>
      <div className="ui-cb">
        <div className="ui-ct">Glass Card</div>
        <div className="ui-cd">Transmissive precision casing with internal gaseous neon-infusion. Reflective edges active on hover.</div>
        <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <span className="bdg bdg-f">Neon-Glass</span>
          <span className="bdg bdg-c">Transmissive</span>
        </div>
      </div>
    </div>
  );
}

// ── Feature Card — Fused-Nano Rectangular Interface ───────────────────────────
function FeatureCard() {
  return (
    <div className="ui-fc" style={{ width: 248 }}>
      {/* The ::before gradient edge is handled by CSS — top reflective stripe */}
      <div className="ui-cb" style={{ paddingTop: 20 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 12,
          background: 'linear-gradient(138deg, rgba(247,27,248,0.18), rgba(0,255,255,0.1))',
          border: '1px solid rgba(247,27,248,0.28)',
          backdropFilter: 'blur(12px)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 0 12px rgba(247,27,248,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 12, fontSize: 18, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(180deg,rgba(255,255,255,0.2),transparent)', borderRadius: '12px 12px 0 0', pointerEvents: 'none' }} />
          ⚡
        </div>
        <div className="ui-ct">Feature Card</div>
        <div className="ui-cd">Fused-nano interface. Dichroic top edge catches refracted light at the precision-polished rim.</div>
      </div>
    </div>
  );
}

// ── Neutral Card — Glass Surface ──────────────────────────────────────────────
function NeutralCard() {
  return (
    <div style={{
      width: 248,
      background: 'linear-gradient(148deg, rgba(255,255,255,0.055), rgba(225,228,242,0.028))',
      border: '1px solid rgba(255,255,255,0.09)',
      borderRadius: 'var(--r20)', padding: 20,
      backdropFilter: 'blur(18px) saturate(130%)',
      WebkitBackdropFilter: 'blur(18px) saturate(130%)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,255,255,0.05), 0 4px 20px rgba(0,0,0,0.22)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.22) 40%,transparent)', pointerEvents: 'none' }} />
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
        <div className="av av-md av-f">FA</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--t1)' }}>Neutral Card</div>
          <div style={{ fontSize: 10, color: 'var(--t3)' }}>Glass surface</div>
        </div>
      </div>
      <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--t2)', lineHeight: 1.65 }}>Low-emphasis transmissive surface. Precision glass casing with minimal internal infusion.</div>
      <div style={{ marginTop: 14, display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn-s" style={{ padding: '7px 16px', fontSize: 10 }}>View →</button>
      </div>
    </div>
  );
}

// ── Top Nav ───────────────────────────────────────────────────────────────────
function TopNav() {
  return (
    <div className="tnav">
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <img src="uploads/logo-dark.png" style={{ height: 22, filter: 'drop-shadow(0 0 6px rgba(247,27,248,0.65))' }} alt="" />
        <span style={{ fontFamily: 'var(--font)', fontSize: 11, fontWeight: 700, letterSpacing: '0.13em', background: 'linear-gradient(90deg,#F71BF8,#00FFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>FORGE AI</span>
      </div>
      <div className="tnav-links">
        {['Platform', 'Docs', 'Pricing', 'About'].map((l, i) => (
          <div key={l} className={`tnav-link ${i === 0 ? 'on' : ''}`}>{l}</div>
        ))}
      </div>
      <button className="tnav-cta">Get Access</button>
    </div>
  );
}

// ── COMPONENT SECTION ─────────────────────────────────────────────────────────
function ComponentSection() {
  return (
    <section className="sw" id="section-06">
      <div className="sh">
        <div className="eyebrow">06 — UI Components</div>
        <h2 className="stitle">Component Library</h2>
        <p className="sdesc">All components follow the Neon-Glass material rules: transmissive fills, gaseous internal gradients, multi-layer glow shadows, and glass specular surfaces. Interactive where labelled.</p>
      </div>

      {/* ── BUTTONS ─────────────────────────────────────────────────── */}
      <div className="cg-lbl">Buttons</div>
      <div className="ds" style={{ gap: 28, marginBottom: 48 }}>
        <div style={{ textAlign: 'center' }}>
          <button className="btn-p">Start Building →</button>
          <div className="c-name">Primary CTA</div>
          <div className="c-state">Neon-Glass · 5-layer glow</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className="btn-t">Get Access</button>
          <div className="c-name">Tertiary Solid</div>
          <div className="c-state">Gradient fill · specular sheen</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className="btn-s">Learn More</button>
          <div className="c-name">Secondary Ghost</div>
          <div className="c-state">Transparent · cyan hover glow</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className="btn-d">Delete Model</button>
          <div className="c-name">Destructive</div>
          <div className="c-state">Error red · fades on hover</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className="btn-ic">⚡ Deploy</button>
          <div className="c-name">Icon Button</div>
          <div className="c-state">Fuchsia tint · glow on hover</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className="btn-dis" disabled>Unavailable</button>
          <div className="c-name">Disabled</div>
          <div className="c-state">50% opacity · no cursor</div>
        </div>
      </div>

      {/* Button anatomy */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 52 }}>
        <div style={{ background: 'var(--sf)', border: '1px solid var(--bds)', borderRadius: 'var(--r20)', padding: 22 }}>
          <div className="subh" style={{ marginBottom: 14 }}>Primary CTA — 5-Layer Glow</div>
          {[
            { dot: '#F71BF8', t: 'Inner Rim', d: 'inset 0 1px 0 rgba(255,255,255,0.18) — specular top highlight' },
            { dot: '#00FFFF', t: 'Base Caustic', d: 'inset 0 -1px 0 rgba(0,255,255,0.15) — refraction at capsule base' },
            { dot: '#F71BF8', t: 'Close Halo (12px)', d: '0 0 12px rgba(247,27,248,0.45) — immediate glow emission' },
            { dot: '#9B6DFF', t: 'Mid Bloom (32px)', d: '0 0 32px rgba(247,27,248,0.18) — atmospheric diffusion' },
            { dot: 'rgba(255,255,255,0.3)', t: 'Ground Shadow', d: '0 6px 20px rgba(0,0,0,0.4) — physical grounding' },
          ].map((l, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: l.dot, boxShadow: `0 0 5px ${l.dot}`, marginTop: 4, flexShrink: 0 }} />
              <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.55 }}>
                <strong style={{ fontWeight: 700, color: 'var(--t1)' }}>{l.t}</strong><br />
                <code style={{ fontSize: 10 }}>{l.d}</code>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: 'var(--sf)', border: '1px solid var(--bds)', borderRadius: 'var(--r20)', padding: 22 }}>
          <div className="subh" style={{ marginBottom: 14 }}>Glass Morphology</div>
          {[
            { dot: 'rgba(255,255,255,0.5)', t: '::before — Specular Sheen', d: 'Top 50%: linear-gradient(180deg, rgba(255,255,255,0.16), transparent). Simulates convex glass surface.' },
            { dot: '#00FFFF', t: '::after — Refraction Caustic', d: 'Bottom 30%, inset. rgba(0,255,255,0.18). Light collects at the base edge as it passes through.' },
            { dot: '#F71BF8', t: 'Fill — Transmissive Gradient', d: 'rgba(247,27,248,0.28) → rgba(0,255,255,0.18). Never fully opaque — interior must feel gaseous.' },
            { dot: '#9B6DFF', t: 'backdrop-filter: blur(12px)', d: 'The capsule blurs content behind it. Essential glass material behavior — never skip.' },
            { dot: '#F71BF8', t: 'Hover: Power Up', d: 'translateY(-2px) scale(1.02). All glow layers intensify ×1.6. The button is charging up.' },
          ].map((l, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: l.dot, boxShadow: `0 0 5px ${l.dot}`, marginTop: 4, flexShrink: 0 }} />
              <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.55 }}>
                <strong style={{ fontWeight: 700, color: 'var(--t1)' }}>{l.t}</strong><br />
                <span style={{ fontSize: 11, color: 'var(--t3)' }}>{l.d}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── INPUTS ──────────────────────────────────────────────────── */}
      <div className="cg-lbl">Inputs & Form Controls</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
        <div className="ds" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 18, padding: '28px 24px' }}>
          <div>
            <label className="in-lbl">Email Address</label>
            <input className="in-f" type="email" placeholder="hello@forgeai.services" />
          </div>
          <div>
            <label className="in-lbl">API Key — Error State</label>
            <input className="in-f in-err" type="text" defaultValue="invalid-key-format" readOnly />
            <div style={{ fontSize: 11, color: 'var(--error)', marginTop: 5, display: 'flex', gap: 5 }}>⚠ Invalid API key format</div>
          </div>
        </div>
        <div className="ds" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 18, padding: '28px 24px' }}>
          <div className="in-wrap">
            <label className="in-lbl">Search</label>
            <input className="in-f" type="text" placeholder="Search components..." />
          </div>
          <div>
            <label className="in-lbl">Select Plan</label>
            <select className="in-f" style={{ cursor: 'pointer' }}>
              <option>Enterprise</option>
              <option>Professional</option>
              <option>Starter</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 52 }}>
        <div className="ds" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 14, padding: '24px 20px' }}>
          <div className="cg-lbl" style={{ marginBottom: 2 }}>Toggle Switch</div>
          <Toggle label="Neon glow effects" on={true} />
          <Toggle label="Dark mode" />
          <Toggle label="API access" on={true} />
        </div>
        <div className="ds" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 12, padding: '24px 20px' }}>
          <div className="cg-lbl" style={{ marginBottom: 2 }}>Checkbox</div>
          <Checkbox label="Agree to Terms" on={true} />
          <Checkbox label="Marketing emails" />
          <Checkbox label="2FA enabled" on={true} />
        </div>
        <div className="ds" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 12, padding: '24px 20px' }}>
          <div className="cg-lbl" style={{ marginBottom: 2 }}>Radio Button</div>
          <RadioGroup opts={['Enterprise', 'Professional', 'Starter']} def="Professional" />
        </div>
      </div>

      {/* ── CARDS ───────────────────────────────────────────────────── */}
      <div className="cg-lbl">Cards</div>
      <div className="ds" style={{ gap: 20, marginBottom: 52 }}>
        <div style={{ textAlign: 'center' }}>
          <GlassCard />
          <div className="c-name">Glass Card</div>
          <div className="c-state">backdrop-filter:blur · fuchsia border</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <FeatureCard />
          <div className="c-name">Feature Card</div>
          <div className="c-state">Gradient top edge · gradient bg fill</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <NeutralCard />
          <div className="c-name">Neutral Card</div>
          <div className="c-state">Surface token only · no glow</div>
        </div>
      </div>

      {/* ── BADGES & TAGS ───────────────────────────────────────────── */}
      <div className="cg-lbl">Badges & Tags</div>
      <div className="ds" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 18, marginBottom: 52 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            ['bdg-f', '● Active'],
            ['bdg-c', 'New'],
            ['bdg-ok', '● Online'],
            ['bdg-warn', 'Beta'],
            ['bdg-err', '● Offline'],
            ['bdg-n', 'Draft'],
          ].map(([cls, lbl]) => (
            <span key={lbl} className={`bdg ${cls}`}>{lbl}</span>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {['Neon-Glass', 'Typography', 'Motion', 'Color System', 'v1.0', 'Brand Identity'].map(t => (
            <div key={t} className="tag">{t} <span className="tag-x">×</span></div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {[['sm', 'av-sm'], ['md', 'av-md'], ['lg', 'av-lg']].map(([sz, cls]) => (
            <div key={sz} className={`av ${cls} av-f`}>{sz === 'lg' ? 'FA' : sz === 'md' ? 'AI' : 'F'}</div>
          ))}
          <div className="av av-md av-c">JD</div>
          <div style={{ fontSize: 11, color: 'var(--t3)', marginLeft: 4 }}>Avatars — sm · md · lg</div>
        </div>
      </div>

      {/* ── NAVIGATION ──────────────────────────────────────────────── */}
      <div className="cg-lbl">Navigation</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 52 }}>
        <TopNav />
        <div className="ds" style={{ justifyContent: 'flex-start', padding: '18px 24px' }}>
          <div className="bc">
            {['Forge AI', 'Platform', 'Components', 'Button'].map((item, i, arr) => (
              <React.Fragment key={item}>
                <span className={`bc-i ${i === arr.length - 1 ? 'on' : ''}`}>{item}</span>
                {i < arr.length - 1 && <span className="bc-sep">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="ds" style={{ padding: '18px 24px' }}>
          <div className="pgn">
            <div className="pg-b dis">‹</div>
            {[1, 2, 3, '…', 8, 9, 10].map((p, i) => (
              <div key={i} className={`pg-b ${p === 2 ? 'on' : p === '…' ? 'dis' : ''}`}>{p}</div>
            ))}
            <div className="pg-b">›</div>
          </div>
        </div>
      </div>

      {/* ── FEEDBACK ────────────────────────────────────────────────── */}
      <div className="cg-lbl">Feedback & Status</div>
      <div className="ds" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 18, marginBottom: 14 }}>
        <Progress val={72} label="Model training" />
        <Progress val={45} label="API sync" />
        <Progress val={91} label="Deployment complete" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 14 }}>
        {[
          { color: '#00E5A0', icon: '✓', title: 'Model deployed', body: 'Your automation is now live and processing.' },
          { color: '#FF3366', icon: '!', title: 'Connection failed', body: 'Verify API credentials and retry.' },
          { color: '#6B8AFF', icon: 'i', title: 'Update available', body: 'Version 2.1 is ready to install.' },
        ].map(t => (
          <div key={t.title} className="toast">
            <div className="toast-ic" style={{ background: t.color }}>{t.icon}</div>
            <div><div className="toast-t">{t.title}</div><div className="toast-b">{t.body}</div></div>
          </div>
        ))}
      </div>
      <div className="ds" style={{ gap: 36 }}>
        <div className="tip-wrap">
          <span className="tip-trig">Hover for tooltip</span>
          <div className="tip-box">Glass Capsule requires a commercial license</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {[['FA','av-f'],['AI','av-c'],['JD','av-f']].map((a, i) => (
            <div key={i} className={`av av-md ${a[1]}`} style={{ marginLeft: i > 0 ? -8 : 0, border: '2px solid var(--bg3)', zIndex: 3 - i }}>{a[0]}</div>
          ))}
          <div style={{ marginLeft: 10, fontSize: 11, color: 'var(--t3)' }}>Avatar Group</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="div-comp" style={{ width: 80 }} />
          <div style={{ fontSize: 10, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>Divider</div>
          <div className="div-comp" style={{ width: 80 }} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ComponentSection });
