import gsap from 'gsap';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(MorphSVGPlugin, ScrollToPlugin);

// ----------------------------------------------

const nav = document.querySelector('.nav'),
  navToggler = document.querySelector('.nav__toggler'),
  navHamburger = document.querySelector('.nav__hamburger'),
  navClose = document.querySelector('.nav__close'),
  navLinks = document.querySelectorAll('.nav__link'),
  home = document.getElementById('home');

let homePos = home.getBoundingClientRect().top,
  navbarClass = nav.className;

// ----------------------------------------------

if (homePos === 0) {
  nav.className = navbarClass;
}

document.addEventListener('scroll', () => {
  homePos = home.getBoundingClientRect().top;

  if (homePos === 0) {
    nav.className = navbarClass;
  } else {
    nav.classList.add('nav--fixed');
  }
});

// ----------------------------------------------

const navIconTL = gsap
  .timeline({ paused: true })
  .set([navHamburger, navClose], { transformOrigin: '50% 50%' })
  .to(navHamburger, { duration: 0.5, rotate: 360, morphSVG: navClose });

navToggler.addEventListener('click', () => {
  if (navToggler.classList.contains('collapsed')) {
    navIconTL.play();
  } else {
    navIconTL.reverse();
  }
});

// ------------------------------------------

const navTL = href => {
  const tl = gsap.timeline();
  tl.to(window, {
    duration: 1.5,
    scrollTo: href === '#contact' ? href : { y: href, offsetY: 61 },
    ease: 'Power3.easeOut'
  });
  return tl;
};

// ------------------------------------------

for (const link of navLinks) {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    navTL(href);
  });
}
