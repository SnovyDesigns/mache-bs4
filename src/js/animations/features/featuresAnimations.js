import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';

// ----------------------------------------------

const controller = new ScrollMagic.Controller(),
  featuresSection = document.querySelector('.features'),
  features = document.querySelectorAll('.feature'),
  ftl = gsap.timeline({ paused: true });

// ----------------------------------------------

for (const feature of features) {
  let featureIcon = feature.querySelector('.feature__icon'),
    featureTitle = feature.querySelector('.feature__title'),
    featureParagraph = feature.querySelector('.feature__paragraph'),
    tl = gsap.timeline();

  gsap.set([featureTitle, featureParagraph], { y: 30, opacity: 0 });
  gsap.set(featureIcon, { scale: 0 });

  tl.to([featureTitle, featureParagraph], {
    duration: 0.45,
    y: 0,
    opacity: 1,
    ease: 'Power2.easeIn',
    stagger: 0.25
  }).to(
    featureIcon,
    { scale: 1, duration: 0.6, ease: 'back.out(1.4)' },
    '-=0.5'
  );

  ftl.add(tl);
}

// ----------------------------------------------

const featuresTL = () => {
  return ftl;
};

// ------------------------------------------

const featuresScene = () => {
  const scene = new ScrollMagic.Scene({
    triggerElement: featuresSection,
    triggerHook: 0.45,
    reverse: false
  })
    .on('enter', () => {
      featuresTL().play();
    })
    .addTo(controller);

  return scene;
};

export default featuresScene;
