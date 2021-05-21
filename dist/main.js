const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const cardsContainer = document.querySelector('.cards')
const cards = document.querySelectorAll('.card');
const cardControls = document.querySelectorAll('.controls__dot');
const email = document.querySelector('.footer__email');
const btn = document.querySelector('.footer--btn')
const invaildMessage = document.querySelector('.footer__invaild')
const regexPatten = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!email.value.match(regexPatten)) {
        invaildMessage.style.display = 'block';
        email.classList.add('invaild');
    } else {
        invaildMessage.style.display = 'none';
        email.classList.remove('invaild');
    }
})

cardControls.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateDot(index);
        changeCard(index)
        clearInterval(cardRotale)
    });
})
let idx = 0;
let cardRotale = setInterval(() => {
    idx++;
    if (idx === cards.length) {
        idx = 0;
    }
    changeCard(idx);
    updateDot(idx);
}, 3500)
hamburger.addEventListener('click', () => {
    body.classList.toggle('show__overlay');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open')
})

function changeCard(index) {
    cards.forEach((card, idx) => {
        (index === idx) ?
            card.classList.add('show') :
            card.classList.remove('show')
    })
}

function updateDot(index) {
    cardControls.forEach(card => card.classList.remove('current'));
    cardControls[index].classList.add('current')
}
