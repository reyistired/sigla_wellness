export default function Hero() {
  return (
    <section className="hero" aria-labelledby="heroTitle">
      <div className="hero-bg">
        <img
          src="/sigla_wellness_hero.png"
          alt=""
          width="1600"
          height="900"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 id="heroTitle">Sigla sa Bawat Araw</h1>
        <p className="lede">
          Fitness coaching, meal plans, and mindfulness sessions crafted for students and working adults in the Philippines.
        </p>
        <div className="hero-actions">
          <a className="btn btn-hero" href="#contact">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
