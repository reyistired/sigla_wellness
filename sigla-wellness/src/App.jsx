import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MealPlan from './components/MealPlan';
import Membership from './components/Membership';
import Coaches from './components/Coaches';
import Schedule from './components/Schedule';
import Promo from './components/Promo';
import Testimonials from './components/Testimonials';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import Reveal from './components/Reveal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [prefill, setPrefill] = useState(null);
  const ask = (service, message) => {
    setPrefill({ service, message, at: Date.now() });
    document.getElementById('contact')?.scrollIntoView();
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo('.hero h1', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.2)
      .fromTo('.hero .lede', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.5)
      .fromTo('.hero-actions', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.7)
      .fromTo('.hero-bg img', { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, 0);

    gsap.to('.hero-bg img', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    });

    gsap.to('.hero-content', {
      y: 80,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: '60% top',
        end: 'bottom top',
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <>
      <CursorGlow />
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal stagger={0.08}><Services onAsk={ask} /></Reveal>
        <Reveal><MealPlan onAsk={ask} /></Reveal>
        <Reveal><Promo /></Reveal>
        <Reveal stagger={0.08}><Membership onAsk={ask} /></Reveal>
        <Reveal stagger={0.08}><Coaches /></Reveal>
        <Reveal><Schedule onAsk={ask} /></Reveal>
        <Reveal stagger={0.08}><Testimonials /></Reveal>
        <Reveal><InquiryForm prefill={prefill} /></Reveal>
      </main>
      <Footer />
    </>
  );
}
