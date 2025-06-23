/*
4 Pillars of DOM
- Selecting of an Element
- Changing HTML
- Changing CSS
- Event Listener
*/

// Selecting of an Element
let a = document.querySelector("h1");
console.log(a);

// Changing HTML
let a = document.querySelector("h1");
let a = document.querySelector("h1").innerHTML= "Hello";
a.innerHTML = "Changed HTML";

// Changing CSS
var a = document.querySelector("h1");
a.style.backgroundColor = "red";
a.style.color = "white";

// Event Listener
let a = document.querySelector("h1");
a.innerHTML = "Hi, I'm Suraj";
a.style.color = "yellow";
a.style.backgroundColor = "#000";
a.addEventListener("click",function(){
    a.innerHTML = "Hi Suraj";
    a.style.color = "skyblue";
    a.style.backgroundColor = "blue";
})
let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");
let flag = 0;
btn.addEventListener("click", function(){
    if(flag === 0 ){
        bulb.style.backgroundColor = "yellow";
        flag = 1;
    } else {
        bulb.style.backgroundColor = "transparent";
        flag = 0;
    }   
})
// to select all element
let h = document.querySelectorAll("h1");
console.log(h);

h.forEach(function(e){
    console.log(e);
})
