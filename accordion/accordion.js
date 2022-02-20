const accodionHearders = document.querySelectorAll('.accordion-header');

accodionHearders.forEach((header)=>{     
         header.addEventListener('click',(e)=>{
         const activeHeader = document.querySelector('.accordion-header.active'); 
             if(activeHeader && activeHeader!=header  ){
                 activeHeader.classList.toggle('active');
                 activeHeader.nextElementSibling.style.height = 0;
             }

     header.classList.toggle("active");
    if(header.classList.contains('active')){
              header.nextElementSibling.style.height =header.nextElementSibling.scrollHeight +"px";
    }else{
              header.nextElementSibling.style.height =0;
    }
        
});
  
 });

//  Algo:
//  1. Attach events to all the headers.
//  2.if(See if there exists a header which has active class, if it exists , set its  height to 0 also remov its  active class.)
//  3. else(
//      Add active class to clicked header .
//      3.1 if(clicked header has active class)
//          set its siblings height to its scrollHeight.
//          else
//          set its siblings height to 0
//  )

  

