const open = document.querySelector('.open');
const close = document.querySelector('.close');
const modelCont = document.querySelector('.model-container');

open.addEventListener('click',(e)=>{
    modelCont.classList.add('show');
});

close.addEventListener('click',(e)=>{
    modelCont.classList.remove('show');
});