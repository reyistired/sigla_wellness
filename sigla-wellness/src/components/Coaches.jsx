function CoachCard({ initials, name, role, bio, tone }) {
  return (
    <article className="coach">
      <div className={`avatar ${tone}`} aria-hidden="true">{initials}</div>
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
    </article>
  );
}

export default function Coaches({ coaches }) {
  return (
    <section className="sec" id="coaches" aria-labelledby="coachTitle">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="coachTitle">Meet the coaches</h2>
          <p>Every coach works with beginners and starts from where you are.</p>
        </div>
        <div className="coaches">
          {coaches.map((c) => (
            <CoachCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
