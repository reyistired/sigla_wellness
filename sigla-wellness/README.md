# Sigla Wellness

Frontend-only React (Vite) website for the Sigla Wellness business portfolio project. Tagline: "Sigla sa Bawat Araw."
Business content comes from the approved Activity 4 planning form.

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
    business.js           name, overview, mission, vision, objectives, features (from Activity 4)
    services.js           the five services
    membership.js         the three price tiers (sample rates)
    schedule.js           weekly schedule (sample)
    people.js             coaches, testimonials, sample meal plan (all samples)
  components/
    Navbar, Hero, About, MissionVision, Services, MealPlan, Features,
    Membership, Coaches, Schedule, Testimonials, InquiryForm, Footer
    TabList, Icons, Logo, Reveal   shared pieces
public/
  sigla-mark.png, sigla-mark-white.png   logo symbol (color and white)
  sigla_wellness_hero.webp               hero photo
  favicon.png
```

## Second Term Project checklist

| Requirement | Where |
| --- | --- |
| Vite + React, `src/components/` | project root, `src/components/` |
| Navbar, Overview, Services, Mission/Vision, Features, Contact Form, Footer | `Navbar`, `About`, `Services`, `MissionVision`, `Features`, `InquiryForm`, `Footer` |
| Props from parent to child | `App.jsx` owns the data and passes it down (`services`, `tiers`, `coaches`, `business`, ...); `Services` passes one `service` to `ServicePanel`; `Membership` passes a `tier` to `PriceCard` |
| Services stored as an array of objects | `SERVICES` in `src/data/services.js` |
| `.map()` with a unique `key` | `Services` (tabs), `ServicePanel` (list), `Membership`, `Coaches`, `Features`, `Testimonials`, `Navbar` |
| `useState()` with a visible change | Navbar menu, Services tabs, Schedule day tabs, inquiry form (errors and confirmation), "Ask" buttons that fill the form |
| Business content from Activity 4 | `src/data/business.js` |
| CSS styling, responsive | `src/index.css` (mobile first, breakpoints at 600, 900, and 1000 px) |

## Change the look

Colors and fonts are CSS variables at the top of `src/index.css`
(`--teal`, `--mint`, `--wood`, `--deep`, `--font-head`, `--font-body`).
Headings use Fraunces and body text uses Jost, loaded from Google Fonts in `index.html`.

## Before you submit

- Replace the sample content: prices, coach names, testimonials, schedule, address, social links.
- The inquiry form only validates and shows a confirmation. To send real messages without a backend,
  call EmailJS or Formspree inside `onSubmit` in `src/components/InquiryForm.jsx`.
