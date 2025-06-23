/*
Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode
when clicked again.
*/
let body = document.querySelector("body");
let btn = document.querySelector("button");
let flag = 0;
const mode = () => {
    if(flag === 0){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        flag++;
    } else{
        body.style.backgroundColor = "white";
        body.style.color = "white";
        flag--;
    }
}
btn.addEventListener("click", mode);