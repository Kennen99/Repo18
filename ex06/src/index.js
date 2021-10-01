// Only change code below this line
let rockStar = new Map([
    ["artist", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"],
])
let newRock = new Map([

])
for(let [key, value] of rockStar.entries()){
    if(!key.includes('a'))
        newRock.set(key, value);
}
console.log(newRock);
// Only change code above this line
module.exports = { rockStar, newRock };