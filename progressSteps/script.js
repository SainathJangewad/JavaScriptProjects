const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');

let idx = 0;

prev.addEventListener('click',(e) => {

})

next.addEventListener('click',(e) => {
    idx++;
    if(idx >= circles.length){
        idx = 3;
    }
   circles[idx].classList.add('active');
    progress.style.width = `${100 / 4-1}%`;


})