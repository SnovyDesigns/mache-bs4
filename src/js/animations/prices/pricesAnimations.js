import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import toUp from '../helpers/toUpAlt';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const pricesHeading = document.querySelector('.prices__heading'),
  pricesHeadingAfter = CSSRulePlugin.getRule('.prices__heading::after'),
  pricesParagraph = document.querySelector('.prices__paragraph'),
  priceCards = document.querySelectorAll('.price-card');

const pricesTL = () => {
  toUp(pricesHeadingAfter, pricesHeading, pricesParagraph, priceCards);
};

// ----------------------------------------------

export default pricesTL;
