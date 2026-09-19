# Sigla Wellness

Frontend-only React (Vite) website for the Health & Wellness business portfolio project. Tagline: "Live well, every day."

## Run it

You need Node.js 18 or newer.

```bash
npm install
npm run dev       # opens at http://localhost:5173
npm run build     # production build in dist/
```

## Where things are

```
src/
  App.jsx                 page layout; holds the "prefill the inquiry form" state
  index.css               design tokens (colors, fonts) and all styles
  data/                   edit the content here
    services.js           the five services
    membership.js         the three price tiers (sample rates)
    schedule.js           weekly schedule (sample)
    people.js             coaches, testimonials, sample meal plan (all samples)
  components/
    Navbar, Hero, HabitRing, Services, MealPlan, Membership,
    Coaches, Schedule, Testimonials, InquiryForm, Footer
    TabList, Icons, Logo  shared pieces
```

## Change the look

Colors and fonts are CSS variables at the top of `src/index.css`
(`--green`, `--orange`, `--bg`, `--font-head`, ...). The dark theme values sit right below them.

## Before you submit

- Replace the sample content: prices, coach names, testimonials, schedule, address, social links.
- The inquiry form only validates and shows a confirmation. To send real messages without a backend,
  call EmailJS or Formspree inside `onSubmit` in `src/components/InquiryForm.jsx`.
