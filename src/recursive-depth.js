const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) return 1;
    return Array.isArray(arr) ? Math.max(...arr.map(item => this.calculateDepth(item))) + 1 : 0;
  }
};