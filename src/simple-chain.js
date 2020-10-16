const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentArr: [],

  getLength() {
    return this.currentArr.length;
  },
  addLink(value) {
    this.currentArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof(position) != 'number' || !Number.isInteger(position) || (position < 1 || position > this.currentArr.length - 1)) {
      this.deleteChain();
      return 'Error';
    } else {
      const index = position - 1;
      this.currentArr.splice(index, 1);
      return this;
    }    
  },
  reverseChain() {
    this.currentArr.reverse();
    return this;
  },
  finishChain() {
    const result = this.getChain();
    this.deleteChain();

    return result;     
  },

  deleteChain() {
    this.currentArr.length = 0;
  },

  getChain() {
    return this.currentArr.join('~~'); 
  }
};

module.exports = chainMaker;
