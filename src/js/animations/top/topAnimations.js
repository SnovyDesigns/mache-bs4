import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import toUp from '../helpers/toUp';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const topHeading = document.querySelector('.top__heading'),
  topHeadingAfter = CSSRulePlugin.getRule('.top__heading::after'),
  topParagraph = document.querySelector('.top__paragraph'),
  topButton = document.querySelector('.top__button');

gsap.set(topButton, { transitionDuration: 0 });

const headerTL = () => {
  toUp(topHeadingAfter, topHeading, topParagraph, topButton);
};

// ----------------------------------------------

export default headerTL;
