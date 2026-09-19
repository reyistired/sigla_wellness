import { useRef } from 'react';

// Accessible tab buttons: arrow keys, Home and End all work.
// `items` is an array of { key, content }.
export default function TabList({ id, label, orientation, items, active, onChange, className, tabClass, controls }) {
  const refs = useRef([]);

  function onKeyDown(e, i) {
    const n = items.length;
    let next = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % n;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + n) % n;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = n - 1;
    if (next !== null) {
      e.preventDefault();
      onChange(next);
      refs.current[next]?.focus();
    }
  }

  return (
    <div className={className} role="tablist" aria-label={label} aria-orientation={orientation}>
      {items.map((item, i) => (
        <button
          key={item.key}
          ref={(el) => (refs.current[i] = el)}
          type="button"
          role="tab"
          id={`${id}-tab-${i}`}
          className={tabClass}
          aria-selected={i === active}
          aria-controls={controls}
          tabIndex={i === active ? 0 : -1}
          onClick={() => onChange(i)}
          onKeyDown={(e) => onKeyDown(e, i)}
        >
          {item.content}
        </button>
      ))}
    </div>
  );
}
