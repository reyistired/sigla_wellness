export default function About() {
  return (
    <section className="sec" id="about" aria-labelledby="aboutTitle">
      <div className="wrap">
        <div className="about-grid">
          <div className="sec-head" style={{textAlign:'left',marginInline:'0'}}>
            <span className="eyebrow">About Sigla Wellness</span>
            <h2 id="aboutTitle">Rediscover Your Best Self</h2>
            <p>
              At Sigla Wellness, we believe that true vitality comes from a harmonious balance of mind, body, and spirit. Our sanctuary combines the tranquility of a wellness studio with expert-guided programs designed to cater to your every need.
            </p>
          </div>
          <div className="about-card" style={{borderColor:'var(--wood-muted)',background:'linear-gradient(135deg,var(--surface) 0%,var(--wood-light) 100%)'}}>
            <h4>Planning Your Visit?</h4>
            <p>First-time guests are welcome. Book a free 15-minute discovery call to find the right starting point for you.</p>
            <a className="btn btn-outline-teal" href="#contact">Book a call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
