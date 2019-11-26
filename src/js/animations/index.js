import gsap from 'gsap';
import './navbar/navbarAnimations';
import headerTL from './top/topAnimations';
import { aboutClean, aboutScene } from './about/aboutAnimations';
import servicesTL from './services/servicesAnimations';
import pricesTL from './prices/pricesAnimations';
import featuresTL from './features/featuresAnimations';
import communityTL from './community/communityAnimations';
import articlesTL from './articles/articlesAnimations';

// ------------------------------------------

// Clean sections before running scenes
const sectionsClean = () => {
  const tl = gsap.timeline();

  tl.add(aboutClean());

  return tl;
};

// ------------------------------------------

window.onload = () => {
  sectionsClean();
  headerTL();
  aboutScene();
  // servicesTL();
  // pricesTL();
  // featuresTL();
  // communityTL();
  // articlesTL();
};
