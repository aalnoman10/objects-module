// declare a object 
var myTable = {
    book: 1,
    mobile: 2,
    pepper: 4,
    brash: 1,
    bat: 1,
    lock: 2
}
const keys = Object.keys(myTable);
const properName = Object.keys(myTable);
// console.log(keys);
// loop in object 
for (let i = 0; i < keys.length; i++) {
    const properName = keys[i];
    const properValue = myTable[properName];
    console.log(properName, properValue);
}

for (const properName in myTable) {
    const properValue = myTable[properName];
    console.log(properName,properValue);
}