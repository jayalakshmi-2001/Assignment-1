var readlineSync = require('readline-sync');

    const age = parseInt(readlineSync.question("Enter your age:"));

    if (age >= 18) 
    {
      console.log("You are eligible to vote.");
    }
     else
    {
      console.log("You are not eligible to vote yet.");
    }

