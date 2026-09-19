const BRANDS = [
  'Sigla Nutrition',
  'Fresh Filipino',
  'Herbal Roots',
  'Tropical Fitness',
  'Mindful PH',
  'Island Wellness',
];

export default function Brands() {
  return (
    <section className="sec" id="brands" aria-labelledby="brandsTitle">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Trusted Partners</span>
          <h2 id="brandsTitle">Brands We Trust</h2>
        </div>
        <div className="brands-grid">
          {BRANDS.map((b) => (
            <div className="brand-card" key={b}>
              <span className="brand-name">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
