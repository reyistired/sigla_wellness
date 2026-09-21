import { useState } from 'react';
import Logo from './Logo';

const FACEBOOK = 'https://facebook.com/siglawellness';
const INSTAGRAM = 'https://instagram.com/siglawellness';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // '', 'ok', or 'error'

  function subscribe(e) {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setStatus('error');
      return;
    }
    // Frontend-only for now. To really subscribe people, call Mailchimp or Formspree here.
    setStatus('ok');
    setEmail('');
  }

  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Logo onDark />
          <p className="foot-tagline">Sigla sa Bawat Araw.</p>
          <p className="verse">"A cheerful heart is good medicine, but a crushed spirit dries up the bones." Proverbs 17:22</p>
        </div>
        <nav className="foot-nav" aria-label="Footer">
          <h3>Menu</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#mission">Mission &amp; Vision</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-us">Why Sigla</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#coaches">Coaches</a></li>
            <li><a href="#schedule">Schedule</a></li>
          </ul>
        </nav>
        <div className="foot-contact">
          <h3>Visit</h3>
          <p>Brgy. Cabatuan, Cabanatuan City</p>
          <p>Nueva Ecija 3100</p>
          <p>Mon to Sat, 6 AM to 8 PM</p>
          <div className="foot-social">
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Sigla Wellness on Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Sigla Wellness on Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
        <div className="foot-news">
          <h3>Wellness tips in your inbox</h3>
          <p>News, offers, and simple habits to try.</p>
          <form className="newsletter-form" onSubmit={subscribe} noValidate>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email for newsletter"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status) setStatus(''); }}
              aria-invalid={status === 'error' ? 'true' : undefined}
              aria-describedby="newsMsg"
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className={`news-msg${status === 'error' ? ' is-error' : ''}`} id="newsMsg" role="status">
            {status === 'ok' && "Thanks for subscribing. We'll be in touch."}
            {status === 'error' && 'Enter a valid email address, like name@email.com.'}
          </p>
        </div>
      </div>
      <div className="wrap">
        <p className="fine">&copy; 2026 Sigla Wellness. All rights reserved.</p>
      </div>
    </footer>
  );
}
