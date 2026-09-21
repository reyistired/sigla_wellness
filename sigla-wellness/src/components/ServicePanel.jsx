import { Check } from './Icons';

// Child component: everything it shows comes in through props.
export default function ServicePanel({ service, tabId, onAsk }) {
  const { name, desc, gets, image, cta, href } = service;

  return (
    <div className="svc-panel" id="svc-panel" role="tabpanel" tabIndex={0} aria-labelledby={tabId}>
      <div className="svc-media">
        <img src={image} alt="" width="1200" height="750" loading="lazy" />
      </div>
      <h3>{name}</h3>
      <p className="svc-desc">{desc}</p>
      <ul className="ticks">
        {gets.map((item) => (
          <li key={item}><Check />{item}</li>
        ))}
      </ul>
      {href ? (
        <a className="btn btn-primary" href={href}>{cta}</a>
      ) : (
        <button className="btn btn-primary" type="button" onClick={() => onAsk(name, `I'd like to ask about ${name}.`)}>
          {cta}
        </button>
      )}
    </div>
  );
}
