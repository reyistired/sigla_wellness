import { useState } from 'react';
import { ServiceIcon } from './Icons';
import ServicePanel from './ServicePanel';
import TabList from './TabList';

export default function Services({ services, onAsk }) {
  // Interactive feature: the selected service decides what the panel shows.
  const [active, setActive] = useState(0);
  const service = services[active];

  // On phones the tabs scroll sideways: keep the chosen one in view.
  const choose = (index) => {
    setActive(index);
    if (!window.matchMedia('(max-width: 899px)').matches) return;
    requestAnimationFrame(() => {
      document.getElementById(`svc-tab-${index}`)?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    });
  };

  return (
    <section className="sec" id="services" aria-labelledby="svcTitle">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="svcTitle">Start with what you need</h2>
          <p>Every service is beginner-friendly. Choose one, or bundle them in a membership.</p>
        </div>

        <div className="svc">
          <TabList
            id="svc"
            label="Services"
            orientation="vertical"
            className="svc-tabs"
            tabClass="svc-tab"
            controls="svc-panel"
            active={active}
            onChange={choose}
            items={services.map((s) => ({
              key: s.name,
              content: (
                <>
                  <ServiceIcon name={s.icon} />
                  <span>{s.name}</span>
                </>
              ),
            }))}
          />
          <ServicePanel key={service.name} service={service} tabId={`svc-tab-${active}`} onAsk={onAsk} />
        </div>
      </div>
    </section>
  );
}
