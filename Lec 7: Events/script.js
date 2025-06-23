let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
}

// event listner
// - add

let fun = () => {
    console.log("button one was clicked");
    console.log(btn1.type);
};

btn1.addEventListener("click", fun);

// - remove
btn1.removeEventListener("click", fun);
