// Only change code below this line
let one = new Set([1,2,3,4,5]);
let two = new Set([6,4,3,2]);

// i uslov
let unionSet = new Set([...one].map(x => x));
for(let item of two){
    unionSet.add(item);
}
console.log(unionSet);

// jesu u one jesu u two
let intersectionSet = new Set();
for(let item1 of one){
    var ima = false;
    for(let item2 of two){
        if(item1===item2) ima = true;
    }
    if(ima) intersectionSet.add(item1);
}
console.log(intersectionSet);


// jesu u one nisu u two
let differenceSet = new Set();
for(let item1 of one){
    var nema = true;
    for(let item2 of two){
        if(item1===item2){
            nema = false;
            break;
        } 
    }
    if(nema) differenceSet.add(item1);
}
console.log(differenceSet);

// Only change code above this line