const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if(!Array.isArray(members)) {
		return false;
	}

	let teamName = [];
	for(let member of members) {
		if(typeof(member) == 'string') {
			member = member.trim().toUpperCase();
			teamName.push(member[0]);
		} 
	}
	
	let result = teamName.sort().join('');
	return result;
};
