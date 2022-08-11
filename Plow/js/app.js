// Preloader Event

const preloader = document.querySelector('#preloader');

window.addEventListener('load', function(){
    this.setTimeout(function () {
        preloader.style.display = 'none';

    }, 1000)
   
})


// Nav-menu event
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));



// Features Event

const cardContent = document.querySelectorAll('.card-content');
const navArrow = document.querySelectorAll('.nav-arrow');
const hide = document.querySelectorAll('.hide');
const show = document.querySelectorAll('.show');
const cardText = document.querySelectorAll('.card-text');
const cardPara = document.querySelectorAll('.card-para');

cardContent[0].addEventListener('touchstart', () => {
    cardContent[0].classList.toggle('active');
    navArrow[0].classList.toggle('active');
    hide[0].classList.toggle('active');
    show[0].classList.toggle('active');
    cardText[0].classList.toggle('active');
    cardPara[0].classList.toggle('active');
});

cardContent[1].addEventListener('touchstart', () => {
    cardContent[1].classList.toggle('active');
    navArrow[1].classList.toggle('active');
    hide[1].classList.toggle('active');
    show[1].classList.toggle('active');
    cardText[1].classList.toggle('active');
    cardPara[1].classList.toggle('active');
});

cardContent[2].addEventListener('touchstart', () => {
    cardContent[2].classList.toggle('active');
    navArrow[2].classList.toggle('active');
    hide[2].classList.toggle('active');
    show[2].classList.toggle('active');
    cardText[2].classList.toggle('active');
    cardPara[2].classList.toggle('active');
});


// Benefit Event Handler


const benefitPlainOne = document.querySelector('.plain-one');
const benefitPlainTwo = document.querySelector('.plain-two');
const benefitPlainThree = document.querySelector('.plain-three');
const benefitPlainFour = document.querySelector('.plain-four');
const benefitPlainFive = document.querySelector('.plain-five');

benefitPlainOne.addEventListener('touchstart', () => {
    benefitPlainOne.classList.toggle('active');
    const globeOne = document.querySelector('.globe-one');
    const headerOne = document.querySelector('.header-one');
    const paraOne = document.querySelector('.para-one');
    globeOne.classList.toggle('active');
    headerOne.classList.toggle('active');
    paraOne.classList.toggle('active');
});

benefitPlainTwo.addEventListener('touchstart', () => {
    benefitPlainTwo.classList.toggle('active');
    const globetwo = document.querySelector('.globe-two');
    const headertwo = document.querySelector('.header-two');
    const paratwo = document.querySelector('.para-two');
    globetwo.classList.toggle('active');
    headertwo.classList.toggle('active');
    paratwo.classList.toggle('active');
});

benefitPlainThree.addEventListener('touchstart', () => {
    benefitPlainThree.classList.toggle('active');
    const globethree = document.querySelector('.globe-three');
    const headerthree = document.querySelector('.header-three');
    const parathree = document.querySelector('.para-three');
    globethree.classList.toggle('active');
    headerthree.classList.toggle('active');
    parathree.classList.toggle('active');
});

benefitPlainFour.addEventListener('touchstart', () => {
    benefitPlainFour.classList.toggle('active');
    const globefour = document.querySelector('.globe-four');
    const headerfour = document.querySelector('.header-four');
    const parafour = document.querySelector('.para-four');
    globefour.classList.toggle('active');
    headerfour.classList.toggle('active');
    parafour.classList.toggle('active');
});

benefitPlainFive.addEventListener('touchstart', () => {
    benefitPlainFive.classList.toggle('active');
    const globefive = document.querySelector('.globe-five');
    const headerfive = document.querySelector('.header-five');
    const parafive = document.querySelector('.para-five');
    globefive.classList.toggle('active');
    headerfive.classList.toggle('active');
    parafive.classList.toggle('active');
});
