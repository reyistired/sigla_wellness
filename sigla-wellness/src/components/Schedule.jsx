import { useState } from 'react';
import { SCHEDULE, SESSION_TYPES } from '../data/schedule';
import TabList from './TabList';

const DAYS = Object.keys(SCHEDULE);
const DAY_NAMES = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday' };
const JS_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Index of today's tab. The studio is closed on Sundays, so Sunday opens on Monday.
const todayKey = JS_DAYS[new Date().getDay()];
const todayIndex = Math.max(DAYS.indexOf(todayKey), 0);

export default function Schedule({ onAsk }) {
  const [active, setActive] = useState(todayIndex);
  const day = DAYS[active];

  return (
    <section className="sec band-mint" id="schedule" aria-labelledby="schedTitle">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="schedTitle">Weekly schedule</h2>
          <p>Pick a day to see when sessions run. Sessions are by appointment, so send an inquiry to reserve yours.</p>
        </div>
        <TabList
          id="day"
          label="Day of the week"
          className="days"
          tabClass="day"
          items={DAYS.map((d) => ({
            key: d,
            content: (
              <>
                {d}
                {d === todayKey && (
                  <>
                    <span className="day-dot" aria-hidden="true" />
                    <span className="sr-only"> (today)</span>
                  </>
                )}
              </>
            ),
          }))}
          active={active}
          onChange={setActive}
          controls="sessions"
        />
        <ul className="sessions" id="sessions" role="tabpanel" tabIndex={0} aria-labelledby={`day-tab-${active}`}>
          {SCHEDULE[day].map(([time, type]) => {
            const t = SESSION_TYPES[type];
            return (
              <li key={time}>
                <span className="s-time">{time}</span>
                <span>
                  <span className="s-name">{t.name}</span>
                  <span className="s-meta">{t.who}, by appointment</span>
                </span>
                <button
                  className="link-btn"
                  type="button"
                  onClick={() => onAsk(t.service, `I'd like to ask about the ${DAY_NAMES[day]} ${time} ${t.name.toLowerCase()}.`)}
                >
                  Ask about this session
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
