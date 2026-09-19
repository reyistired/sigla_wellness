import { MEALS } from '../data/people';

export default function MealPlan({ onAsk }) {
  return (
    <section className="sec band-mint" id="meals" aria-labelledby="mealTitle">
      <div className="wrap meals">
        <div className="sec-head">
          <span className="eyebrow">Nutrition</span>
          <h2 id="mealTitle">Meal plans built around your local market</h2>
          <p>Your nutrition consultant plans around food you can find nearby, cook at home, and afford.</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onAsk('Nutrition Consultation & Meal Plans', "I'd like to ask about meal plans.")}
          >
            Ask about meal plans
          </button>
        </div>
        <div>
          <div className="plate">
            <dl>
              {MEALS.map((m) => (
                <div className="row" key={m.when}>
                  <dt style={{color:'var(--wood)'}}>{m.when}</dt>
                  <dd>{m.food}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="plate-note">
            A sample day. Your plan changes with your goals, budget, and what you like to eat.
          </p>
        </div>
      </div>
    </section>
  );
}
