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
  aboutSection = document.querySelector('.about'),
  aboutHeading = document.querySelector('.about__heading'),
  aboutHeadingAfter = CSSRulePlugin.getRule('.about__heading::after'),
  aboutParagraph = document.querySelector('.about__paragraph'),
  aboutButton = document.querySelector('.about__button'),
  svgAboutDesk = document.getElementById('svg-about-desk'),
  svgAboutGirl = document.getElementById('svg-about-girl'),
  svgAboutFlower = document.getElementById('svg-about-flower'),
  svgAboutCup = document.getElementById('svg-about-cup'),
  svgAboutSmog1 = document.getElementById('svg-about-smog1'),
  svgAboutSmog2 = document.getElementById('svg-about-smog2');

// ------------------------------------------

// Clean elements before animation

const aboutClean = () => {
  setDown(aboutHeadingAfter, aboutHeading, aboutParagraph, aboutButton);
  gsap.set(
    [svgAboutDesk, svgAboutGirl, svgAboutFlower, svgAboutCup, svgAboutSmog1],
    { opacity: 0 }
  );
  gsap.set(svgAboutDesk, { y: 30 });
  gsap.set(svgAboutGirl, { y: -30 });
  gsap.set(svgAboutFlower, { x: -60 });
  gsap.set(svgAboutCup, { x: 60 });
  gsap.set(svgAboutSmog1, { y: 60 });
};

// ------------------------------------------

const aboutTL = () => {
  const tl = gsap.timeline({ paused: true });

  tl.add('a-start')
    .add(
      toUp(aboutHeadingAfter, aboutHeading, aboutParagraph, aboutButton),
      'a-start'
    )
    .to(
      [svgAboutDesk, svgAboutGirl],
      { duration: 1, y: 0, opacity: 1, ease: 'power2.easeOut' },
      'a-start+=1'
    )
    .to(
      svgAboutFlower,
      { duration: 0.7, x: 0, opacity: 1, ease: 'back.out(1.4)' },
      'a-start+=2'
    )
    .to(
      svgAboutCup,
      { duration: 0.9, x: 0, opacity: 1, ease: 'back.out(1.7)' },
      'a-start+=2.1'
    )
    .to(svgAboutSmog1, { duration: 4, y: 0, opacity: 1 }, 'a-start+=2.9')
    .to(svgAboutSmog1, {
      duration: 5,
      morphSVG: svgAboutSmog2,
      repeat: -1,
      yoyo: true
    });

  return tl;
};

// ------------------------------------------

const aboutScene = () => {
  const scene = new ScrollMagic.Scene({
    triggerElement: aboutSection,
    triggerHook: 0.45,
    reverse: false
  })
    .on('enter', () => {
      aboutTL().play();
    })
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export { aboutClean, aboutScene };
