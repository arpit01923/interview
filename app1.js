var inp1=document.querySelector('#i1');
var inp2=document.querySelector('#i2');
var inp3=document.querySelector('#i3');
var out1=document.querySelector('#o1');

function clickAdd(){
    var data=parseFloat(inp1.value)+``+parseFloat(inp2.value);
    out1.innerText=data;
}

inp3.addEventListener('click',clickAdd);