require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import accordion from './modules/accordion'
import slider from './modules/slider'
import Swiper, { Autoplay} from 'swiper';
import map from './modules/map'
import lazy from './modules/lazy';
Swiper.use([Autoplay]);
window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    lazy()
    accordion()
    slider()
    map()
})