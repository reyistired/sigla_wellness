// The five services from the planning form. Edit text here, not in the component.
export const SERVICES = [
  {
    name: 'Nutrition Consultation & Meal Plans',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80',
    icon: 'nutrition',
    desc: 'Practical, budget-friendly meal planning using local, affordable food.',
    gets: [
      'A one-on-one consultation about your goals and food budget',
      'A meal plan built from ingredients at your local market',
      'Swap ideas for days when the plan does not fit',
    ],
    cta: 'Ask about meal plans',
  },
  {
    name: 'Personal Fitness Coaching',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
    icon: 'fitness',
    desc: "One-on-one workout plans and guided sessions based on the client's goals.",
    gets: [
      'A workout plan that fits your goals and schedule',
      'Guided sessions with a coach beside you',
      'A starting point for every fitness level, including first-timers',
    ],
    cta: 'Ask about coaching',
  },
  {
    name: 'Weight Management Program',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80',
    icon: 'weight',
    desc: 'An 8-12 week guided program combining exercise, meal planning, and progress tracking.',
    gets: [
      'Exercise sessions matched to your level',
      'A meal plan you can keep up with',
      'Regular check-ins so you can see what is changing',
    ],
    cta: 'Ask about the program',
  },
  {
    name: 'Wellness Membership Packages',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
    icon: 'membership',
    desc: 'Monthly bundles combining classes, coaching, and consultations at a discount.',
    gets: [
      'One monthly fee instead of paying per session',
      'Pick the bundle size that fits your week',
      'Coaching and consultations under one plan',
    ],
    href: '#membership',
    cta: 'See membership packages',
  },
  {
    name: 'Stress & Mindfulness Workshops',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
    icon: 'mindful',
    desc: 'Guided breathing, sleep hygiene, and stress-management sessions.',
    gets: [
      'Guided breathing you can repeat at home',
      'Simple sleep habits for busy weeks',
      'Ways to manage stress during exams and deadlines',
    ],
    cta: 'Ask about workshops',
  },
];

// Values for the inquiry form's service dropdown.
export const SERVICE_OPTIONS = ['Not sure yet', ...SERVICES.map((s) => s.name)];
