let btn=document.querySelector('.btn');
let list=document.querySelector('.list');
let input=document.querySelector('#int');
let taskObj = [];
let inputVal;

btn.addEventListener('click',function(e){
    e.preventDefault();   
    pushIntoLocalStorage();
    showTask();    
   }); 

function pushIntoLocalStorage(){
    inputVal = input.value;
    // here we are first taking values from localStorage  (i.e from array which stored in localstorage ,,we are doing so,to make sure old arr values are not getting removed when we add new task);
    let task =  localStorage.getItem('taskObj');
    if(task == null ){ 
        taskObj = []
    }else{
        // assign old arr stored in localstorage to taskobj aray.
        taskObj = JSON.parse(task);
    }
    if(inputVal){
     taskObj.push(inputVal);
    }
    localStorage.setItem('taskObj',JSON.stringify(taskObj)); 
}

function showTask(){
    
    let item = JSON.parse(localStorage.getItem('taskObj'));
    if(item == null){
        taskObj = []
    } else{
        taskObj = item;
    }
    list.innerHTML = '';
    taskObj.forEach(e => {
        let tododiv=document.createElement('div');
        let li=document.createElement('li');
        let text=document.createTextNode(e);
        li.append(text);
        tododiv.classList.add('todoc');
        tododiv.append(li);
        list.append(tododiv);
        
        // checkbutton
        let cd=document.createElement('button');
        cd.innerHTML=`<i class="fas fa-check "></i>`;
        cd.classList.add('check');
        tododiv.appendChild(cd);
        list.append(tododiv);
        cd.addEventListener('click',check);
        
        // trashbutton
        let trashbutton=document.createElement('button');
        trashbutton.innerHTML=`<i class="fas fa-trash "></i>`;
        trashbutton.classList.add('delete');
        tododiv.appendChild(trashbutton);
        list.append(tododiv);
        trashbutton.addEventListener('click',checkdelete);
    
    // editbutton
    let editbutton=document.createElement('button');
    editbutton.innerHTML=`<i class="fas fa-edit "></i>`;
    editbutton.classList.add('edit');
    tododiv.appendChild(editbutton);
    list.append(tododiv);
    editbutton.addEventListener('click',edit);
     
    function checkdelete(){
        let editVal =  
        editbutton.parentElement.firstChild.innerText;
        taskObj =  taskObj.filter((t)=>{
            return t != editVal;
        })
        localStorage.setItem('taskObj',JSON.stringify(taskObj)); 
        trashbutton.parentElement.remove();
    }
    
    function check(e){
        tododiv.classList.add('tododiv');
    }
    
    function edit(e){
        let editVal =  
        editbutton.parentElement.firstChild.innerText;
        input.value = `${editVal}`;
        input.focus();
        taskObj =  taskObj.filter((t)=>{
            return t != editVal;
        })
        localStorage.setItem('taskObj',JSON.stringify(taskObj)); 
      }
    input.value = '';
    
});
}
showTask();   
     
    
    


 