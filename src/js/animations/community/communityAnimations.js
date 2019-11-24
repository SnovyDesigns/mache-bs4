import gsap from 'gsap';

// ----------------------------------------------

const communityHeading = document.querySelector('.community__heading'),
  communityButton = document.querySelector('.community__button');

// ----------------------------------------------

gsap.set(communityButton, { transitionDuration: 0 });

// ----------------------------------------------

const communityTL = () => {
  const tl = gsap.timeline();

  tl.from([communityHeading, communityButton], {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'Power2.easeIn',
    stagger: 0.4
  });

  return tl;
};

// ----------------------------------------------

export default communityTL;
