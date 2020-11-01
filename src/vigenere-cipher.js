const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    if(message.length == 0 || key.length == 0) {
    	return 'Error!';
    }
  }    
  decrypt(message, key) {
    if(message.length == 0 || key.length == 0) {
    	return 'Error!';
    }
  }
}

module.exports = VigenereCipheringMachine;
