var readlineSync = require('readline-sync');
let userName = readlineSync.question("Enter your name:");
console.log("Hello " , userName);