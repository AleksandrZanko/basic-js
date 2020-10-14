const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  for(let currentArr of arr) {
  	for(let i = 0; i < currentArr.length; i++) {
  		if(currentArr[i] == '^^') {
  			count++;
  		}
  	}
  }
  return count;
};
