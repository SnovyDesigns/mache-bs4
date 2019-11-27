import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import ScrollMagic from 'scrollmagic';
import toUp from '../helpers/toUp';
import setDown from '../helpers/setDown';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const controller = new ScrollMagic.Controller(),
  pricesSection = document.querySelector('.prices'),
  pricesHeading = document.querySelector('.prices__heading'),
  pricesHeadingAfter = CSSRulePlugin.getRule('.prices__heading::after'),
  pricesParagraph = document.querySelector('.prices__paragraph'),
  priceCards = document.querySelectorAll('.price-card');

// ------------------------------------------

// Clean elements before animation
const pricesClean = () => {
  setDown(pricesHeadingAfter, pricesHeading, pricesParagraph, priceCards);
};

// ------------------------------------------

const pricesTL = () => {
  const tl = gsap.timeline();

  tl.add(toUp(pricesHeadingAfter, pricesHeading, pricesParagraph, priceCards));

  return tl;
};

// ------------------------------------------

const pricesScene = () => {
  const scene = new ScrollMagic.Scene({
    triggerElement: pricesSection,
    triggerHook: 0.45,
    reverse: false
  })
    .on('enter', () => {
      pricesTL();
    })
    .addTo(controller);

  return scene;
};

// ----------------------------------------------

export { pricesClean, pricesScene };
