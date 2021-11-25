//API - https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json Take user input in USD, see what API contains, convert USD to INR using info from API, display output on screen.

var input=document.querySelector('#user-inp');
var button=document.querySelector('#btn-1');
var output=document.querySelector('#user-out');

function clickHandler(){
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    .then(res=>res.json())
    .then(json=>{var data=Number(input.value);
        data=data*json.usd.inr;
        output.innerText=data.toFixed(2);}
    )
}
 
button.addEventListener('click',clickHandler)