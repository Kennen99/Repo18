// Only change code below this line
function* myGenerator(){
    yield* [1,2,3,4,5];
    yield* 'Arena';
    yield* arguments;
}
const iterator = myGenerator(6,7,8);

var generatorArray = [];
var i=0;
for(;;){
    var pom = iterator.next().value;
    if(pom){
        generatorArray.push(pom);
    }
    else {
        break;
    }
}
console.log(generatorArray);
// Only change code above this line
module.exports = { generatorArray, myGenerator };