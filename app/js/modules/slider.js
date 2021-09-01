import Swiper from 'swiper';
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    EffectFade,
    Lazy
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, Lazy, EffectFade]);
const slider = () => {
    const headerGallery = new Swiper('.headertop__swiper', {
        preloadImages: false,
        grabCursor: true,
        effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        loop: true,
        speed: 1000,
        autoplay: {
            reverseDirection: false,
            delay: 1500,
        },
        slidesPerView: 1,
    });
    const headerGalleryContainer = document.querySelector('.headertop__swiper')
    headerGalleryContainer.addEventListener('mouseenter', () => {
        headerGallery.autoplay.stop()
    })
    headerGalleryContainer.addEventListener('mouseleave', () => {
        headerGallery.autoplay.start()
    })
    const mainGallery = new Swiper('.gallery__swiper', {
        preloadImages: false,
        lazy: true,
        grabCursor: true,
        loop: true,
        spaceBetween: 30,
        speed: 1000,
        slidesPerView: 3,
        scrollbar: {
            el: '.gallery__scrollbar',
        },
    });
    const reviewGallery = new Swiper('.reviews__container', {
        grabCursor: true,
        loop: true,
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 86,
    });
}
export default slider