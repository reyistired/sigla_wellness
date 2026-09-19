// Sample rates. The business sets the final prices.
export const TIERS = [
  {
    name: 'Starter',
    forWho: 'For trying things out',
    price: '₱799',
    features: ['1 nutrition consultation', '2 fitness coaching sessions', 'A monthly meal plan'],
  },
  {
    name: 'Steady',
    forWho: 'For building a routine',
    price: '₱1,499',
    featured: true,
    features: [
      '1 nutrition consultation',
      '4 fitness coaching sessions',
      '1 mindfulness workshop',
      'A progress check-in every 2 weeks',
    ],
  },
  {
    name: 'Full Sigla',
    forWho: 'For the whole program',
    price: '₱2,299',
    features: [
      '2 nutrition consultations',
      '8 fitness coaching sessions',
      'All mindfulness workshops',
      'Weekly progress tracking',
    ],
  },
];
