const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const cards = document.querySelectorAll('.card');
const cardControls = document.querySelectorAll('.controls__dot');

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