import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';

// ----------------------------------------------

const controller = new ScrollMagic.Controller(),
  communitySection = document.querySelector('.community'),
  communityHeading = document.querySelector('.community__heading'),
  communityButton = document.querySelector('.community__button');

// ----------------------------------------------

// ------------------------------------------

// Clean elements before animation
const communityClean = () => {
  gsap.set([communityHeading, communityButton], { y: 30, opacity: 0 });
  gsap.set(communityButton, { transitionDuration: 0 });
};

// ----------------------------------------------

const communityTL = () => {
  const tl = gsap.timeline();

  tl.to([communityHeading, communityButton], {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'Power2.easeIn',
    stagger: 0.25
  });

  return tl;
};

// ------------------------------------------

const communityScene = () => {
  const scene = new ScrollMagic.Scene({
    triggerElement: communitySection,
    triggerHook: 0.65,
    reverse: false
  })
    .on('enter', () => {
      communityTL();
    })
    .addTo(controller);

  return scene;
};

// ----------------------------------------------

export { communityClean, communityScene };
