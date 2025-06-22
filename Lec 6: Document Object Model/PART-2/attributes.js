let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);

let div = document.querySelector("div");
console.log(div);
let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para);
let cl = para.getAttribute("class");
console.log(cl);

let para = document.querySelector("p");
console.log(para);
let cl = para.getAttribute("class");
console.log(cl);
para.setAttribute("class", "newClass");
cl = para.getAttribute("class");
console.log(cl);

let div = document.querySelector("div");
console.log(div.style);
div.style.backgroundColor = "purple";
div.style.fontSize = "30px";
div.innerText = "Hello!";

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn)
let div = document.querySelector("div");
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new! </i>";
document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p")
para.remove();