import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const toUp = (after, ...args) => {
  const tl = gsap.timeline();

  tl.from([...args], {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'Power2.easeIn',
    stagger: 0.4
  }).from(
    after,
    {
      cssRule: { width: 0 },
      duration: 1.25,
      ease: 'Power0.easeNone'
    },
    '-=1'
  );

  return tl;
};

export default toUp;
