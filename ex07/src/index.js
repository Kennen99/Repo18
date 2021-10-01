// Only change code below this line
var numberArray = [9,5,4,11,5,12,13,15,4,2,5];
let uniqueArray = new Set();
for(var i=0; i<numberArray.length; i++){
    uniqueArray.add(numberArray[i]);
}
for(let item of uniqueArray){
    console.log(item)
}
// Only change code above this line