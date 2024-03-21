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
