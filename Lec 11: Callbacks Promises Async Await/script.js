console.log("one");
console.log("two");
console.log("three");

function hello(){
    
}
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
},4000) // timeout: 2s = 2000ms
console.log("three");
console.log("four");

function sum(a,b){
    console.log(a+b);
}
function calculator(a, b, sumCallback){
    sumCallback(a,b);
}

calculator(1,2, sum);

let age = 21;
if(age>=18){
    if(age>=60){
        console.log("senior");
    }else{
        console.log("middle");
    }
} else {
    console.log("child")
}

for(let i = 0; i<5; i++){
    let str = "";
    for(let j = 0; j < 5; j++){
        str = str + j;
    }
    console.log(i, str);
}

callback hell (nested callbacks & pyramid doom)
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
        getNextData();
    }, 2000);
}

getData(1,()=> {
    getData(2, () => {
        getData(3);
    });
});

let promise = new Promise((resolve, reject) => {
    console.log("I'm a promise.");
    reject("error 404");
}) 

function getData(dataId, getNextData){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("sucess");
            if(getNextData){
                getNextData();
            }
        },2000);
    })
}

const getPromise = () => {
    return new Promise((resolve, reject)=>{
        console.log("i am a promise");
        resolve("sucess");
        // reject("some eeor occurred");
    })
}

let promise = getPromise();
promise.then(() => {
    console.log("promise fullfild");
});

function asyncFunc1(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data one");
            resolve("sucess");
        },4000)
    })
}

function asyncFunc2(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data two");
            resolve("sucess");
        },4000)
    })
}

console.log("fetching data 1....")
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data 2....")
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    })
});





let p2 = asyncFunc2();
p2.then((res)=>{
    console.log(res);
});

getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res)=>{
    console.log(res);
})

async function hello() {
    console.log("hello");
}

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log("weather data");
            resolve(200);
        },2000);
    })
}

async function getWeatherData(){
    await api(); // 1st call
    await api(); // 2nd call
}