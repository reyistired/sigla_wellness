// Business Profile / Overview. Receives the business data as props from App.
export default function About({ business }) {
  const { name, overview, problem, nameMeaning, target } = business;
  const facts = [
    { label: 'Age group', value: target.ageGroup },
    { label: 'Who we serve', value: target.groups },
    { label: 'Where', value: target.market },
  ];

  return (
    <section className="sec" id="about" aria-labelledby="aboutTitle">
      <div className="wrap">
        <div className="about-grid">
          <h2 id="aboutTitle">What is {name}?</h2>
          <div className="about-text">
            <p className="lead">{overview}</p>
            <p>{problem}</p>
            <p>{nameMeaning}</p>
          </div>
        </div>
        <dl className="facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
