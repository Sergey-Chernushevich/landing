const initSwiper = {
  direction: "horizontal",
  slidesPerView: "auto",
  loop: true,
  speed: 10000,
  allowTouchMove: false,
  breakpoints: {
    993: { direction: "vertical" },
  },
};

const swiperOne = new Swiper(".carouselOne", {
  ...initSwiper,
  autoplay: {
    disableOnInteraction: false,
    delay: 0,
  },
});

const swiperTwo = new Swiper(".carouselTwo", {
  ...initSwiper,
  autoplay: {
    disableOnInteraction: false,
    delay: 0,
    reverseDirection: true,
  },
});

const swiperThree = new Swiper(".carouselThree", {
  ...initSwiper,
  autoplay: {
    disableOnInteraction: false,
    delay: 0,
  },
});
