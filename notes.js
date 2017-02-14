var fruits = ["apple", "banana", "cherry"];




// Write a function called outputFruitOld that consoles every fruit in a fruit array.

function outputFruitOld (array) {
	for (var i=0; i<array.length; i++) {
		console.log(array[i]);
	}
}

outputFruitOld(fruits);




// Rewrite using forEach array method.

function outputFruits (element, index) {
	console.log(element);
	console.log("array[" + index + "] " + element);
}

fruits.forEach(outputFruits);




// Write a function called backwardFruitsOld that reverses the letters in each word in the fruits array.

function backwardFruitsOld(array) {
	var backwardFruit = [];
	for (var i=0; i<array.length; i++) {
		backwardFruit.push(array[i].split("").reverse().join(""));
	}
	console.log(backwardFruit);
}

backwardFruitsOld(fruits);

// Rewrite using map array method

var backwardFruit = fruits.map(function(fruit) {
	return fruit.split("").reverse().join("");
});

console.log(backwardFruit);




// Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.

function fiveLettersOnlyOld (array) {
	var filteredFruits = [];
	for (var i=0; i<array.length; i++) {
		if (array[i].length === 5) {
			filteredFruits.push(array[i]);
		}
	}
	console.log(filteredFruits)
}

fiveLettersOnlyOld(fruits);




function filterIt (cat) {
	if (cat.length === 5) {
		return cat;
	}
}

// container = array.arraymethod(function);
var filteredFruits = fruits.filter(filterIt);
console.log(filteredFruits);




// Write a function called addzOld that returns the sum of an array.

var numbers = [0, 1, 2, 3, 4];

function addzOld (array) {
	var sum = 0;
	for (var i=0; i<array.length; i++) {
		sum = sum + array[i];
	}
	console.log(sum);
} 

addzOld(numbers);



// Rewrite using reduce array method.

var sum = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index) {
	console.log("current index ", index);
	console.log("previousValue ", previousValue);
	console.log("currentValue " currentValue);
	return previousValue + currentValue;
});

console.log(sum);






















