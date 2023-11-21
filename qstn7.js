var readlineSync = require('readline-sync');
let userNumber = parseFloat(readlineSync.question("Enter a number:"));

if (userNumber > 0){
  console.log("The number is positive.");
} 
else if (userNumber < 0) 
{
  console.log("The number is negative.");
}
 else {

  console.log("The number is zero.");
}