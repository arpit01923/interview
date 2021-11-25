//Fetch an API ( https://jsonplaceholder.typicode.com/todos ) and display all the titles with their id which are marked as completed.

var button=document.querySelector("#user-btn");

function clickHandler(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>{
        for(var i=0;i<data.length;i++)
        {if(data[i].completed === true)
        {
            console.log(data[i].id+data[i].title);
        }}
    })
}
 
button.addEventListener('click',clickHandler)