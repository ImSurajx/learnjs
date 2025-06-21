/*
WINDOW OBJECT
a object that is defined by our browser by default which contain functions like alert, prompt, console.log & many more.

DOM - Document Object Model:
when a web page is loaded, the browser creates a DOM of the page.
we can see that:
- window --> document --> html
                          ||
                         -  -
                    |             |
                head.            body

we use dom to made dynamic changes in our webpage.

DOM Manipulation.
- selecting with id
    heading = document.getElementById("heading"); // return h1 value.

- selecting with class
    let headings = document.getElementsByClassName("heading")

- selecting with tag
    document.getElementByTagName("p")

QUERY SELECTOR.
let firstElement = document.querySelector("p"); // first elements
console.dir(firstElement);

let allElement = document.querySelectorAll("p"); // all elements
console.dir(allElement);
*/

// heading = document.getElementById("heading"); // return h1 value.
// console.log(heading);

// let headings = document.getElementsByClassName("heading")
// console.log(headings);

// let firstElement = document.querySelector("p"); // first elements
// console.dir(firstElement);

// let allElement = document.querySelectorAll("p"); // all elements
// console.dir(allElement);

let div = document.querySelector("div");
console.dir(div);