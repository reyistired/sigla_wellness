export default function MissionVision({ vision, mission, objectives }) {
  return (
    <section className="sec band-deep" id="mission" aria-labelledby="mvTitle">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="mvTitle">Mission, vision, and objectives</h2>
        </div>

        <div className="mv-grid">
          <div>
            <h3 className="label">Our vision</h3>
            <p className="mv-vision">{vision}</p>
          </div>
          <div>
            <h3 className="label">Our mission</h3>
            <p className="mv-mission">{mission}</p>
          </div>
        </div>

        <div className="obj-grid">
          <div>
            <h3 className="obj-title">What we aim to do</h3>
          </div>
          <ol className="objectives">
            {objectives.map((objective) => (
              <li key={objective.id}>
                <p>{objective.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
