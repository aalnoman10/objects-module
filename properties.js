// declare a object 
var myTable = {
    book: 1,
    mobile: 2,
    pepper: 4,
    brash: 1,
    bat: 1,
    lock: 2
}

// print the full object 
console.log(myTable.pepper);

// set a new value on the properties system 1
myTable.pepper = 14;
console.log(myTable.pepper);

// set a new value on the properties system 2
myTable['pepper'] = 24;
console.log(myTable.pepper);

// set a new value on the properties system 3 with variable
var pepperUpdate = 12;
myTable['pepper'] = pepperUpdate;
console.log(myTable.pepper);

// get all properties on the objects
var propertiesAll = Object.keys(myTable)
console.log(propertiesAll);

// get all properties value on the objects
var valueOfProperties = Object.values(myTable)
console.log(valueOfProperties);