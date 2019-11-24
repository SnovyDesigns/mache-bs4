import './vendors/bootstrap';
import './animations/navbar/navbarAnimations';
import headerTL from './animations/top/topAnimations';
import aboutTL from './animations/about/aboutAnimations';
import servicesTL from './animations/services/servicesAnimations';
import pricesTL from './animations/prices/pricesAnimations';

window.onload = () => {
  headerTL();
  aboutTL();
  servicesTL();
  pricesTL();
};
