var button=document.querySelector("#user-btn")
var input=document.querySelector("#user-input")
var output=document.querySelector("#user-output");
function getId(text){
    var data='https://api.github.com/users'+'/'+text;
  return data;
}
function clickHandler(){
    fetch(getId(input.value))
    .then(res=>res.json())
    .then(data=>{
         output.innerHTML=`<img src=${data.avatar_url}>`
    })
}

button.addEventListener('click',clickHandler)