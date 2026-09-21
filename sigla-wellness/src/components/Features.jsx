import { FeatureIcon } from './Icons';

// Reusable: one feature comes in as props.
function Feature({ icon, title, description }) {
  return (
    <div className="benefit">
      <FeatureIcon name={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Features({ features }) {
  return (
    <section className="sec" id="why-us" aria-labelledby="whyTitle">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="whyTitle">Why choose Sigla Wellness</h2>
          <p>Wellness that fits your schedule, your goals, and your budget.</p>
        </div>
        <div className="benefit-grid">
          {features.map((feature) => (
            <Feature key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
