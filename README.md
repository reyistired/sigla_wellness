# Sigla Wellness

**Sigla sa Bawat Araw.**

A frontend-only React (Vite) website for the Sigla Wellness health and wellness business. Built with React 18, Vite, and GSAP animations.

![Sigla Wellness](sigla-wellness/public/sigla_wellness_hero.webp)

## Features

- Responsive, mobile-first design
- One hero entrance animation with GSAP
- Inquiry form with service prefill
- Sections: Hero with next sessions, About, Mission and Vision, Services, Meal Plans, Why Choose Us, Membership, Coaches, Schedule, Testimonials, Contact

## Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **GSAP 3** - Scroll animations and transitions
- **CSS Variables** - Design tokens and theming

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/sigla-wellness.git
cd sigla-wellness
npm install
```

### Development

```bash
npm run dev       # Start dev server at http://localhost:5173
```

### Build

```bash
npm run build     # Production build in dist/
npm run preview   # Preview the production build
```

## Project Structure

```
sigla_wellness/
├── assets/                         # Source images (logos, hero)
├── sigla-wellness/                 # React app
│   ├── public/                     # Static assets served as-is
│   ├── src/
│   │   ├── App.jsx                 # Root component & layout
│   │   ├── index.css               # Design tokens & all styles
│   │   ├── data/                   # Content data (edit here)
│   │   │   ├── business.js         # Overview, mission, vision, objectives, features
│   │   │   ├── services.js         # Service offerings
│   │   │   ├── membership.js       # Pricing tiers
│   │   │   ├── schedule.js         # Weekly schedule
│   │   │   └── people.js           # Coaches, testimonials, meal plan
│   │   └── components/             # UI components
│   │       ├── Navbar.jsx
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── MissionVision.jsx
│   │       ├── Services.jsx
│   │       ├── MealPlan.jsx
│   │       ├── Features.jsx
│   │       ├── Membership.jsx
│   │       ├── Coaches.jsx
│   │       ├── Schedule.jsx
│   │       ├── Testimonials.jsx
│   │       ├── InquiryForm.jsx
│   │       ├── Footer.jsx
│   │       └── ...                 # Shared components
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── README.md
├── CONTRIBUTING.md
├── LICENSE
└── .gitignore
```

## Customization

### Colors & Fonts

Edit CSS variables at the top of `src/index.css`:

```css
:root {
  --teal: #0e8a7d;
  --mint: #e8f5f0;
  --wood: #c4873b;
  --deep: #0b3a36;
  --font-head: 'Fraunces', serif;
  --font-body: 'Jost', sans-serif;
}
```

### Content

Update business data in `src/data/`:

- `business.js` - Overview, mission, vision, objectives, and features
- `services.js` - Service descriptions
- `membership.js` - Membership tiers and rates
- `schedule.js` - Weekly class schedule
- `people.js` - Coach profiles, testimonials, and meal plans

### Contact Form

The inquiry form validates and shows a confirmation message. To send real emails, integrate [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/) in `src/components/InquiryForm.jsx`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
