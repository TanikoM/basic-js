const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let count = 0;
    matrix.flat().forEach((el) => {
        el === '^^' ? count++ : count;
    })
    return count;
};


//For example:
//
// countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3