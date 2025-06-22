/*
Qs. Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Apna College Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
*/

let para = document.querySelector("p");
console.log(para);
let cl = para.getAttribute("class");
console.log(cl);
para.classList.add("newClass");

