/* 스크롤 네비 */
(() => {
	const navContainer = document.querySelector('.header_gnb');
	const btnsMenu = document.querySelector('.gnb');

	document.addEventListener('scroll', function () {
	/* 	console.log(window.scrollY); */
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
		/* console.log(target); */
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
const rects = document.querySelectorAll('.rect'); /* 게이지바 */
rects.forEach((el) => {
	const counter = el.querySelector('.num'); /* 숫자카운터 */
	const tg = counter.textContent + '%'; /* 퍼센트 */
	/* counter.textContent=tg; */
	const tm = gsap.timeline({
		defaults: { duration: 4, ease: 'expo.out' },
		scrollTrigger: {
			trigger: el /* 방아쇠 */,
			toggleActions: 'play pause resume reset' /* 액션내용정리 */ /* play pause :최초 보였을때 애니메이션시작  resume reset: 정지했던 고지점부터 재실행  */,
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
	tm.to(el, { '--p': tg }, 0);
});

/* 프로젝트 스크롤 */

const projects = gsap.utils.toArray('.project_scroll');
ScrollTrigger.create({
	trigger: projects,
	start: 'top bottom',
	end: 'bottom top',
    pinSpacing: false,
	scrub: 0.5,
	onEnter: () => {
		pipScroll();
	},
});

function pipScroll() {
	const devices = $('.mockup');
	/* console.log(devices); */
	$.each(devices, function () {
		const device = $(this);
		const screen = device.find('.screen');
		const mask = device.find('.mask');
		const hightDifference = screen.innerHeight() - mask.innerHeight();
		device.on({
			mouseenter: function () {
				screen.stop().animate({ top: -hightDifference }, 1000);
			},
			mouseleave: function () {
				screen.stop().animate({ top: 0 }, 1000);
			},
		});
	});
}

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

/* 프로필 효과 */ /* Education 효과 */  //스크롤 효고ㅏ
window.onscroll = function () {
	let height = window.pageYOffset; //스크롤 높이
	let width = window.innerWidth; // 스크린 넓이

	/* 변수 */
	const sec1Title = document.querySelector('.section1_left_top'); //변수 /* 섹션1 프로필이미지 */
	const sec2Title = document.querySelector('.section1_right'); //변수   /* 섹션1 스킬바 */
	const sec3Title = document.querySelector('.box1'); //변수     /* 섹션2 박스 */
	const sec4Title = document.querySelector('.box2'); //변수 /* 섹션2  박스 */
	const sec5Title = document.querySelector('.sec3_rbox'); //변수 /* 섹션3 R 텍스트박스 */
	const sec6Title = document.querySelector('.sec4_Lbox'); //변수 /* 섹션4 L 텍스트박스 */
	const sec7Title = document.querySelector('.sec5_rbox'); //변수 /* 섹션5 R 텍스트박스 */
	const sec8Title = document.querySelector('.sec6_Lbox'); //변수 /* 섹션6 L 텍스트박스 */
	const sec9Title = document.querySelector('.footer_main'); //변수 /* 푸터 박스 */
	const sec10Title = document.querySelector('.sec2_bottm_box'); //변수 /* 푸터 박스 */


	
	//sec1 L
	if(width >= 1000){
		if(height >= 1000){
			sec1Title.style.opacity = 1;
			sec1Title.style.transform = 'translate(5%, 0)';
		}else{
			sec1Title.style.opacity = 0;
			sec1Title.style.transform = 'translate(-100%, 0)';
		}
	}else{
		if(height >= 100){
			sec1Title.style.opacity = 1;
			sec1Title.style.transform = 'translate(5%, 0)';
		}else{
			sec1Title.style.opacity = 0;
			sec1Title.style.transform = 'translate(-100%, 0)';
		}
	}
	//sec1 R
	if(width >= 1000){
		if(height >= 1000){
			sec2Title.style.opacity = 1;
			sec2Title.style.transform = 'translate(0, 0)';
		}else{
			sec2Title.style.opacity = 0;
			sec2Title.style.transform = 'translate(100%, 0)';
		}
	}else{
		if(height >= 100){
			sec2Title.style.opacity = 1;
			sec2Title.style.transform = 'translate(0, 0)';
		}else{
			sec2Title.style.opacity = 0;
			sec2Title.style.transform = 'translate(200%, 0)';
		}
	}
	//sec2 L
	if(width >= 1000){
		if(height >= 2000){
			sec3Title.style.opacity = 1;
			sec3Title.style.transform = 'translate(0, 0)';
		}else{
			sec3Title.style.opacity = 0;
			sec3Title.style.transform = 'translate(-100%, 0)';
		}
	}else{
		if(height >= 200){
			sec3Title.style.opacity = 1;
			sec3Title.style.transform = 'translate(0, 0)';
		}else{
			sec3Title.style.opacity = 0;
			sec3Title.style.transform = 'translate(-100%, 0)';
		}
	}
	//sec2 R
	if(width >= 1000){
		if(height >= 2000){
			sec4Title.style.opacity = 1;
			sec4Title.style.transform = 'translate(0, 0)';
		}else{
			sec4Title.style.opacity = 0;
			sec4Title.style.transform = 'translate(100%, 0)';
		}
	}else{
		if(height >= 200){
			sec4Title.style.opacity = 1;
			sec4Title.style.transform = 'translate(0, 0)';
		}else{
			sec4Title.style.opacity = 0;
			sec4Title.style.transform = 'translate(100%, 0)';
		}
	}
	//sec2 B
	if(width >= 1000){
		if(height >= 2100){
			sec10Title.style.opacity = 1;
			sec10Title.style.transform = 'translateY(0)';
		}else{
			sec10Title.style.opacity = 0;
			sec10Title.style.transform = 'translateY(-100%)';
		}
	}else{
		if(height >= 200){
			sec10Title.style.opacity = 1;
			sec10Title.style.transform = 'translateY(0)';
		}else{
			sec10Title.style.opacity = 0;
			sec10Title.style.transform = 'translateY(-100%)';
		}
	}
	//sec3 R
	if(width >= 1000){
		if(height >= 3300){
			sec5Title.style.opacity = 1;
			sec5Title.style.transform = 'translate(0, 0)';
		}else{
			sec5Title.style.opacity = 0;
			sec5Title.style.transform = 'translate(100%, 0)';
		}
	}else{
		if(height >= 400){
			sec5Title.style.opacity = 1;
			sec5Title.style.transform = 'translate(0, 0)';
		}else{
			sec5Title.style.opacity = 0;
			sec5Title.style.transform = 'translate(100%, 0)';
		}
	}
	//sec4 L
	if(width >= 1000){
		if(height >= 4300){
			sec6Title.style.opacity = 1;
			sec6Title.style.transform = 'translate(0, 0)';
		}else{
			sec6Title.style.opacity = 0;
			sec6Title.style.transform = 'translate(-100%, 0)';
		}
	}else{
		if(height >= 450){
			sec6Title.style.opacity = 1;
			sec6Title.style.transform = 'translate(0, 0)';
		}else{
			sec6Title.style.opacity = 0;
			sec6Title.style.transform = 'translate(-100%, 0)';
		}
	}
	//sec5 R
	if(width >= 1000){
		if(height >= 5300){
			sec7Title.style.opacity = 1;
			sec7Title.style.transform = 'translateY(0)';
		}else{
			sec7Title.style.opacity = 0;
			sec7Title.style.transform = 'translateY(-150%)';
		}
	}else{
		if(height >= 650){
			sec7Title.style.opacity = 1;
			sec7Title.style.transform = 'translateY(0)';
		}else{
			sec7Title.style.opacity = 0;
			sec7Title.style.transform = 'translateY(-150%)';
		}
	}
	//sec6 L
	if(width >= 1000){
		if(height >= 6400){
			sec8Title.style.opacity = 1;
			sec8Title.style.transform = 'translate(0, 0)';
		}else{
			sec8Title.style.opacity = 0;
			sec8Title.style.transform = 'translate(200%, 0)';
		}
	}else{
		if(height >= 800){
			sec8Title.style.opacity = 1;
			sec8Title.style.transform = 'translate(0, 0)';
		}else{
			sec8Title.style.opacity = 0;
			sec8Title.style.transform = 'translate(200%, 0)';
		}
	}
	//ft
	if(width >= 1000){
		if(height >= 7200){
			sec9Title.style.opacity = 1;
			sec9Title.style.transform = 'translateY(0)';
		}else{
			sec9Title.style.opacity = 0;
			sec9Title.style.transform = 'translateY(100%)';
		}
	}else{
		if(height >= 1000){
			sec9Title.style.opacity = 1;
			sec9Title.style.transform = 'translateY(0)';
		}else{
			sec9Title.style.opacity = 0;
			sec9Title.style.transform = 'translateY(100%)';
		}
	}
};

const ani = bodymovin.loadAnimation({
	container: document.querySelector('.logo1'),
	renderer: 'svg' /* 어떤형식인지 */,
	loop: true /* 무한반복 */,
	autoplay: true /* 자동재생 */,
	path: './json/cctv.json',
});

/* ==========
타이핑
========== */

const txt1 = '인간지능행동모델'; /* The text */
const txt2 = '음성입력방식'; /* The text */
const txt3 = '맥락판단처리기능'; /* The text */

const typed = new Typed('.type', {
	strings: [`<span>${txt1}</span>`, `<span>${txt2}</span>`, `<span>${txt3}</span>`],
	typeSpeed: 50,
	loop: true,
	loopConunt: Infinity,
	showCursor: false,
});
/* ==========
메인로티
========== */

const main_ani = bodymovin.loadAnimation({
	container: document.querySelector('.lottie_main'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: './json/main.json',
});

const scroll_ani = bodymovin.loadAnimation({
	container: document.querySelector('.scroll'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: './json/Scroll.json',
});

const fk_ani = bodymovin.loadAnimation({
	container: document.querySelector('.fk'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: './json/Firecracker.json',
});

