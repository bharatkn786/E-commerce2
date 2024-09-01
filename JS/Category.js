/*
=============
Glide Js Carousel
=============
 */

const slider1 = document.getElementById("glide_1");
const slider2 = document.getElementById("glide_2");
const slider3 = document.getElementById("glide_3");
const slider4 = document.getElementById("glide_4");
const slider5 = document.getElementById("glide_5");


/*
=============
Latest Products
=============
 */

if (slider1) {
  new Glide("#glide_1", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    rewin: false,
    animationDuration: 800,
   /* animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",*/
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}

AOS.init();
if (slider2) {
  new Glide("#glide_2", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    rewin: false,
    animationDuration: 800,
   /* animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",*/
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}

AOS.init();
if (slider3) {
  new Glide("#glide_3", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    rewin: false,
    animationDuration: 800,
   /* animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",*/
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}

AOS.init();
if (slider4) {
  new Glide("#glide_4", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    rewin: false,
    animationDuration: 800,
   /* animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",*/
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}

AOS.init();
if (slider5) {
  new Glide("#glide_5", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    rewin: false,
    animationDuration: 800,
   /* animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",*/
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}

AOS.init();