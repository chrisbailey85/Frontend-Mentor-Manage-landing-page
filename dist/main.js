const body = document.querySelector('body')
const hamburger = document.querySelector('.hamburger');


console.log(body)
hamburger.addEventListener('click', () => {
    body.classList.toggle('show__overlay');
})