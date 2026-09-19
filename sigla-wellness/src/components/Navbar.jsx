import { useState, useEffect } from 'react';
import Logo from './Logo';

const LINKS = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Membership', '#membership'],
  ['Coaches', '#coaches'],
  ['Schedule', '#schedule'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="wrap">
        <Logo />
        <nav className="nav-center" aria-label="Main navigation">
          <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-nav-cta" href="#contact">Send an inquiry</a>
        <button
          className={`menu-btn${open ? ' menu-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="navLinks"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-line" />
          <span className="menu-line" />
        </button>
      </div>
    </header>
  );
}
