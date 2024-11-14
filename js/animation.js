
let scrollY = 0;

function fixedNav() {
  const nav = document.querySelector('nav');
  if(scrollY >= 50) {
    nav.style.position = "fixed";
    nav.style.top = "0px";
  } else {
    nav.style.position = "absolute";
    nav.style.top = "44px";
  }
}

window.addEventListener("scroll", () => {
  scrollY = window.scrollY || window.pageYOffset;
  fixedNav();
});


document.addEventListener("DOMContentLoaded", (event) => {
  gsap.from(".fir_word", {x: -100, duration: .5, delay: .5, opacity: 0, ease: "power4.out"});
  const tl_01 = gsap.timeline({repeat: -1, repeatDelay: 1.4});
  tl_01.to(".windmill", {duration: .3, rotation: 90})

  gsap.from(".sec_word", {x: 100, duration: .5, delay: .5, opacity: 0, ease: "power4.out"});
  const tl_02 = gsap.timeline({repeat: -1, delay: 2.4, repeatDelay: 3});
  tl_02.to(".i", {duration: 2, rotationX: 540, ease: "power4.out"});
  tl_02.to(".i", {duration: 2, rotationX: 0, ease: "power4.out"});

  gsap.from(".brace_wrap p", {duration: .2, delay: 1.2, opacity: 0, });
  gsap.from(".brace:first-child", {x: 10, duration: .2, delay: 1.4, opacity: 0, });
  gsap.from(".brace:last-child", {x: -10, duration: .2, delay: 1.4, opacity: 0, });
  gsap.from(".button_wrap", {y: 30, duration: .3, delay: 1.8, opacity: 0, ease: "power4.out"});

  gsap.registerPlugin(ScrollTrigger); // 플러그인 등록

  const hor = document.querySelector("#hor");
  const sections = gsap.utils.toArray("#hor > section");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: hor,
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: 1,
      //snap: {
      // snapTo: 1 / (sections.length - 1),
      //  inertia: false,
      //  duration: { min: 0.1, max: 0.1 },
      //},
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });


});

