const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  function createString(str, separ, repeatTime) {
    let resString = (str + separ).repeat(repeatTime);
    if (resString.endsWith(separ)) {
      resString = resString.slice(0, resString.length - separ.length);
    }
    return resString;
  }
  return createString(
      str + createString(addition, additionSeparator, additionRepeatTimes), separator, repeatTimes);
};