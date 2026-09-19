import { TIERS } from '../data/membership';
import { Check } from './Icons';

function PriceCard({ tier, onChoose }) {
  return (
    <article className={`tier${tier.featured ? ' feat' : ''}`}>
      <h3>{tier.name}</h3>
      <p className="for">{tier.forWho}</p>
      <p className="price">{tier.price} <small>per month</small></p>
      <ul className="ticks">
        {tier.features.map((f) => (
          <li key={f}><Check />{f}</li>
        ))}
      </ul>
      <button className={`btn ${tier.featured ? 'btn-dark' : 'btn-light'}`} type="button" onClick={() => onChoose(tier.name)}>
        Choose {tier.name}
      </button>
    </article>
  );
}

export default function Membership({ onAsk }) {
  return (
    <section className="sec band-deep" id="membership" aria-labelledby="memTitle">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow eyebrow-dark">Membership</span>
          <h2 id="memTitle">Membership packages</h2>
          <p>Monthly bundles of coaching, consultations, and workshops at a lower price than booking each one.</p>
        </div>
        <div className="tiers">
          {TIERS.map((t) => (
            <PriceCard
              key={t.name}
              tier={t}
              onChoose={(name) => onAsk('Wellness Membership Packages', `I'm interested in the ${name} package.`)}
            />
          ))}
        </div>
        <p className="caption">All packages include a free initial consultation.</p>
      </div>
    </section>
  );
}
