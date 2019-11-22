import { gsap, TweenMax, TweenLite, TimelineMax } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TweenLite, TimelineMax);
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import toUp from '../helpers/toUp';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const controller = new ScrollMagic.Controller(),
  aboutSection = document.querySelector('.about'),
  aboutHeading = document.querySelector('.about__heading'),
  aboutHeadingAfter = CSSRulePlugin.getRule('.about__heading::after'),
  aboutParagraph = document.querySelector('.about__paragraph'),
  aboutButton = document.querySelector('.about__button');

// ------------------------------------------

const aboutTL = () => {
  const tl = gsap.timeline();

  tl.add(toUp(aboutHeadingAfter, aboutHeading, aboutParagraph, aboutButton));

  return tl;
};

// ------------------------------------------

const aboutScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: aboutSection,
    triggerHook: 0.55,
    reverse: false
  })
    .addIndicators({
      name: 'animation',
      colorTrigger: 'black',
      colorStart: '#75c695'
    })
    .setTween(aboutTL())
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export default aboutScene;
