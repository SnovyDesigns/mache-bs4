import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const setDown = (after, ...args) => {
  gsap.set([...args], { y: 30, opacity: 0 });
  gsap.set(after, {
    cssRule: { width: 0 }
  });
};

export default setDown;
