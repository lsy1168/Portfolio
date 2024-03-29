

/* 스크롤 네비 */
(() => {
	const navContainer = document.querySelector('.header_gnb');
	const btnsMenu = document.querySelector('.gnb');


	document.addEventListener('scroll', function () {
		console.log(window.scrollY);
		if (window.scrollY > 60) {
			navContainer.classList.add('bg_show');
		} else {
			navContainer.classList.remove('bg_show');
		}
	});
	//e: 이벤트객체
	btnsMenu.addEventListener('click', function (e) {
    e.preventDefault();
		const target = e.target;
    console.log(target);
		const link = target.dataset.link;
		if (link == null) {
			return;
		}
		const scrollTo = document.querySelector(link);
		scrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' });
		btnsMenu.classList.remove('open');
	});
})();

/* 스크롤네비 홈. 버튼 */
(() => {
	const arrowUp = document.querySelector('.arrow-up');
	const home = document.querySelector('#home');
	document.addEventListener('scroll', function () {
		console.log(window.scrollY);
		if (window.scrollY > 500) {
			arrowUp.classList.add('visible');
		} else {
			arrowUp.classList.remove('visible');
		}
	});
	arrowUp.addEventListener('click', function () {
		home.scrollIntoView({ behavior: 'smooth' });
	});
})();


/* 스킬바 */
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
const pc = document.querySelector(".sec3_mockup");
const left = document.querySelector(".sec3 .sec3_left");
const pcS = pc.querySelector(".sec3_screen");
const pcM = pc.querySelector(".sec3_mask");
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
  trigger: ".sec3", 
  start: "top bottom",
  end: "bottom top",
  markers: true,
  scrub: 0.5,
  onEnter: () => {
    pcM.addEventListener("mouseenter", () => aniUp(pcM, pcS));
    pcM.addEventListener("mouseleave", () => aniDown(pcS));
    gsap.fromTo(left, { yPercent: 100 }, { yPercent: 0, duration: 1 });
  },
});

/* 마우스효과 */
/* const el = document.querySelector(".followAnimation");
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
document.addEventListener("mousemove", (e) => {
  console.log(e);
  mouseX = e.clientX;
  mouseY = e.clientY;
  console.log(mouseX, mouseY);
});
tick();
function tick() {
  requestAnimationFrame(tick);
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;
  el.style.transform = `translate(${currentX}px, ${currentY}px)`;

} */

/* transform:translate(-50%,-50%) */

/* 프로필 효과 */ /* Education 효과 */
window.onscroll = function () {
  let height = window.pageYOffset; //스크롤 높이
  const sec1Title = document.querySelector(".section1_left_top img"); //변수 /* 섹션1 프로필이미지 */
  const sec2Title = document.querySelector(".section1_right"); //변수   /* 섹션1 스킬바 */
  const sec3Title = document.querySelector(".box1"); //변수     /* 섹션2 박스 */
  const sec4Title = document.querySelector(".box2"); //변수 /* 섹션2  박스 */
  const sec5Title = document.querySelector(".sec3_rbox"); //변수 /* 섹션3 R 텍스트박스 */
  const sec6Title = document.querySelector(".sec4_Lbox"); //변수 /* 섹션4 L 텍스트박스 */
 


  if (height >= 700) {
    sec1Title.style.opacity = 1;
    sec1Title.style.transform = "translate(25%, 0)";
  } else {
    sec1Title.style.opacity = 0;
    sec1Title.style.transform = "translate(-100%, 0)";
  }
  if (height >= 700) {
    sec2Title.style.opacity = 1;
    sec2Title.style.transform = "translate(0, 0)";
  } else {
    sec2Title.style.opacity = 0;
    sec2Title.style.transform = "translate(100%, 0)";
  }
  if (height >= 1800) {
    sec3Title.style.opacity = 1;
    sec3Title.style.transform = "translate(0, 0)";
  } else {
    sec3Title.style.opacity = 0;
    sec3Title.style.transform = "translate(-100%, 0)";
  }
  if (height >= 1800) {
    sec4Title.style.opacity = 1;
    sec4Title.style.transform = "translate(0, 0)";
  } else {
    sec4Title.style.opacity = 0;
    sec4Title.style.transform = "translate(100%, 0)";
  }
  if (height >= 3300) {
    sec5Title.style.opacity = 1;
    sec5Title.style.transform = "translate(0, 0)";
  } else {
    sec5Title.style.opacity = 0;
    sec5Title.style.transform = "translate(100%, 0)";
  }
  if (height >= 4300) {
    sec6Title.style.opacity = 1;
    sec6Title.style.transform = "translate(0, 0)";
  } else {
    sec6Title.style.opacity = 0;
    sec6Title.style.transform = "translate(-100%, 0)";
  }
  
};

const ani=bodymovin.loadAnimation({
  container:document.querySelector('.logo1'),
  renderer:'svg',/* 어떤형식인지 */
  loop:true, /* 무한반복 */
  autoplay:true, /* 자동재생 */
  path:'./json/cctv.json',
})
