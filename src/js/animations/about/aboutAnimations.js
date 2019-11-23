import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
import toUp from '../helpers/toUp';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(CSSRulePlugin, MorphSVGPlugin);

// ----------------------------------------------

const aboutSection = document.querySelector('.about'),
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

const aboutTL = () => {
  const tl = gsap.timeline();

  tl.add('a-start')
    .add(
      toUp(aboutHeadingAfter, aboutHeading, aboutParagraph, aboutButton),
      'a-start'
    )
    .from(
      svgAboutDesk,
      { duration: 1, y: 30, opacity: 0, ease: 'power2.easeOut' },
      'a-start+=1'
    )
    .from(
      svgAboutGirl,
      { duration: 1, y: -30, opacity: 0, ease: 'power2.easeOut' },
      'a-start+=1'
    )
    .from(
      svgAboutFlower,
      { duration: 0.7, x: -60, opacity: 0, ease: 'back.out(1.4)' },
      'a-start+=2'
    )
    .from(
      svgAboutCup,
      { duration: 0.9, x: 60, opacity: 0, ease: 'back.out(1.7)' },
      'a-start+=2.1'
    )
    .from(svgAboutSmog1, { duration: 4, y: 60, opacity: 0 }, 'a-start+=2.9')
    .to(svgAboutSmog1, {
      duration: 3,
      morphSVG: svgAboutSmog2,
      repeat: -1,
      yoyo: true
    });

  return tl;
};

// ------------------------------------------

export default aboutTL;
