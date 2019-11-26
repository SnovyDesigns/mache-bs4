import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import toUp from '../helpers/toUpAlt';

// ----------------------------------------------

const articlesHeading = document.querySelector('.articles__heading'),
  articlesHeadingAfter = CSSRulePlugin.getRule('.articles__heading::after'),
  articlesParagraph = document.querySelector('.articles__paragraph'),
  articleCards = document.querySelectorAll('.article-card');

// ----------------------------------------------

const articlesTL = () => {
  const tl = gsap.timeline();

  tl.add(
    toUp(articlesHeadingAfter, articlesHeading, articlesParagraph, articleCards)
  );

  return tl;
};

// ----------------------------------------------

export default articlesTL;
