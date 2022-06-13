const container = document.querySelector('.container');
const btn = document.querySelector('button');
const URL = 'http://jsonplaceholder.typicode.com/posts/';
let tempVal = 1;

function fectchPosts(){
     for(let i  = 0 ; i < 5; i++){
         tempVal += i;
         fetch(`${URL}${i + tempVal}`)
         .then(res => res.json())
         .then(data=>{
             container.innerHTML += `<div>
                 <h3>${data.title}</h3>
               </div>`
          });
     }
}
window.addEventListener('scroll',(e)=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        fectchPosts();
    }
}) 
fectchPosts();
 