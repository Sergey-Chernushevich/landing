const blogSwiper = new Swiper("#blogBody", {
  direction: "vertical",
  slidesPerView: 3.25,
  freeMode: true,
  scrollbar: {
    el: ".blogScroll",
    draggable: true,
  },
  mousewheel: {
    forceToAxis: false,
    invert: false,
    sensitivity: 0.5,
    smooth: true,
  },
  touchEventsTarget: "container",
  touchStartPreventDefault: false,
  touchReleaseOnEdges: true,
  touchStartPreventDefault: false,
  touchStartForcePreventDefault: true,
  touchMoveStopPropagation: true,
  touchReleaseOnEdges: true,
  on: {
    touchStart: function () {
      document.body.style.overflow = "hidden";
    },
    touchEnd: function () {
      document.body.style.overflow = "";
    },
  },
});

const blog = document.querySelector("#blog");
blog.addEventListener("touch", (e) => {
  document.body.style.overflow = "hidden";
  console.log("tt");
});
