//Array.prototype.reduce() in es6 style



const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);



const cars = ["Honda", "Volvo", "BMW", "Honda", "Honda", "Toyota"];
 

console.log(indexOfAll(cars, "Honda")); 




