# Sigla Wellness

**Live well, every day.**

A frontend-only React (Vite) website for the Sigla Wellness health and wellness business. Built with React 18, Vite, and GSAP animations.

![Sigla Wellness](sigla-wellness/public/sigla_wellness_hero.png)

## Features

- Responsive, mobile-first design
- Smooth scroll animations with GSAP
- Light/dark theme support
- Inquiry form with service prefill
- Sections: Hero, About, Services, Meal Plans, Membership, Coaches, Schedule, Testimonials, Contact

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
│   │   │   ├── services.js         # Service offerings
│   │   │   ├── membership.js       # Pricing tiers
│   │   │   ├── schedule.js         # Weekly schedule
│   │   │   └── people.js           # Coaches, testimonials, meal plan
│   │   └── components/             # UI components
│   │       ├── Navbar.jsx
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Services.jsx
│   │       ├── MealPlan.jsx
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
  --green: #2a6a4a;
  --orange: #e8743a;
  --bg: #faf8f5;
  --font-head: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
}
```

Dark theme values are defined right below in a `@media (prefers-color-scheme: dark)` block.

### Content

Update business data in `src/data/`:

- `services.js` - Service descriptions and pricing
- `membership.js` - Membership tiers and rates
- `schedule.js` - Weekly class schedule
- `people.js` - Coach profiles, testimonials, and meal plans

### Contact Form

The inquiry form validates and shows a confirmation message. To send real emails, integrate [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/) in `src/components/InquiryForm.jsx`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
