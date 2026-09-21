export default function Logo({ onDark = false }) {
  return (
    <a className="brand" href="#top" aria-label="Sigla Wellness, back to top">
      <img
        className="brand-mark"
        src={onDark ? '/sigla-mark-white.png' : '/sigla-mark.png'}
        alt=""
        width="39"
        height="44"
      />
      <span className="brand-name">Sigla Wellness</span>
    </a>
  );
}
