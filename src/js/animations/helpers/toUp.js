import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const toUp = (after, ...args) => {
  const tl = gsap.timeline();

  tl.to([...args], {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'Power2.easeIn',
    stagger: 0.25
  }).to(
    after,
    {
      cssRule: { width: '20rem' },
      duration: 1.25,
      ease: 'Power0.easeNone'
    },
    1.5
  );

  return tl;
};

export default toUp;
