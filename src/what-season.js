const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if(date == undefined) {
		return 'Unable to determine the time of year!'
	} 
	
	
	if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {



	} else {
		return 'Error';
	}
}
