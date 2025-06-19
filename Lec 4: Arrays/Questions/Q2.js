/*
Q2. for the given array with prices of 5 items -> [250, 645, 300, 900, 50], all item have an offer of 10% off on them. change the array to store final price after applying offer.
*/

let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10; // 10% discount
    items[i] -= offer;         // subtract discount from item
    console.log(items[i]);
}
