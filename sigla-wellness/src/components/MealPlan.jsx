export default function MealPlan({ meals, onAsk }) {
  return (
    <section className="sec band-mint" id="meals" aria-labelledby="mealTitle">
      <div className="wrap meals">
        <div>
          <h2 id="mealTitle">Meal plans built around your local market</h2>
          <p className="meals-text">
            Your nutrition consultant plans around food you can find nearby, cook at home, and afford.
          </p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onAsk('Nutrition Consultation & Meal Plans', "I'd like to ask about meal plans.")}
          >
            Ask about meal plans
          </button>
        </div>
        <div className="plate">
          <p className="plate-title">A sample day</p>
          <dl>
            {meals.map((m) => (
              <div className="row" key={m.when}>
                <dt>{m.when}</dt>
                <dd>{m.food}</dd>
              </div>
            ))}
          </dl>
          <p className="plate-note">Your plan changes with your goals, budget, and what you like to eat.</p>
        </div>
      </div>
    </section>
  );
}
