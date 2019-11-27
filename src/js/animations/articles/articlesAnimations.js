import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import ScrollMagic from 'scrollmagic';
import toUp from '../helpers/toUp';
import setDown from '../helpers/setDown';

// ----------------------------------------------

const controller = new ScrollMagic.Controller(),
  articlesSection = document.querySelector('.articles'),
  articlesHeading = document.querySelector('.articles__heading'),
  articlesHeadingAfter = CSSRulePlugin.getRule('.articles__heading::after'),
  articlesParagraph = document.querySelector('.articles__paragraph'),
  articleCards = document.querySelectorAll('.article-card');

// ------------------------------------------

// Clean elements before animation
const articlesClean = () => {
  setDown(
    articlesHeadingAfter,
    articlesHeading,
    articlesParagraph,
    articleCards
  );
};

// ------------------------------------------

// ----------------------------------------------

const articlesTL = () => {
  const tl = gsap.timeline();

  tl.add(
    toUp(articlesHeadingAfter, articlesHeading, articlesParagraph, articleCards)
  );

  return tl;
};

// ----------------------------------------------

const articlesScene = () => {
  const scene = new ScrollMagic.Scene({
    triggerElement: articlesSection,
    triggerHook: 0.45,
    reverse: false
  })
    .on('enter', () => {
      articlesTL();
    })
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export { articlesClean, articlesScene };
