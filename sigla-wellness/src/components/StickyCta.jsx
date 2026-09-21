import { useEffect, useState } from 'react';

// Phones have no nav button, so this bar keeps "Book a Wellness Session" one tap away.
// It shows once the hero is off screen and hides again at the inquiry form and footer.
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const hero = document.querySelector('.hero');
    const targets = [document.getElementById('contact'), document.querySelector('footer')].filter(Boolean);
    if (!hero || targets.length === 0) return;

    let heroVisible = true;
    const visible = new Set();
    const update = () => setShow(!heroVisible && visible.size === 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // A section that only touches the screen edge does not count as visible.
        const onScreen = entry.intersectionRatio > 0;
        if (entry.target === hero) heroVisible = onScreen;
        else if (onScreen) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      update();
    }, { threshold: [0, 0.01] });
    observer.observe(hero);
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sticky-cta${show ? ' is-visible' : ''}`} aria-hidden={!show}>
      <a className="btn btn-primary" href="#contact" tabIndex={show ? 0 : -1}>Book a Wellness Session</a>
    </div>
  );
}
