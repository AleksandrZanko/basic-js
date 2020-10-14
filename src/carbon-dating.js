const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if(typeof(sampleActivity) != 'string') {
		return false;
	}

	let number = Number(sampleActivity);

	if(isNaN(number) || number <= 0 || number > MODERN_ACTIVITY || Number.isInteger(number) == false) {
		return false;
	} else {
		let k = 0.693 / 5730;
		let ln = Math.log(MODERN_ACTIVITY / number);

		let time = Math.ceil(ln / k);
		return time;
	}   
};
