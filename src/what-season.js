const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

	if(date == undefined) {
		return 'Unable to determine the time of year!';
	} 
	

	//let year = date.getFullYear();
	let month = date.getMonth();
	//let day = date.getDate();
	
	if (Object.prototype.toString.call(date) === '[object Date]') {
	 	
		if(month <= 1 || month == 11) {
			return 'winter';
		} else if(month >= 2 && month <= 4) {
			return 'spring';
		} else if(month >= 5 && month <= 7) {
			return 'summer';
		} else {
			return'autumn';
		}

	} else {
		return 'Error';
	}
}

