const rects = document.querySelectorAll(".rect"); /* 게이지바 */
rects.forEach((el) => {
  const counter = el.querySelector(".num"); /* 숫자카운터 */
  const tg = counter.textContent + "%"; /* 퍼센트 */
  /* counter.textContent=tg; */
  const tm = gsap.timeline({
    defaults: { duration: 4, ease: "expo.out" },
    scrollTrigger: {
      trigger: el /* 방아쇠 */,
      toggleActions:
        "play pause resume reset" /* 액션내용정리 */ /* play pause :최초 보였을때 애니메이션시작  resume reset: 정지했던 고지점부터 재실행  */,
    },
  });
  tm.from(counter, {
    textContent: 0,
    modifiers: {
      textContent: (textContent) => {
        return textContent.toFixed();
      },
    },
  });
  tm.to(el, { "--p": tg }, 0);
});

/* 프로젝트 스크롤 */

const pc = document.querySelector(".sec4 .pc");
const left = document.querySelector(".sec4 .left");
const mobile = document.querySelector(".sec4 .mobile");
const pcS = pc.querySelector(".screen");
const pcM = pc.querySelector(".mask");
const mobileS = mobile.querySelector(".screen");
const mobileM = mobile.querySelector(".mask");
//up
const aniUp = (mask, screen) => {
  let newH1 = mask.clientHeight;
  let newH2 = screen.clientHeight;
  let height = newH1 - newH2;
  gsap.to(screen, { y: height, duration: 0.5 });
};
//down
const aniDown = (screen) => {
  gsap.to(screen, { y: 0, duration: 0.5 });
};
ScrollTrigger.create({
  trigger: ".sec4",
  start: "top bottom",
  end: "bottom top",
  markers: true,
  scrub: 0.5,
  onEnter: () => {
    pcM.addEventListener("mouseenter", () => aniUp(pcM, pcS));
    pcM.addEventListener("mouseleave", () => aniDown(pcS));
    mobileM.addEventListener("mouseenter", () => aniUp(mobileM, mobileS));
    mobileM.addEventListener("mouseleave", () => aniDown(mobileS));
    gsap.fromTo(left, { xPercent: -100 }, { xPercent: 0, duration: 1 });
  },
});
