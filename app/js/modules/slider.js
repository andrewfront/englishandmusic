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
                loop: false,
                spaceBetween: 30,
                    speed: 1000,
                    slidesPerView: 3,
                    scrollbar: {
                        el: '.gallery__scrollbar',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1
                        },
                        496: {
                            slidesPerView: 2
                        },
                        998: {
                            slidesPerView: 3
                        }

                    }
                });
            const reviewGallery = new Swiper('.reviews__container', {
                grabCursor: true,
                loop: true,
                speed: 1000,
                slidesPerView: 'auto',
                spaceBetween: 86,
                autoHeight: true,
                autoplay: {
                    reverseDirection: false,
                    delay: 1500,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    560: {
                        slidesPerView: 2
                    },
                    998: {
                        slidesPerView: 3
                    }

                }
            });
            const reviewGalleryContainer = document.querySelector('.reviews__container')
            reviewGalleryContainer.addEventListener('mouseenter', () => {
                reviewGallery.autoplay.stop()
            })
            reviewGalleryContainer.addEventListener('mouseleave', () => {
                reviewGallery.autoplay.start()
            })
        }
        export default slider