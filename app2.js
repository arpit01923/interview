//You have to create a text field and three button. Suppose your input text is github. On clicking the first button the text should become like this GITHUB. On clicking the second button the text should become like this Github. On clicking the third button the text should become like this github.

var input = document.querySelector('#user-inp');
var button1 = document.querySelector('#btn-1');
var output = document.querySelector('#user-out');

function clickButton1(){
    var data=input.value;
     var data1=data.toUpperCase();
    console.log(data1);
    output.innerText=data1;
}

button1.addEventListener('click',clickButton1)
