import gsap from 'gsap';

// ----------------------------------------------

const features = document.querySelectorAll('.feature');

// ----------------------------------------------

const featuresTL = () => {
  const ftl = gsap.timeline();

  for (const feature of features) {
    let featureIcon = feature.querySelector('.feature__icon'),
      featureTitle = feature.querySelector('.feature__title'),
      featureParagraph = feature.querySelector('.feature__paragraph'),
      tl = gsap.timeline();

    tl.from([featureTitle, featureParagraph], {
      duration: 0.75,
      y: 30,
      opacity: 0,
      ease: 'Power2.easeIn',
      stagger: 0.25
    }).from(
      featureIcon,
      { scale: 0, duration: 0.8, ease: 'back.out(1.4)' },
      '-=0.5'
    );

    ftl.add(tl);
  }

  return ftl;
};

// ----------------------------------------------

export default featuresTL;
