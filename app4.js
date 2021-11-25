// Here's an API Link: https://mystery-api.kushanksriraj.repl.co/get

// This API link can give two errors, either 404, or 401.
// If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'.

// Follow Up question: If the status is 200 then show the message "API is working"

 var userButton=document.querySelector("#user-btn");
 var output=document.querySelector("#user-output");

function clickHandler(){
    fetch('https://mystery-api.kushanksriraj.repl.co/get')
    .then(res=>{
       if(res.status==404)
       {
           output.style.color='red';
           output.innerText='page not found';
       }
       else if(res.status==401)
       {
           output.style.color='red';
           output.innerText='you are not logged in';
       }
       else if(res.status==200)
       {
           output.style.color='green';
           output.innerText='API is working';
       }
    })
    
}

 userButton.addEventListener('click',clickHandler)