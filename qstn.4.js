var readlineSync = require('readline-sync');
function calculateArea(length, width){
    const area = length * width;
    console.log("The area of the rectangle is " + area);
}
const length = parseInt(readlineSync.question("Enter the length of the rectangle:"));
const width = parseInt(readlineSync.question("Enter the width of the rectangle:"));
calculateArea(length, width);
