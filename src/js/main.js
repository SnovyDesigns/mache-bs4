import './vendors/bootstrap';
import './animations/navbar/navbarAnimations';
import headerTL from './animations/top/topAnimations';
import aboutTL from './animations/about/aboutAnimations';
import servicesTL from './animations/services/servicesAnimations';

window.onload = () => {
  headerTL();
  aboutTL();
  servicesTL();
};
