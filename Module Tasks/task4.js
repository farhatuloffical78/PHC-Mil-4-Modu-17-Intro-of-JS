/* Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers. */

// Practice Problem 4:

/* isNan() always check for number-by trying to converting
 everything into number thats why string '33' values are 
 converted to number 33 and it returns false statement. */
const a = isNaN('-11');

// const a = isNaN(2-10);

console.log(typeof a);
console.log(a);