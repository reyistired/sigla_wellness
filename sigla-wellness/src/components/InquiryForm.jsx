import { useEffect, useRef, useState } from 'react';
import { SERVICE_OPTIONS } from '../data/services';
import { Check } from './Icons';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PH_MOBILE = /^(\+?63|0)?9\d{9}$/;

export default function InquiryForm({ prefill }) {
  const [values, setValues] = useState({ name: '', contact: '', service: 'Not sure yet', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const sentRef = useRef(null);

  const set = (field) => (e) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field] && value.trim()) setErrors((er) => ({ ...er, [field]: '' }));
  };

  // "Ask about..." buttons elsewhere on the page fill in the form.
  useEffect(() => {
    if (!prefill) return;
    setValues((v) => ({
      ...v,
      service: prefill.service || v.service,
      message: prefill.message || v.message,
    }));
    setSent(false);
    requestAnimationFrame(() => nameRef.current?.focus({ preventScroll: true }));
  }, [prefill]);

  useEffect(() => {
    if (sent) sentRef.current?.focus();
  }, [sent]);

  function onSubmit(e) {
    e.preventDefault();
    const name = values.name.trim();
    const contact = values.contact.trim();
    const next = {};

    if (!name) next.name = 'Enter your name.';
    if (!contact) next.contact = 'Enter an email address or mobile number we can reach you at.';
    else if (!EMAIL.test(contact) && !PH_MOBILE.test(contact.replace(/[\s-]/g, ''))) {
      next.contact = "That doesn't look like an email or a mobile number. Check it and try again.";
    }
    setErrors(next);

    if (next.name) return nameRef.current?.focus();
    if (next.contact) return contactRef.current?.focus();

    // Frontend-only for now. To really send it, call EmailJS or Formspree here.
    setSent(true);
  }

  function reset() {
    setValues({ name: '', contact: '', service: 'Not sure yet', message: '' });
    setErrors({});
    setSent(false);
    requestAnimationFrame(() => nameRef.current?.focus());
  }

  return (
    <section className="sec band-mint" id="contact" aria-labelledby="contactTitle">
      <div className="wrap contact">
        <div className="sec-head">
          <span className="eyebrow">Get in Touch</span>
          <h2 id="contactTitle">Send an inquiry</h2>
          <p>Tell us what you'd like to try. We'll reply with next steps.</p>
          <ul className="details">
            <li><strong>Location</strong>Brgy. Cabatuan, Cabanatuan City, Nueva Ecija 3100</li>
            <li><strong>Hours</strong>Monday to Saturday, 6:00 AM – 8:00 PM. Closed on Sundays.</li>
            <li><strong>Phone</strong>(044) 951-2087</li>
            <li>
              <strong>Follow us</strong>
              <a href="https://facebook.com/siglawellness" target="_blank" rel="noopener noreferrer">Facebook</a> and{' '}
              <a href="https://instagram.com/siglawellness" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="form-card">
          {sent ? (
            <div className="sent" tabIndex={-1} ref={sentRef}>
              <div className="tick"><Check /></div>
              <h3>Inquiry sent</h3>
              <p>
                Thanks, <b>{values.name.trim().split(/\s+/)[0]}</b>. We'll reach out at <b>{values.contact.trim()}</b>.
              </p>
              <button className="btn btn-ghost" type="button" onClick={reset}>Send another inquiry</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="f-name">Full name</label>
                <input
                  id="f-name"
                  ref={nameRef}
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Juan Dela Cruz"
                  value={values.name}
                  onChange={set('name')}
                  aria-invalid={errors.name ? 'true' : undefined}
                  aria-describedby="e-name"
                />
                <p className="err" id="e-name">{errors.name}</p>
              </div>
              <div className="field">
                <label htmlFor="f-contact">Email or mobile number</label>
                <input
                  id="f-contact"
                  ref={contactRef}
                  type="text"
                  autoComplete="email"
                  placeholder="e.g. juan@email.com or 09171234567"
                  value={values.contact}
                  onChange={set('contact')}
                  aria-invalid={errors.contact ? 'true' : undefined}
                  aria-describedby="e-contact"
                />
                <p className="err" id="e-contact">{errors.contact}</p>
              </div>
              <div className="field">
                <label htmlFor="f-service">Service you're interested in</label>
                <select id="f-service" value={values.service} onChange={set('service')}>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-msg">Message <span className="opt">(optional)</span></label>
                <textarea id="f-msg" rows={4} placeholder="Tell us about your goals, schedule, or any questions..." value={values.message} onChange={set('message')} />
              </div>
              <button className="btn btn-primary" type="submit">Send inquiry</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
