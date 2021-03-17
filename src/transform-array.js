const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error();
  if (arr.length === 0) {
    return [];
  }

  const newArr = arr.reduce((result, num, i) => {
    if (arr[i - 1] === '--discard-next') return result;
    if (arr[i + 1] === '--double-prev') result.push(arr[i]);
    if (arr[i - 1] === '--double-next') result.push(arr[i]);
    if (arr[i + 1] === '--discard-prev') return result;
    if (num === '--discard-next' || num === '--double-prev' || num === '--double-next' || num === '--discard-prev') {
      return result;
    }
    result.push(arr[i])
    return result;
  }, [])
  return newArr;
}