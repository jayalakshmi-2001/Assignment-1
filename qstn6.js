var readlineSync = require('readline-sync');
let grade = parseInt(readlineSync.question("Enter your grade:"));

if (grade >= 60)
{
  console.log("Congratulations you  are passed");
}
 else
{
  console.log("You are failed");
}