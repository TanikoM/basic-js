const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date && !isNaN(date))) throw new Error();

  let month = date.getMonth();
  switch(month) {
    case 0: return 'winter';
    case 1: return 'winter';
    case 2: return 'spring';
    case 3: return 'spring';
    case 4: return 'spring';
    case 5: return 'summer';
    case 6: return 'summer';
    case 7: return 'summer';
    case 8: return 'autumn';
    case 9: return 'autumn';
    case 10: return 'autumn';
    case 11: return 'winter';
  }
};