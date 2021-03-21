const chainMaker = {
  arr: [],
  getLength() {return this.arr.length;},
  addLink(value) {this.arr.push(`( ${value} )`); return this;},
  removeLink(pos) {
    if (pos > this.arr.length || pos <= 0 || isNaN(pos)) { this.arr = []; throw new Error;}
    this.arr.splice(pos - 1, 1);
    return this;
  },
  reverseChain() {this.arr.reverse(); return this; },
  finishChain() {let res = this.arr.join('~~'); this.arr = []; return res;}
};

module.exports = chainMaker;