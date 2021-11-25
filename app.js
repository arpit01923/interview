var button=document.querySelector('#b1');
var out=document.querySelector('#d1');

function clickHandler(){
    fetch('https://reqres.in/api/users?page=2')
    .then(res=>res.json())
    .then(data=>{
        for(var i=0;i<6;i++){
           out.innerHTML+=`<img src='${data.data[i].avatar}'>`;
        }
    })
}

button.addEventListener('click',clickHandler)