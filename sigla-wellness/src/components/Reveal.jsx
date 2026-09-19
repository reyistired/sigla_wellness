import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children, className = '', as: Tag = 'div', stagger, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !ref.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const children = ref.current.querySelectorAll('.svc-card-tall, .svc-featured, .tier, .coach, .q, .promo-chip, .about-card');
    if (children.length === 0) return;

    gsap.fromTo(
      children,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: stagger || 0.1,
        ease: 'power2.out',
        clearProps: 'transform',
      }
    );
  }, [visible, stagger]);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
