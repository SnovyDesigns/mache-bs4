import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const topHeading = document.querySelector('.top__heading'),
  topHeadingAfter = CSSRulePlugin.getRule('.top__heading::after'),
  topParagraph = document.querySelector('.top__paragraph'),
  topButton = document.querySelector('.top__button');

const headerTL = () => {
  const tl = gsap.timeline();
  tl.to([topHeading, topParagraph], { duration: 1, x: 300 });

  return tl;
};

export default headerTL;
