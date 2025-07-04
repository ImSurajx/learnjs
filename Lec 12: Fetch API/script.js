const URL = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=59ae6b8f89d935b990188f89f6022255";

// by async & await
const getWeather = async() => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0]);
}

// by promise
// function getWeather(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });
// }

// ajax is asynchronous js & xml.
// json is javascript object notation
// json() method: return a second promise that resolves with the result of parsing the response body text as JSON(input is JSON, output is JS Object)
