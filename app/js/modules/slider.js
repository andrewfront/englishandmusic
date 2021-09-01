import Swiper from 'swiper';
import SwiperCore, {
    Navigation,
    Pagination
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
const slider = () => {
    const headerGallery = new Swiper('.headertop__swiper', {
        grabCursor: true,
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
        loop: true,
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            reverseDirection: false,
            delay: 2000,
        },
        slidesPerView: 3,
        pagination: {
            el: '.gallery__pagination',
            clickable: true
        },
    });
    const mainGalleryContainer = document.querySelector('.gallery__swiper')
    mainGalleryContainer.addEventListener('mouseenter', () => {
        mainGallery.autoplay.stop()
    })
    mainGalleryContainer.addEventListener('mouseleave', () => {
        mainGallery.autoplay.start()
    })
    const reviewGallery = new Swiper('.reviews__container', {
        grabCursor: true,
        loop: true,
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 86,
    });
}
export default slider