import { useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import MealPlan from './components/MealPlan';
import Features from './components/Features';
import Membership from './components/Membership';
import Coaches from './components/Coaches';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import StickyCta from './components/StickyCta';
import { BUSINESS, OBJECTIVES, FEATURES } from './data/business';
import { SERVICES } from './data/services';
import { TIERS } from './data/membership';
import { COACHES, TESTIMONIALS, MEALS } from './data/people';

export default function App() {
  // Shared state: "Ask about..." buttons anywhere on the page fill in the inquiry form.
  const [prefill, setPrefill] = useState(null);
  const ask = (service, message) => {
    setPrefill({ service, message, at: Date.now() });
    document.getElementById('contact')?.scrollIntoView();
  };

  // The one page-load moment: the hero settles in.
  // useLayoutEffect sets the starting state before the first paint, so nothing flashes.
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.fromTo('.hero-bg img', { scale: 1.06 }, { scale: 1, duration: 1.8 }, 0)
        .fromTo('.hero h1', { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.15)
        .fromTo('.hero .lede', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.45)
        .fromTo('.hero-actions', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.6);
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Reveal><About business={BUSINESS} /></Reveal>
        <Reveal>
          <MissionVision vision={BUSINESS.vision} mission={BUSINESS.mission} objectives={OBJECTIVES} />
        </Reveal>
        <Reveal><Services services={SERVICES} onAsk={ask} /></Reveal>
        <Reveal><MealPlan meals={MEALS} onAsk={ask} /></Reveal>
        <Reveal><Features features={FEATURES} /></Reveal>
        <Reveal><Membership tiers={TIERS} onAsk={ask} /></Reveal>
        <Reveal><Coaches coaches={COACHES} /></Reveal>
        <Reveal><Schedule onAsk={ask} /></Reveal>
        <Reveal><Testimonials testimonials={TESTIMONIALS} /></Reveal>
        <Reveal><InquiryForm prefill={prefill} /></Reveal>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
