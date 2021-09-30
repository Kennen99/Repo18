// Only change code below this line
function* myGenerator(){
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1(){
    for(var i=1; i<=5; i++){
        var x;
        yield x=i;
    }
}
function* insideGenerator2(){
    for(var i=10; i<=15; i++){
        var x;
        yield x=i;
    }
}
function* insideGenerator3(){
    for(var i=6; i<=9; i++){
        var x;
        yield x=i;
    }
}

var iterator = myGenerator();
var fifteenArray = [];
for(var i=0; i<16; i++){
        fifteenArray.push(iterator.next().value);
        if(fifteenArray[i]){
            process.stdout.write(fifteenArray[i]+"#, ");
        }
        else {
            process.stdout.write(fifteenArray[i]+"!");
        }
}

// Only change code above this line
module.exports = { fifteenArray, myGenerator};