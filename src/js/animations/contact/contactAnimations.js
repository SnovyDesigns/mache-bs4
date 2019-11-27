import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
import ScrollMagic from 'scrollmagic';
import toUp from '../helpers/toUp';
import setDown from '../helpers/setDown';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(CSSRulePlugin, MorphSVGPlugin);

// ----------------------------------------------

const controller = new ScrollMagic.Controller(),
  contactSection = document.querySelector('.contact'),
  contactHeading = document.querySelector('.contact__heading'),
  contactHeadingAfter = CSSRulePlugin.getRule('.contact__heading::after'),
  contactParagraph = document.querySelector('.contact__paragraph'),
  contactButton = document.querySelector('.contact__button'),
  svgContactGuy = document.getElementsByClassName('svg-contact-guy'),
  svgContactLaptop = document.getElementsByClassName('svg-contact-laptop'),
  svgContactLine = document.getElementsByClassName('svg-contact-line'),
  svgContactCup = document.getElementsByClassName('svg-contact-cup'),
  svgContactSmog1 = document.getElementsByClassName('svg-contact-smog1'),
  svgContactSmog2 = document.getElementsByClassName('svg-contact-smog2');

// ------------------------------------------

// Clean elements before animation
const contactClean = () => {
  setDown(contactHeadingAfter, contactHeading, contactParagraph, contactButton);
  gsap.set([svgContactGuy, svgContactLaptop, svgContactCup, svgContactLine], {
    opacity: 0
  });
  gsap.set(svgContactLaptop, { y: 30 });
  gsap.set(svgContactGuy, { y: -30 });
  gsap.set(svgContactCup, { x: -60 });
  gsap.set(svgContactLine, { x: 60 });
  gsap.set([svgContactSmog1, svgContactSmog2], {
    scale: 0
  });
};

// ------------------------------------------

const contactTL = () => {
  const tl = gsap.timeline();

  tl.add('c-start')
    .add(
      toUp(
        contactHeadingAfter,
        contactHeading,
        contactParagraph,
        contactButton
      ),
      'c-start'
    )
    .to(
      [svgContactGuy, svgContactLaptop],
      { duration: 1, y: 0, opacity: 1, ease: 'power2.easeOut' },
      'c-start+=1'
    )
    .to(
      svgContactLine,
      { duration: 0.7, x: 0, opacity: 1, ease: 'power4.easeOut' },
      'c-start+=2'
    )
    .to(
      svgContactCup,
      { duration: 0.9, x: 0, opacity: 1, ease: 'back.out(1.7)' },
      'c-start+=2.3'
    )
    .to([svgContactSmog1, svgContactSmog2], {
      duration: 6,
      scale: 1,
      stagger: 0.75
    });

  return tl;
};

// ------------------------------------------

const contactScene = () => {
  const scene = new ScrollMagic.Scene({
    triggerElement: contactSection,
    triggerHook: 0.45,
    reverse: false
  })
    .on('enter', () => {
      contactTL();
    })
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export { contactClean, contactScene };
