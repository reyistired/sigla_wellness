import { TESTIMONIALS } from '../data/people';

export default function Testimonials() {
  return (
    <section className="sec" id="stories" aria-labelledby="storyTitle">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Testimonials</span>
          <h2 id="storyTitle">What Our Clients Are Saying</h2>
        </div>
        <div className="stories">
          {TESTIMONIALS.map((t) => (
            <figure className={`q${t.big ? ' big' : ''}`} key={t.who}>
              <blockquote>{t.quote}</blockquote>
              <figcaption>{t.who}<span>{t.role}</span></figcaption>
            </figure>
          ))}
        </div>
        <p className="caption">Real stories from Sigla Wellness members.</p>
      </div>
    </section>
  );
}
