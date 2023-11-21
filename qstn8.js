var readlineSync = require('readline-sync');
let age = parseInt(readlineSync.question('Please enter your age:'));

if (age <= 12){
  console.log('You are a Child.');
}
else if (age <= 19) {
  console.log('You are a Teenager.');
} 
else if (age <= 59) {
  console.log('You are an Adult.');
} 
else {
  console.log('You are a Senior.');
}