const pg1 = document.getElementById('pg1');
const pg2 = document.getElementById('pg2');
const btn_proximo = document.getElementById('btn-proximo');
const btn_voltar = document.getElementById('seta-voltar');
const body = document.querySelector('body');

const tl = new TimelineMax();

$(document).ready(
    tl.fromTo(pg1, 1, {opacity: 0}, {opacity: 1})
);

btn_proximo.addEventListener('click', () => {
    tl.fromTo(pg1, 1.2, {opacity: 1, x: '0%'}, {opacity: 0, x: '-100%'})
        .fromTo(pg2, 1.2, {opacity: 0, x: '0%'}, {opacity: 1, x: '-100%'}, "-=1.2");
    
    body.classList.add("overflowy");
});

btn_voltar.addEventListener('click', () => {
    tl.fromTo(pg2, 1.2, {opacity: 1, x: '-100%'}, {opacity: 0, x: '0%'})
        .fromTo(pg1, 1.2, {opacity: 0, x: '-100%'}, {opacity: 1, x: '0%'},"-=1.2");

    body.classList.remove("overflowy");
});