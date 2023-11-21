var readlineSync = require('readline-sync');
let num1 = parseInt(readlineSync.question("Enter the first number:"));
let num2 = parseInt(readlineSync.question("Enter the second number:"));
let sum = num1 + num2;
console.log("The sum of the two numbers is:", sum);