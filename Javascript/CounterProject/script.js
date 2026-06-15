let increasebtn=document.getElementById("increase");
let decreasebtn=document.getElementById("decrease");
let resetbtn=document.getElementById("reset");
let counter=document.getElementById("counter");
let count=0;

increasebtn.onclick=function () {
    count++;
    counter.innerHTML=count;
}
decrease.onclick=function () {
    count--;
    counter.innerHTML=count;
}
resetbtn.onclick=function () {
    count=0;
    counter.innerHTML=count;
}