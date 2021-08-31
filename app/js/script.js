require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import accordion from './modules/accordion'
import slider from './modules/slider'
import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);
window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    accordion()
    slider()
})