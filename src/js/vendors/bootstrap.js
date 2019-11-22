// Bootstrap 4 components import
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/scrollspy';
import $ from 'jquery';

// BS4 requires jquery to target elements
$('.carousel').carousel();
$('body').scrollspy({ target: '#main-nav', offset: 61 });
