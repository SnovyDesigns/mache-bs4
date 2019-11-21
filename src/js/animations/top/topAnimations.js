import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const topHeading = document.querySelector('.top__heading'),
  topHeadingAfter = CSSRulePlugin.getRule('.top__heading::after'),
  topParagraph = document.querySelector('.top__paragraph'),
  topButton = document.querySelector('.top__button');

gsap.set(topButton, { transitionDuration: 0 });

const headerTL = () => {
  const tl = gsap.timeline();
  tl.from([topHeading, topParagraph, topButton], {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'Power2.easeIn',
    stagger: 0.4
  }).from(
    topHeadingAfter,
    {
      cssRule: { width: 0 },
      duration: 1.25,
      ease: 'Power0.easeNone'
    },
    '-=1'
  );

  return tl;
};

// ----------------------------------------------

export default headerTL;
