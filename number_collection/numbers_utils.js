/*When you want to expose the methods in a module all at once, export them within the context of 
an object and use module.exports to make them available for use*/

// utils = {

// getFirstNumber: function(numbersarray){
// 	return numbersArray[0];

// 		},

// 		getLastNumber: function(numbersArray){
// 			lastIndex = numbersArray.length-1;
// 			return numbersArray[lastIndex];

// 		}
// }

// module.exports = utils

printArray = function(numbersArray){
	console.info(numbersArray);
}


exports.getFirstNumber = function(numbersArray){
					printArray(numbersArray);
					return numbersArray[0];
				}


exports.getLastNumber = function(numbersArray){
					lastIndex = numbersArray.length-1;
					return numbersArray[lastIndex];
				}



