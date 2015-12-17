//Require syntax when including local files
var number_collection = require('./number_collection/numbers');
var numbers_utils = require('./number_collection/numbers_utils');
		

//It's just javascript
randomNumbers = number_collection;

randomNumbers.forEach(function(randomNumber){
	console.log('Current number: ', randomNumber);
});

console.log(numbers_utils);

console.log(numbers_utils.getFirstNumber(randomNumbers));

console.log(numbers_utils.getLastNumber(randomNumbers));