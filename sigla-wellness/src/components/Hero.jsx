export default function Hero() {
  return (
    <section className="hero" aria-labelledby="heroTitle">
      <div className="hero-bg">
        <img
          src="/sigla_wellness_hero.webp"
          alt=""
          width="1672"
          height="941"
          fetchPriority="high"
        />
      </div>
      <div className="wrap hero-copy">
        <h1 id="heroTitle">Sigla sa<br />Bawat Araw</h1>
        <p className="lede">
          Fitness coaching, meal plans, and mindfulness sessions crafted for students and working adults in the Philippines.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">Book a Wellness Session</a>
          <a className="text-link" href="#services">See our services</a>
        </div>
      </div>
    </section>
  );
}
