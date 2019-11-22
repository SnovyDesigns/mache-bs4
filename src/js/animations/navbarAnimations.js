import gsap from 'gsap';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(MorphSVGPlugin);

// ----------------------------------------------

const nav = document.querySelector('.nav'),
  navToggler = document.querySelector('.nav__toggler'),
  navHamburger = document.querySelector('.nav__hamburger'),
  navClose = document.querySelector('.nav__close');
