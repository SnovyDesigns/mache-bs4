import './vendors/bootstrap';
import './animations/navbar/navbarAnimations';
import headerTL from './animations/top/topAnimations';
import aboutTL from './animations/about/aboutAnimations';
import servicesTL from './animations/services/servicesAnimations';
import pricesTL from './animations/prices/pricesAnimations';
import featuresTL from './animations/features/featuresAnimations';
import communityTL from './animations/community/communityAnimations';

window.onload = () => {
  headerTL();
  aboutTL();
  servicesTL();
  pricesTL();
  featuresTL();
  communityTL();
};
