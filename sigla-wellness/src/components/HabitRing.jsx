import { useState } from 'react';
import { Check } from './Icons';

const HABITS = [
  'Drink 8 glasses of water',
  'Move for 20 minutes',
  'Eat one home-cooked meal',
  'Breathe slowly for 3 minutes',
  'Sleep before 11 pm',
];
const R = 52;
const C = 2 * Math.PI * R; // ring circumference

export default function HabitRing() {
  const [done, setDone] = useState(() => HABITS.map(() => false));
  const n = done.filter(Boolean).length;
  const total = HABITS.length;

  const message =
    n === 0 ? 'Tick what you did today. Small habits count.'
    : n === total ? 'Full sigla today. Do it again tomorrow.'
    : `${n} of ${total} done. Keep going.`;

  return (
    <div className="habit" role="group" aria-labelledby="habitTitle">
      <div className="habit-top">
        <div className={`ring${n === total ? ' full' : ''}`} aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <circle className="track" cx="60" cy="60" r={R} />
            <circle
              className="bar"
              cx="60"
              cy="60"
              r={R}
              style={{ strokeDasharray: C, strokeDashoffset: C * (1 - n / total) }}
            />
          </svg>
          <div className="ring-count"><b>{n}</b><small>of {total}</small></div>
        </div>
        <div>
          <p className="habit-title" id="habitTitle">Today's sigla</p>
          <p className="habit-sub">Small habits, counted every day.</p>
        </div>
      </div>

      <ul className="habit-list">
        {HABITS.map((habit, i) => (
          <li key={habit}>
            <label>
              <input
                type="checkbox"
                checked={done[i]}
                onChange={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
              />
              <span className="box"><Check /></span>
              <span className="habit-text">{habit}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="habit-msg" aria-live="polite">{message}</p>
    </div>
  );
}
