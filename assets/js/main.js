

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
var webpage = document.querySelector('body');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(el => el.addEventListener('click', linkAction));


const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}

window.addEventListener('scroll', blurHeader);


let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    autoplay:{
        delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        }
    }
});


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal(`.home__social, .favorite__container, .sponsor__container, .footer`);
sr.reveal(`.home__title span:nth-child(1)`, { origin: 'left', opacity: 1 });
sr.reveal(`.home__title span:nth-child(3)`, { origin: 'right', opacity: 1 });
sr.reveal(`.home__tooltip, .home__button, .model__button`, { origin: 'bottom' });
sr.reveal(`.about__data`, { origin: 'left' });
sr.reveal(`.about__img, .model__tooltip`, { origin: 'right' });


gsap.to("#page2 h2",{
    transform:"translateX(-150%)",
    scrollTrigger:{

        trigger:"#page2",
        scroller:"body",
        start:"top 10%",
        end:"top -70%",
        scrub:1.8,
        pin:true

    }
})
const minicircle = document.querySelector('#minicircle');
webpage.addEventListener("mouseleave", ()=>{
  console.log("entered");
  minicircle.style.display = "none";
});
webpage.addEventListener("mouseenter", ()=>{
  console.log("entered");
  minicircle.style.display = "block";
});
// mousefollower
var timeout;

function skewcircle(){
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove",function(dets){
    clearTimeout(timeout);

    xscale= gsap.utils.clamp(.9, 1.3, dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
    
    xprev = dets.clientX;
    yprev = dets.clientY;

    circlemousefollower(xscale, yscale);

    timeout = setTimeout(function(){
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;

        },100);
  });
}
skewcircle();
function circlemousefollower(xscale,yscale){
  window.addEventListener("mousemove", function(dets){
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`
  })
}

circlemousefollower();
var page1 = document.querySelector("#home");
var nav = document.querySelector("nav");
var mainimg = document.querySelector(".home__img");

page1.addEventListener("mousemove",function(dets1) {
    mainimg.style.top = 1-dets1.y*0.12 + "px";
    mainimg.style.left = 1-dets1.x*0.12/3 + "px";
      console.log(dets1);
  });

nav.addEventListener("mousemove",function(dets1) {
    mainimg.style.top = 1-dets1.y*0.12 + "px";
    mainimg.style.left = 1-dets1.x*0.12/3 + "px";
      console.log(dets1);
  });


  var preloader = document.getElementById('loading');
  function loader(){
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 2000); 
} 
