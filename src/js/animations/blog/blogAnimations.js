import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import ScrollMagic from 'scrollmagic';
import toUp from '../helpers/toUp';
import setDown from '../helpers/setDown';

// ----------------------------------------------

const controller = new ScrollMagic.Controller(),
  blogSection = document.querySelector('.blog'),
  blogSectionBg = document.querySelector('.blog__bg'),
  blogHeading = document.querySelector('.blog__heading'),
  blogHeadingAfter = CSSRulePlugin.getRule('.blog__heading::after'),
  blogParagraph = document.querySelector('.blog__paragraph'),
  blogButton = document.querySelector('.blog__button');

// ------------------------------------------

// Clean elements before animation
const blogClean = () => {
  setDown(blogHeadingAfter, blogHeading, blogParagraph, blogButton);
};

// ------------------------------------------

const blogBgTL = () => {
  const tl = gsap.timeline();

  tl.from(blogSectionBg, { duration: 6, y: 600, ease: 'power0.easeNone' });

  return tl;
};

// ----------------------------------------------

const blogTL = () => {
  const tl = gsap.timeline();

  tl.add(toUp(blogHeadingAfter, blogHeading, blogParagraph, blogButton));

  return tl;
};

// ----------------------------------------------

const blogScene = () => {
  const scene = new ScrollMagic.Scene({
    triggerElement: blogSection,
    triggerHook: 0.45,
    reverse: false
  })
    .on('enter', () => {
      blogTL();
    })
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export { blogClean, blogScene };
