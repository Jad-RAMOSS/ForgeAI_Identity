'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [btnLabel, setBtnLabel] = useState('Send Brief');
  const [disabled, setDisabled] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

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

  function showToast() {
    const t = document.getElementById('forge-toast');
    if (!t) return;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4800);
  }

  async function submitForm() {
    setErrName(!name.trim());
    setErrEmail(!email.trim());
    setErrMsg(!msg.trim());
    if (!name.trim() || !email.trim() || !msg.trim()) return;

    setDisabled(true);
    setBtnLabel('Sending...');

    const payload = JSON.stringify({
      name, company, email, message: msg,
      _subject: `New Brief from ${name} — Forge AI`,
      _captcha: 'false',
    });

    const attempt = () => fetch('https://formsubmit.co/ajax/sales@forgeai.services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: payload,
      signal: AbortSignal.timeout(10000),
    }).then(r => r.json());

    try {
      let data = await attempt().catch(() => null);
      if (!data || (data.success !== 'true' && data.success !== true)) {
        await new Promise(r => setTimeout(r, 1500));
        data = await attempt();
      }
      if (data.success === 'true' || data.success === true) {
        setBtnLabel('Sent ✓');
        showToast();
        setName(''); setCompany(''); setEmail(''); setMsg('');
        setTimeout(() => { setBtnLabel('Send Brief'); setDisabled(false); }, 3200);
      } else { throw new Error(); }
    } catch {
      setBtnLabel('Try Again');
      setDisabled(false);
    }
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="s-eyebrow">Contact</div>
            <h2 className="s-title">Start the<br />Conversation.</h2>
            <p className="s-desc">Tell us about your project. We respond within 24 hours with a preliminary architecture proposal.</p>
            <div className="c-detail">
              <div className="c-icon c-icon-f">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="1" y="2" width="11" height="9" rx="2" stroke="#F71BF8" strokeWidth="1.1"/>
                  <path d="M1 4l5.5 3.5L12 4" stroke="#F71BF8" strokeWidth="1.1" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="c-text">sales@forgeai.services</span>
            </div>
            <div className="c-detail">
              <div className="c-icon c-icon-c">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="5" stroke="#00FFFF" strokeWidth="1.1"/>
                  <path d="M6.5 3.5v3l2 2" stroke="#00FFFF" strokeWidth="1.1" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="c-text">Response within 24 hours</span>
            </div>
          </div>

          <div className="glass form-wrap reveal" id="form-glass">
            <div className="gl-blur" />
            <div className="g-mesh" />
            <div className="gl-overlay" />
            <div className="gl-rim" />
            <div className="gl-content">
              <div className="f-row">
                <div>
                  <label className="f-lbl" htmlFor="f-name">Name</label>
                  <input
                    className={`f-in${errName ? ' f-err' : ''}`}
                    id="f-name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={e => { setName(e.target.value); setErrName(false); }}
                  />
                </div>
                <div>
                  <label className="f-lbl" htmlFor="f-company">Company</label>
                  <input
                    className="f-in"
                    id="f-company"
                    type="text"
                    placeholder="Company name"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                  />
                </div>
              </div>
              <div className="f-col">
                <label className="f-lbl" htmlFor="f-email">Email</label>
                <input
                  className={`f-in${errEmail ? ' f-err' : ''}`}
                  id="f-email"
                  type="email"
                  placeholder="hello@yourcompany.com"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setErrEmail(false); }}
                />
              </div>
              <div className="f-col">
                <label className="f-lbl" htmlFor="f-msg">Project Brief</label>
                <textarea
                  className={`f-ta${errMsg ? ' f-err' : ''}`}
                  id="f-msg"
                  placeholder="Tell us about your project — what you're building, your timeline, and what 'indistinguishable from reality' means for your brand."
                  value={msg}
                  onChange={e => { setMsg(e.target.value); setErrMsg(false); }}
                />
              </div>
              <button
                className="btn"
                onClick={submitForm}
                disabled={disabled}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{btnLabel}</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
