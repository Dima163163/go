import Swiper from '../swiper.es6.js';

const slider = () => {
  new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });
};

export default slider;

