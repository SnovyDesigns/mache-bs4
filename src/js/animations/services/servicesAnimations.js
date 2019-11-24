import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import toUp from '../helpers/toUp';

// ----------------------------------------------

// Required GSAP register plugins
gsap.registerPlugin(CSSRulePlugin);

// ----------------------------------------------

const servicesHeading = document.querySelector('.services__heading'),
  servicesHeadingAfter = CSSRulePlugin.getRule('.services__heading::after'),
  servicesParagraph = document.querySelector('.services__paragraph'),
  servicesIcons = document.querySelectorAll('.services__icon'),
  servicesSubheadings = document.querySelectorAll('.services__subheading'),
  svgServicesIcon1 = document.querySelector('.services__icon-1'),
  svgServicesIcon2 = document.querySelector('.services__icon-2'),
  svgServicesIcon3 = document.querySelector('.services__icon-3'),
  svgServicesIcon4 = document.querySelector('.services__icon-4');

let servicesIconsTL = gsap.timeline({ paused: true, repeat: -1 });

for (const icon of [
  svgServicesIcon1,
  svgServicesIcon2,
  svgServicesIcon3,
  svgServicesIcon4
]) {
  let iconBg = icon.querySelector('.bg'),
    iconPrimary = icon.querySelectorAll('.primary'),
    iconGrey = icon.querySelectorAll('.grey'),
    tl = gsap.timeline();

  tl.add('start')
    .to(icon, { duration: 1.5, borderColor: '#ed145b' }, 'start')
    .to(iconBg, { duration: 1.5, width: '100%' }, 'start')
    .to(iconPrimary, { duration: 1.5, fill: '#000000' }, 'start')
    .to(iconGrey, { duration: 1.5, fill: '#ffffff' }, 'start')
    .to(icon, { duration: 1.5, borderColor: '#c9c9c9' }, 'start+=2.5')
    .to(iconBg, { duration: 1.5, width: '0%' }, 'start+=2.5')
    .to(iconPrimary, { duration: 1.5, fill: '#ed145b' }, 'start+=2.5')
    .to(iconGrey, { duration: 1.5, fill: '#c9c9c9' }, 'start+=2.5');

  servicesIconsTL.add(tl);
}

// ------------------------------------------

const servicesTL = () => {
  const tl = gsap.timeline();

  tl.add(
    toUp(
      servicesHeadingAfter,
      servicesHeading,
      servicesParagraph,
      servicesIcons,
      servicesSubheadings
    )
  ).add(servicesIconsTL.play(), '+=2');

  return tl;
};

// ------------------------------------------

export default servicesTL;
