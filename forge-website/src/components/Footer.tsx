export default function Footer() {
  return (
    <footer>
      <div className="foot-brand">
        <img className="foot-logo-dark" src="/uploads/Dark-logo-no-bckgrnd.png" alt="Forge AI" />
        <img className="foot-logo-lt" src="/uploads/light-logo-no_bckgrnd.png" alt="Forge AI" />
        <span className="foot-wm">Forge AI</span>
      </div>
      <span className="foot-copy">© 2026 Forge AI. All rights reserved.</span>
      <div className="foot-links">
        <a className="foot-link" href="/#platform">Platform</a>
        <a className="foot-link" href="/#pillars">Why Us</a>
        <a className="foot-link" href="/#work">Work</a>
        <a className="foot-link" href="/#contact">Contact</a>
      </div>
    </footer>
  );
}
