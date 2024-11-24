
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
  
  // 'ScrollTrigger' 플러그인 등록
  gsap.registerPlugin(ScrollTrigger);

  // animation 'a'
  gsap.from(".a", { opacity: 0, rotateX: 180, duration: .3, delay: .3 });

  // animation 'n'
  // animation 'circles'
  const tl_00 = gsap.timeline({ delay: .5 });
  tl_00.fromTo(".svg_circles", 
    { opacity: 0, y: "120%", scale: .5 },
    { opacity: 1, y: "120%", scale: 1, duration: .5, ease: "elastic.out(1, 0.55)" }
  );
  tl_00.to(".svg_circles", { y: "-200%", opacity: 0, duration: .5, ease: "power1.out" });

  // animation 'c'
  gsap.set(".c", { visibility: "hidden", opacity: 0, y: "80%" }); // 초기 세팅 값
  const tl_01 = gsap.timeline({ delay: .9 });
  tl_01.fromTo(".c",
    { visibility: "hidden", opacity: 0, y: "80%" },
    { visibility: "visible", opacity: 1, y: 0, duration: .5, ease: "power1.out" }
  );  
  tl_01.fromTo(".c",
    { opacity: 1, rotateY: 0, },
    { opacity: 0, rotateY: -180, duration: .5, delay: 1, ease: "power1.out" }
  );

  // animation 'n'
  gsap.fromTo(".n",
    { opacity: 0, rotateY: -180 },
    { opacity: 1, rotateY: 0, duration: .5, delay:2.4, ease: "power1.out" }
  );

  // animation 'svg_windmill'
  gsap.fromTo(".svg_windmill",
    { x: -300, opacity: 0, rotation: 0 },
    { x: 0, opacity: 1, rotation: 360, duration: .5, delay: 1.4, onComplete: startTimeline }
  );

  function startTimeline() {
    const tl_02 = gsap.timeline({ repeat: -1, repeatDelay: 1.4, delay: 1.3 });
    tl_02.to(".svg_windmill", { rotation: "+=90", duration: .3 });
  }

  // animation 'm'
  gsap.to(".m", { x: 0, duration: 1, delay: 2 });

  // animation 'svg_windmill'
  const tl_03 = gsap.timeline({ delay: .6 });
  tl_03.to(".svg_star", { opacity: 1, scale: 1, duration: .4 });
  tl_03.to(".svg_star", { rotation: "+=360", duration: 1, repeat: -1 });
  tl_03.to(".svg_star", { x: 0, duration: 1 });
  tl_03.to(".svg_star", { y: "120%", duration: 1 });

  gsap.to(".clip_a", { css: { overflow: "hidden" }, duration: 0, delay: 3 });

  // animation 'a'
  gsap.to(".a span", { y: 0, duration: 1, delay: 3 });

  // animation 't'
  gsap.to(".t", { y: 0, duration: 1, delay: 2 });
  
  // animation 'e'
  gsap.to(".e", { y: 0, duration: 1, delay: 2.2 });

  // animation 'sec_word'
  gsap.from(".sec_word", {x: 100, opacity: 0, duration: .5, delay: .5, ease: "power4.out"});

  // animation 'i'
  const tl_04 = gsap.timeline({repeat: -1, repeatDelay: 2.4, delay: 2.8});
  tl_04.to(".i", {rotationX: 540, duration: 2, ease: "power4.out"});
  tl_04.to(".i", {rotationX: 0, duration: 2, delay: 1, ease: "power4.out"});

  // animation 'sec01_brace_wrap'
  gsap.to(".sec01_brace_wrap p", {opacity: 1, duration: .2, delay: 1.2});
  gsap.to(".sec01_brace_wrap .brace:first-child", {x: 0, opacity: 1, duration: .2, delay: 1.4});
  gsap.to(".sec01_brace_wrap .brace:last-child", {x: 0, opacity: 1, duration: .2, delay: 1.4});
  gsap.from(".button_wrap", {y: 30, opacity: 0, duration: .3, delay: 1.8, ease: "power4.out"});

  // animation 'squiggle'
  const squiggle = document.querySelector(".squiggle img");

  document.addEventListener("mousemove", (event) => {
    // 화면의 중심을 기준으로 마우스 위치 계산
    const xPos = (event.clientX / window.innerWidth - 0.5) * 30;  // 이동 범위 설정 (-15px ~ 15px)
    const yPos = (event.clientY / window.innerHeight - 0.5) * 30; // 이동 범위 설정 (-15px ~ 15px)
    
    // 기울기 각도 설정 (상대적으로 작게 설정)
    const rotationX = (event.clientY / window.innerHeight - 0.5) * 40; // x축 회전 (-20deg ~ 20deg)
    const rotationY = (event.clientX / window.innerWidth - 0.5) * 40;  // y축 회전 (-20deg ~ 20deg)

    // GSAP 애니메이션으로 부드럽게 오브젝트 이동
    gsap.to(squiggle, { 
      x: xPos,
      y: yPos,
      rotationX: -rotationX, // 위아래 움직임에 따라 x축 회전
      rotationY: rotationY,  // 좌우 움직임에 따라 y축 회전
      duration: 1, // 애니메이션의 부드러움 설정
      ease: "power2.out"
    });
  });

  // animation 'brace_wrap'
  const text = document.querySelector(".brace_wrap p");
  const leftBrace = document.querySelector(".brace_wrap .brace:first-child");
  const rightBrace = document.querySelector(".brace_wrap .brace:last-child");

  gsap.from(text, { opacity: 0, duration: .2, scrollTrigger: { trigger: "#sec02 .cont_wrap", start: "top 75%", toggleActions: "play reverse play reverse" } });
  gsap.from(leftBrace, { x: 10, opacity: 0, duration: .2, delay: .3, scrollTrigger: { trigger: "#sec02 .cont_wrap", start: "top 75%", toggleActions: "play reverse play reverse" } });
  gsap.from(rightBrace, { x: -10, opacity: 0, duration: .2, delay: .3, scrollTrigger: { trigger: "#sec02 .cont_wrap", start: "top 75%", toggleActions: "play reverse play reverse" } });

  // animation 'gra_text'
  gsap.to(".gra_text", { backgroundPosition: "0% center", duration: 1.5, ease: "linear", scrollTrigger: { trigger: ".ani_text", start: "top 75%" } });

  // animation 'rotating_text'
  const rotTextElement = document.querySelector(".rotating_text");
  const rotTextContent = rotTextElement.textContent;
  rotTextElement.innerHTML = rotTextContent.split("").map(char => `<span>${char}</span>`).join(""); // 글자를 하나씩 분리해서 각 글자를 <span>으로 감싸기
  const rotChars = rotTextElement.querySelectorAll("span");

  gsap.to(rotChars, { rotationX: 360, stagger: 0.05, duration: 0.8, delay: 1.7, ease: "easeOut", yoyo: true, scrollTrigger: { trigger: ".ani_text", start: "top 75%" } });

  // animation 'up_text'
  const upTextElement = document.querySelector(".up_text");
  const upTextContent = upTextElement.textContent;
  upTextElement.innerHTML = upTextContent.split("").map(char => `<span>${char}</span>`).join("");
  const upChars = upTextElement.querySelectorAll("span");

  gsap.to(upChars, { y: 0, opacity: 1, stagger: 0.05, duration: 1.5, delay: 3.4, ease: "elastic.out", scrollTrigger: { trigger: ".ani_text", start: "top 75%" } });

  // horizen scroll
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
      scrub: true,
      invalidateOnRefresh: true,
      anticipatePin: 1      
      //snap: {
      // snapTo: 1 / (sections.length - 1),
      //  inertia: false,
      //  duration: { min: 0.1, max: 0.1 },
      //},
      // markers: true,
    }
  }); 

  // animation 'heading h2'
  gsap.fromTo(".heading h2",
    { rotateX: 90 },
    { rotateX: 0, duration: 5, ease: "elastic.out", scrollTrigger: { trigger: "#sec03 .cont_wrap", start: "top 70%" } });
  
  // animation 'shape'
  gsap.to(".flower", { x: -50, rotation: -180, duration: .4, scrollTrigger: { trigger: "#sec03 .cont_wrap", start: "top 70%" } });

  gsap.fromTo(".half_circle",
    { x: 100, y: -100, opacity: 0, sclae: .7, rotation: -90 },
    { x: 0, y: 0, opacity: 1, scale: 1, rotation: 0, duration: .7, delay: .26, ease: "power4.out", scrollTrigger: { trigger: "#sec03 .cont_wrap", start: "top 70%" } });

  gsap.fromTo(".timer",
    { x: 40, y: 10, rotation: 30, opacity: 0 },
    { x: 0, y: 0, rotation: 0, opacity: 1, duration: 1.5, delay: .32, ease: "elastic.out", scrollTrigger: { trigger: "#sec03 .cont_wrap", start: "top 70%" } });

  gsap.fromTo(".circle",
    { x: 100, y: 20, opacity: 0, rotation: 450 },
    { x: 0, y: 0, opacity: 1, rotation: 0, duration: 2, delay: .35, ease: "elastic.out", scrollTrigger: { trigger: "#sec03 .cont_wrap", start: "top 70%" } });

  gsap.fromTo(".diamond",
    { x: -40, y: 20, opacity: 0, rotation: 45 },
    { x: 0, y: 0, opacity: 1, rotation: 0, duration: 2.5, delay: .35, ease: "elastic.out", scrollTrigger: { trigger: "#sec03 .cont_wrap", start: "top 70%" } });
  
  // animation 'gradient'
  gsap.fromTo(".green_gradient",
    { y: -300, opacity: 0, rotation: -15 },
    { y: 0, opacity: 1, rotation: 0, duration: 1.8, ease: "elastic.out", scrollTrigger: { trigger: "#sec04 .text_group", start: "left left" } });

  gsap.fromTo(".purple_gradient",
    { y: -180, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, delay: .2, ease: "elastic.out", scrollTrigger: { trigger: "#sec04 .text_group", start: "left left" } });

  gsap.fromTo(".orange_gradient",
    { y: -200, opacity: 0, rotation: 45 },
    { y: 0, opacity: 1, rotation: 15.6, duration: 2, delay: .4, ease: "elastic.out", scrollTrigger: { trigger: "#sec04 .text_group", start: "left left" } });

  // animation 'add'
  gsap.from(".add", { y: 200, opacity: 0, duration: .8, ease: "power3.out", scrollTrigger: { trigger: "#sec04 .sentence_group", start: "left left" } });

  // animation 'personality'
  const textElement = document.querySelector(".personality");
  const textContent = textElement.textContent;
  textElement.innerHTML = textContent.split("").map(char => `<span>${char}</span>`).join("");
  const chars = textElement.querySelectorAll("span");

  gsap.from(chars, {
    y: () => (Math.random() > 0.5 ? -200 : 200), // 무작위로 위나 아래에서 시작
    opacity: 0,
    duration: .8,
    delay: .3,
    stagger: 0.05,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sec04 .sentence_group",
      start: "left left"
    }
  });

  // animation 'icon_circle'
  gsap.from(".icon_circle", { x: -80, opacity: 0, scale: .7, rotation: -360, duration: 1, delay: .8, ease: "power3.out", scrollTrigger: { trigger: "#sec04 .sentence_group", start: "left left" } });

  // animation 'icon_hand'
  const tl_05 = gsap.timeline({repeat: -1, repeatDelay: 2, delay: 2.4});
  tl_05.to(".icon_hand", {scale: 1.2, rotation: 45, duration: .8, ease: "bounce"});  
  tl_05.to(".icon_hand", {scale: 1, rotation: 0, duration: .8, ease: "bounce"});

  // animation 'custom_cursor'
  const cursor = document.querySelector(".custom_cursor");
  const links = document.querySelectorAll("button");
  let initCursor = false;
    
  for (var i = 0; i < links.length; i++) {
    let selfLink = links[i];

    selfLink.addEventListener("mouseover", function () {
      cursor.classList.add("custom_cursor_link");
    });
    selfLink.addEventListener("mouseout", function () {
      cursor.classList.remove("custom_cursor_link");
    });
  }
    
  window.onmousemove = function (e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    if (!initCursor) {
      TweenLite.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };
    
  window.onmouseout = function (e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };

});
