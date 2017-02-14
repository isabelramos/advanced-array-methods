// Using one single line of JavaScript code, complete the following tasks on the array of integers below.


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];



// Sort the numbers in descending order (10, 9, 8, 7, etc).

var numbersDescending = integers.sort(function(a,b){return b-a});

console.log("result: ", numbersDescending);




// Remove any integers greater than 19.

var noGreaterThan19 = integers.sort(function(a,b){return a-b}).filter(function(num){return num < 19});

console.log("result: ", noGreaterThan19);




// Multiply each remaining number by 1.5 and then subtract 1.

var integerMath = noGreaterThan19.map(function(num){return (num * 1.5) - 1});

console.log("result: ", integerMath);




// Then output (either in the DOM or the console) the sum of all the resulting numbers.



var integerMathTotal = integerMath.reduce(function(prev, curr) {return prev + curr});

console.log("result: ", integerMathTotal);










