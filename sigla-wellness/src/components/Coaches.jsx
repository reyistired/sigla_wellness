import { COACHES } from '../data/people';

export default function Coaches() {
  return (
    <section className="sec" id="coaches" aria-labelledby="coachTitle">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Our Team</span>
          <h2 id="coachTitle">Meet the coaches</h2>
          <p>Every coach works with beginners and starts from where you are.</p>
        </div>
        <div className="coaches">
          {COACHES.map((c) => (
            <article className="coach" key={c.name}>
              <div className={`avatar ${c.tone}`} aria-hidden="true">{c.initials}</div>
              <div>
                <h3>{c.name}</h3>
                <p className="role">{c.role}</p>
                <p>{c.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="caption">Every coach works with beginners and starts from where you are.</p>
      </div>
    </section>
  );
}
