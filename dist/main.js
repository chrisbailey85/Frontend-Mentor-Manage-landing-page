const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    body.classList.toggle('show__overlay');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open')
})