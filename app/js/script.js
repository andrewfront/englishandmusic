require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import accordion from './modules/accordion'
import slider from './modules/slider'
import Swiper, { Autoplay} from 'swiper';
import map from './modules/map'
Swiper.use([Autoplay]);
window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    accordion()
    slider()
    map()
})