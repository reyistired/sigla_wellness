export default function Testimonials({ testimonials }) {
  const [featured, ...others] = testimonials;

  return (
    <section className="sec band-sand" id="stories" aria-labelledby="storyTitle">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="storyTitle">What clients are saying</h2>
        </div>
        <div className="stories">
          <figure className="q big">
            <blockquote>{featured.quote}</blockquote>
            <figcaption>{featured.who}<span>{featured.role}</span></figcaption>
          </figure>
          <div className="q-side">
            {others.map((t) => (
              <figure className="q" key={t.who}>
                <blockquote>{t.quote}</blockquote>
                <figcaption>{t.who}<span>{t.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
        <p className="caption">Sample testimonials for this project.</p>
      </div>
    </section>
  );
}
