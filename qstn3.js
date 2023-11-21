var readlineSync = require('readline-sync');
function calculateProduct(num1 , num2){
  const product = num1 * num2;
  return product
}
  const firstNumber = parseInt(readlineSync.question("Enter the first number:"));
  const secondNumber = parseInt(readlineSync.question("Enter the second number:"));
  
  const product = calculateProduct(firstNumber, secondNumber);
  console.log("The product of the two numbers is:", product);