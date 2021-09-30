// Only change code below this line

let shoppingList = new Map([
    ["Banana", 13],
    ["Pineapple", 17],
    ["Pear", 19],
    ["Carrot", 42],
    ["Apple", 83],
]);

var arrKey = [];
for(let [key, value] of shoppingList.entries()){
    arrKey.push(key);
    console.log("groceries: " + key);
}
var arrValue = [];
for(let [key, value] of shoppingList.entries()){
    arrKey.push(value);
    console.log("amount: " + value);
}
for(let [key, value] of shoppingList.entries()){
    console.log("[ " + key + ", " + value + " ]");
}

// Only change code above this line
module.exports = {shoppingList, arrKey, arrValue};