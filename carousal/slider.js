const sliderItems = document.querySelectorAll('.slider-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let counter = 0 ;

sliderItems.forEach((e,i)=>{
    e.style.left = `${i * 100}%`;
})
prev.addEventListener('click',(e)=>{
    counter--;
    if(counter < 0){
      counter = sliderItems.length-1;
    }
  slideIt();
});
next.addEventListener('click',(e)=>{
    counter++;
    if(counter == sliderItems.length){
        counter  = 0;
    }
  slideIt();
});


function slideIt(){
       sliderItems.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`;
    })
};
