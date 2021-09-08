require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import accordion from './modules/accordion'
import slider from './modules/slider'
import Swiper, { Autoplay} from 'swiper';
import AOS from '../../node_modules/aos/dist/aos'
import map from './modules/map'
import lazy from './modules/lazy'
import modal from './modules/modal'
import scroll from './modules/scroll'
import burger from './modules/burger'
Swiper.use([Autoplay]);
window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    lazy()
    accordion()
    slider()
    map()
    modal()
    AOS.init();
    scroll()
    burger()
    const date = document.querySelector('.date')
    date.textContent = new Date().getFullYear()
})