const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let result = [];

	for(let i = 0; i < arr.length; i++) {


		if((arr[i - 1] !== '--discard-next' && arr[i] !== '--discard-next') && 
			(arr[i + 1] !== '--discard-prev' && arr[i] !== '--discard-prev') &&
			arr[i] !== '--double-next' && arr[i] !== '--double-prev' 
			&& arr[i + 1] !== '--double-prev') {

			result.push(arr[i]);

	} 

	if(arr[i] == '--double-next') {	
		if(arr[i + 1] != undefined) {			
			result.push(arr[i + 1]);		
		}
	}

	if(arr[i] == '--double-prev') {
		if(arr[i - 1] != undefined && arr[i - 2] != '--discard-next') {
			result.push(arr[i - 1]);
			result.push(arr[i - 1]);
		}
	}

}
return (result);
};
