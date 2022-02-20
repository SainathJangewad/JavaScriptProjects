const cards = document.querySelectorAll('.card-item');

cards.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        removePrevActive();
        card.classList.add('active');
    })
})

function removePrevActive(){
    cards.forEach((card)=>{
        card.classList.remove('active');
    })
}