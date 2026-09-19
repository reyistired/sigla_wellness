import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-brand">
          <Logo onDark />
          <p className="foot-tagline">Sigla sa Bawat Araw.</p>
          <p className="verse">"A cheerful heart is good medicine, but a crushed spirit dries up the bones." Proverbs 17:22</p>
        </div>
        <nav className="foot-nav">
          <h4>Menu</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#coaches">Coaches</a></li>
            <li><a href="#schedule">Schedule</a></li>
          </ul>
        </nav>
        <div className="foot-contact">
          <h4>Get in Touch</h4>
          <p>Brgy. Cabatuan, Cabanatuan City</p>
          <p>Nueva Ecija 3100</p>
          <p>Mon – Sat, 6 AM – 8 PM</p>
          <div className="foot-social">
            <a href="#contact" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#contact" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
        <div className="foot-contact">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Stay up to date with the latest news, promotions, and wellness tips.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="wrap">
        <p className="fine">&copy; 2026 Sigla Wellness. All rights reserved.</p>
      </div>
    </footer>
  );
}
