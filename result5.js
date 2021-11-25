var button=document.querySelector("#user-btn");
var output=document.querySelector("#user-output");

function clickHandler(){
    fetch('https://api.github.com/users/Arpit-dotcom')
    .then(res=>res.json())
    .then(data=>{
        fetch(data.repos_url)
        .then(res=>res.json())
        .then(result=>{
            for(var i=0;i<result.length;i++){
                output.innerText+=`${result[i].full_name}\n`;
            }
        })
    })
}

button.addEventListener('click',clickHandler)