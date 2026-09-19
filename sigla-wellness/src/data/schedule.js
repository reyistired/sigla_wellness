// Sample weekly schedule. Replace with the real one.
export const SESSION_TYPES = {
  coach: { name: 'Personal fitness coaching', service: 'Personal Fitness Coaching', who: 'with Mia' },
  food: { name: 'Nutrition consultation', service: 'Nutrition Consultation & Meal Plans', who: 'with Paolo' },
  check: { name: 'Weight program check-in', service: 'Weight Management Program', who: 'with Mia' },
  calm: { name: 'Stress & mindfulness workshop', service: 'Stress & Mindfulness Workshops', who: 'with Lea' },
};

export const SCHEDULE = {
  Mon: [['6:00 AM', 'coach'], ['12:30 PM', 'food'], ['5:30 PM', 'check']],
  Tue: [['7:00 AM', 'coach'], ['4:00 PM', 'food'], ['6:00 PM', 'calm']],
  Wed: [['6:00 AM', 'coach'], ['12:30 PM', 'check'], ['5:30 PM', 'food']],
  Thu: [['7:00 AM', 'coach'], ['4:00 PM', 'food'], ['6:00 PM', 'calm']],
  Fri: [['6:00 AM', 'coach'], ['12:30 PM', 'check'], ['5:00 PM', 'food']],
  Sat: [['8:00 AM', 'coach'], ['10:00 AM', 'calm'], ['1:00 PM', 'food']],
};
