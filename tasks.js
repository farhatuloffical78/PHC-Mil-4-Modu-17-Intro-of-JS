// Practice Problem 1:

amount=1000;

appPrice=100;
orangePrice=300;

remaining= 1000 - (appPrice + orangePrice);

console.log(remaining);

// Practice Problem 2:

// console.log(typeof total.toFixed(3));

var Math=88.4, Bio=34.6, Chem=55, Phy=90, Bangla=59;
var res=(Math + Bio + Chem + Phy + Bangla)/5;
console.log(res .toFixed(3));

// Practice Problem 3:

givenNumber = 13;
reminder= 13%5;

console.log(reminder);


// Practice Problem 4:

// isNan() always check for number by trying to converting everything into number thats why string '33' values are converted to number 33 and it returns false statement.
const a = isNaN('-11');

// const a = isNaN(2-10);

console.log(typeof a);
console.log(a);