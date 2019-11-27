import gsap from 'gsap';
import './navbar/navbarAnimations';
import headerTL from './top/topAnimations';
import { aboutClean, aboutScene } from './about/aboutAnimations';
import { servicesClean, servicesScene } from './services/servicesAnimations';
import { pricesClean, pricesScene } from './prices/pricesAnimations';
import featuresScene from './features/featuresAnimations';
import {
  communityClean,
  communityScene
} from './community/communityAnimations';
import { articlesClean, articlesScene } from './articles/articlesAnimations';
import { blogClean, blogScene } from './blog/blogAnimations';
import { contactClean, contactScene } from './contact/contactAnimations';

// ------------------------------------------

// Clean sections before running scenes
const sectionsClean = () => {
  aboutClean();
  servicesClean();
  pricesClean();
  communityClean();
  articlesClean();
  blogClean();
  contactClean();
};

// ------------------------------------------

// Add all scenes
const sectionScenes = () => {
  aboutScene();
  servicesScene();
  pricesScene();
  featuresScene();
  communityScene();
  articlesScene();
  blogScene();
  contactScene();
};

// ------------------------------------------

window.onload = () => {
  headerTL();
  sectionsClean();
  sectionScenes();
};
