import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const dotRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;

    let raf;
    const onMove = (e) => {
      if (!visible) setVisible(true);
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      });
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(14,138,125,0.07) 0%, rgba(196,135,59,0.04) 40%, transparent 70%)',
          filter: 'blur(1px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
