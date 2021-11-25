var button=document.querySelector("#user-btn");
var output=document.querySelector("#out1");
var arr=["data","data1","data2","data3","data4"]

function clickHandler(){
    var index=Math.floor(Math.random() * 5);
    out1.innerText=arr[index];
}

button.addEventListener("click",clickHandler)