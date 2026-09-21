import { useState, useEffect } from 'react';
import Logo from './Logo';

const LINKS = [
  ['About', 'about'],
  ['Services', 'services'],
  ['Membership', 'membership'],
  ['Coaches', 'coaches'],
  ['Schedule', 'schedule'],
  ['Contact', 'contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link of the section that is currently on screen.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    LINKS.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return () => { document.body.style.overflow = ''; };

    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onResize = () => { if (window.innerWidth > 960) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`nav${scrolled || open ? ' nav-scrolled' : ''}`}>
      <div className="wrap">
        <Logo />
        <nav className="nav-center" aria-label="Main navigation">
          <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
            {LINKS.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={current === id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-primary btn-sm btn-nav-cta" href="#contact">Send an inquiry</a>
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
