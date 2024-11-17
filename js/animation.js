
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

  gsap.registerPlugin(ScrollTrigger); // 플러그인 등록

  gsap.from(".fir_word", {x: -100, opacity: 0, duration: .5, delay: .5, ease: "power4.out"});
  const tl_01 = gsap.timeline({repeat: -1, repeatDelay: 1.4, delay: 2.4});
  tl_01.to(".windmill", {rotation: 90, duration: .3});

  gsap.from(".sec_word", {x: 100, opacity: 0, duration: .5, delay: .5, ease: "power4.out"});
  const tl_02 = gsap.timeline({repeat: -1, repeatDelay: 2.4, delay: 2.8});
  tl_02.to(".i", {rotationX: 540, duration: 2, ease: "power4.out"});
  tl_02.to(".i", {rotationX: 0, duration: 2, delay: 1, ease: "power4.out"});

  gsap.to(".sec01_brace_wrap p", {opacity: 1, duration: .2, delay: 1.2});
  gsap.to(".sec01_brace_wrap .brace:first-child", {x: 0, opacity: 1, duration: .2, delay: 1.4});
  gsap.to(".sec01_brace_wrap .brace:last-child", {x: 0, opacity: 1, duration: .2, delay: 1.4});
  gsap.from(".button_wrap", {y: 30, opacity: 0, duration: .3, delay: 1.8, ease: "power4.out"});

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


  const text = document.querySelector(".brace_wrap p");
  const leftBrace = document.querySelector(".brace_wrap .brace:first-child");
  const rightBrace = document.querySelector(".brace_wrap .brace:last-child");

  gsap.from(text, {
    opacity: 0,
    duration: .2,
    scrollTrigger: {
      trigger: "#sec02 .cont_wrap",
      start: "top 75%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(leftBrace, {
    x: 10,
    opacity: 0,
    duration: .2,
    delay: .3,
    scrollTrigger: {
      trigger: "#sec02 .cont_wrap",
      start: "top 75%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(rightBrace, {
    x: -10,
    opacity: 0,
    duration: .2,
    delay: .3,
    scrollTrigger: {
      trigger: "#sec02 .cont_wrap",
      start: "top 75%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.to(".gra_text", {
    backgroundPosition: "0% center",
    duration: 1.5,
    ease: "linear",
    scrollTrigger: {
      trigger: ".ani_text",
      start: "top 75%"
    }
  });

  const rotTextElement = document.querySelector(".rotating_text");
  const rotTextContent = rotTextElement.textContent;
  rotTextElement.innerHTML = rotTextContent.split("").map(char => `<span>${char}</span>`).join(""); // 글자를 하나씩 분리해서 각 글자를 <span>으로 감싸기
  const rotChars = rotTextElement.querySelectorAll("span");

  gsap.to(rotChars, {
    rotationX: 360,
    stagger: 0.05, // 각 글자가 순차적으로 애니메이션
    duration: 0.8,
    delay: 1.7,
    ease: "easeOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".ani_text",
      start: "top 75%"
    }
  });

  const upTextElement = document.querySelector(".up_text");
  const upTextContent = upTextElement.textContent;
  upTextElement.innerHTML = upTextContent.split("").map(char => `<span>${char}</span>`).join("");
  const upChars = upTextElement.querySelectorAll("span");

  gsap.to(upChars, {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1.5,
    delay: 3.4,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: ".ani_text",
      start: "top 75%"
    }
  });


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
      //snap: {
      // snapTo: 1 / (sections.length - 1),
      //  inertia: false,
      //  duration: { min: 0.1, max: 0.1 },
      //},
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  }); 

  gsap.fromTo(".heading h2", {
    rotateX: 90,
  }, {
    rotateX: 0,
    duration: 5,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#sec03 .cont_wrap",
      start: "top 70%"
    }
  });

  gsap.to(".flower", { 
    x: -50, 
    rotation: -180, 
    duration: .4 ,
    scrollTrigger: {
      trigger: "#sec03 .cont_wrap",
      start: "top 70%"
    }
  });

  gsap.fromTo(".half_circle", {
    x: 100,
    y: -100,
    opacity: 0,
    sclae: .7,
    rotation: -90,
  }, {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: .7,
    delay: .26,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#sec03 .cont_wrap",
      start: "top 70%"
    }
  });

  gsap.fromTo(".timer", {
    x: 40,
    y: 10,
    rotation: 30,
    opacity: 0,
  }, {
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,
    duration: 1.5,
    delay: .32,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#sec03 .cont_wrap",
      start: "top 70%"
    }
  });

  gsap.fromTo(".circle", {
    x: 100,
    y: 20,
    opacity: 0,
    rotation: 450,
  }, {
    x: 0,
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 2,
    delay: .35,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#sec03 .cont_wrap",
      start: "top 70%"
    }
  });

  gsap.fromTo(".diamond", {
    x: -40,
    y: 20,
    opacity: 0,
    rotation: 45,
  }, {
    x: 0,
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 2.5,
    delay: .35,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#sec03 .cont_wrap",
      start: "top 70%", 
      //markers: true
    }
  });

  gsap.fromTo(".green_gradient", {
    y: -300,
    opacity: 0,
    rotation: -15,
  }, {
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 1.8,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#sec04 .text_group",
      start: "left left"
    }
  });

  gsap.fromTo(".purple_gradient", {
    y: -180,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: .2,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#sec04 .text_group",
      start: "left left"
    }
  });

  gsap.fromTo(".orange_gradient", {
    y: -200,
    opacity: 0,
    rotation: 45,
  }, {
    y: 0,
    opacity: 1,
    rotation: 15.6,
    duration: 2,
    delay: .4,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#sec04 .text_group",
      start: "left left"
    }
  });

  gsap.from(".add", {
    y: 200,
    opacity: 0,
    duration: .8,    
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sec04 .sentence_group",
      start: "left left"
    }
  });

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

  gsap.from(".icon_circle", {
    x: -80,
    opacity: 0,
    scale: .7,
    rotation: -360,
    duration: 1,
    delay: .8, 
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sec04 .sentence_group",
      start: "left left"
    }
  });

  const tl_03 = gsap.timeline({repeat: -1, repeatDelay: 2, delay: 2.4});
  tl_03.to(".icon_hand", {scale: 1.2, rotation: 45, duration: .8, ease: "bounce"});  
  tl_03.to(".icon_hand", {scale: 1, rotation: 0, duration: .8, ease: "bounce"});

  gsap.from(".text_your", {
    y: 200,
    opacity: 0,
    duration: .8,
    delay: .2,  
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sec05 .sentence_group",
      start: "left left"
    }
  });

  gsap.from(".text_animations", {
    y: 200,
    opacity: 0,
    duration: .8,
    delay: .4, 
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sec05 .sentence_group",
      start: "left left"
    }
  });

  gsap.from(".text_with", {
    y: 200,
    opacity: 0,
    duration: .8,
    delay: .6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sec05 .sentence_group",
      start: "left left"
    }
  });

  gsap.from(".text_gsap", {
    scale: 2,
    opacity: 0,
    duration: 1.1,
    delay: .9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sec05 .sentence_group",
      start: "left left"
    }
  });

});
