const hour  = document.querySelector('.hour');
const min  = document.querySelector('.minute');
const sec  = document.querySelector('.second');

setInterval(()=>{
    let date = new Date();
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();
    let hrotation = 30*htime+mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
},1000);