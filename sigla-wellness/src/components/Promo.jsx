export default function Promo() {
  return (
    <section className="sec band-deep promo-banner" aria-labelledby="promoTitle">
      <div className="wrap" style={{textAlign:'center'}}>
        <span className="eyebrow eyebrow-dark">Specials</span>
        <h2 id="promoTitle" style={{color:'var(--on-deep)',marginTop:'.8rem'}}>New Clients Promotion</h2>
        <p style={{color:'var(--deep-muted)',marginTop:'1rem',maxWidth:'48ch',marginInline:'auto'}}>
          Start your wellness journey with these limited-time offers for first-time members.
        </p>
        <div className="promo-row">
          <div className="promo-chip">
            <span className="promo-chip-badge free">FREE</span>
            <span className="promo-chip-text">Nutrition Consultation</span>
          </div>
          <div className="promo-chip">
            <span className="promo-chip-badge limited">20% OFF</span>
            <span className="promo-chip-text">All Membership Packages</span>
          </div>
          <div className="promo-chip">
            <span className="promo-chip-badge new">NEW</span>
            <span className="promo-chip-text">First Mindfulness Workshop</span>
          </div>
        </div>
        <a className="btn btn-primary" href="#contact" style={{marginTop:'2.5rem'}}>Claim your offer</a>
      </div>
    </section>
  );
}
