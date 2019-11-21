import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const topHeading = document.querySelector('.top__heading'),
  topHeadingAfter = CSSRulePlugin.getRule('.top__heading::after'),
  topParagraph = document.querySelector('.top__paragraph'),
  topButton = document.querySelector('.top__button');

console.log(topHeading);
gsap.to(topHeading, { duration: 1, x: 300 });
