const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let obj = {};

	let count = 2**disksNumber - 1;
	let turnsSec = turnsSpeed / 3600;
	let resSeconds = Math.floor(count / turnsSec);

	obj.turns = count;
	obj.seconds = resSeconds;

	return obj;
};
