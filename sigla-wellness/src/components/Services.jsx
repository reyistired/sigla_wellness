import { SERVICES } from '../data/services';
import { ServiceIcon } from './Icons';

const SVC_IMAGES = [
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=640&q=80',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=640&q=80',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=640&q=80',
];

export default function Services({ onAsk }) {
  const [featured, ...rest] = SERVICES;

  return (
    <section className="sec" id="services" aria-labelledby="svcTitle">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Our Services</span>
          <h2 id="svcTitle">Enhance Your Well-Being</h2>
          <p>Every service is beginner-friendly. Choose one, or bundle them in a membership.</p>
        </div>

        <article className="svc-featured">
          <div className="svc-featured-img">
            <img src={SVC_IMAGES[0]} alt={featured.name} width="800" height="500" loading="lazy" />
          </div>
          <div className="svc-featured-body">
            <div className="svc-featured-icon"><ServiceIcon name={featured.icon} /></div>
            <h3>{featured.name}</h3>
            <p>{featured.desc}</p>
            <ul className="svc-featured-list">
              {featured.gets.map((f) => (
                <li key={f}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => onAsk(featured.name, `I'd like to ask about ${featured.name}.`)}
            >
              {featured.cta}
            </button>
          </div>
        </article>

        <div className="svc-grid-4">
          {rest.map((svc, i) => (
            <article className="svc-card-tall" key={svc.name}>
              <div className="svc-card-tall-img">
                <img src={SVC_IMAGES[i + 1]} alt={svc.name} width="640" height="400" loading="lazy" />
              </div>
              <div className="svc-card-tall-body">
                <div className="svc-card-tall-icon"><ServiceIcon name={svc.icon} /></div>
                <h3>{svc.name}</h3>
                <p>{svc.desc}</p>
                {svc.href ? (
                  <a className="link-btn" href={svc.href}>{svc.cta} &rarr;</a>
                ) : (
                  <button className="link-btn" type="button" onClick={() => onAsk(svc.name, `I'd like to ask about ${svc.name}.`)}>
                    {svc.cta} &rarr;
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
