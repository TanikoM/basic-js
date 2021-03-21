const CustomError = require("../extensions/custom-error");

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class VigenereCipheringMachine {

  constructor(directOrRevese) {
    directOrRevese === undefined ? this.modeDirectRevese = true : this.modeDirectRevese = false;
  }

  encrypt(str, key) {
    const strArr = [...str.toLowerCase()];

    const keyArr = strArr.reduce((newArr, later, i) => {
      Boolean(later) ? newArr.push(key[i % key.length].toLowerCase()) : null;
      return newArr;
    }, [])

    strArr.map((later, i) => {
      return Boolean(later.trim()) === Boolean((keyArr[i]).trim()) ? keyArr[i] : keyArr.splice(i, 0, later);
    })

    const strArrNum = strArr.map(later => {
      return ALPHABET.includes(later) ? ALPHABET.indexOf(later) : later;
    })

    const keyArrNum = keyArr.map(later => {
      return ALPHABET.includes(later) ? ALPHABET.indexOf(later) : later;
    })

    const sumArrNumArrNum = strArrNum.map((num, i) => {
      return typeof num === 'number' ? (num + keyArrNum[i]) % 26 : num;
    })

    const encryptNumToLater = sumArrNumArrNum.map((num) => {
      return typeof num === 'string' ? num : ALPHABET[num];
    })

    return this.modeDirectRevese ? encryptNumToLater.join('').toUpperCase() : encryptNumToLater.reverse().join('').toUpperCase();
  }

  decrypt(str, key) {
    const strCtypted = str.split('');

    const keyArr = strCtypted.reduce((newArr, later, i) => {
      Boolean(later) ? newArr.push(key[i % key.length].toUpperCase()) : null;
      return newArr
    }, [])

    strCtypted.forEach((_, i) => {
      if (strCtypted[i] === ' ') keyArr.splice(i, 0, ' ');
    });


    const strCtyptedToNum = strCtypted.map((later) => {
      return ALPHABET.includes(later.toLowerCase()) ? ALPHABET.indexOf(later.toLowerCase()) : later;
    })

    const keyCtyptedToNum = keyArr.map((later) => {
      return ALPHABET.includes(later.toLowerCase()) ? ALPHABET.indexOf(later.toLowerCase()) : later;
    })

    const sumArrNumArrNum = strCtyptedToNumber.map((num, i) => {
      return typeof num === 'number' ? (num - keyCtyptedToNumber[i]) : num;
    })

    const sumArrNumArrNumPlus26 = sumArrNumArrNum.map((num) => {
      return 0 > num ? num + 26 : num;
    })

    const decrypt = sumArrNumArrNumPlus26.map((num, i) => {
      return typeof num === 'number' ? ALPHABET[num] : num;
    })

    return this.modeDirectRevese ? decrypt.join('').toUpperCase() : decrypt.reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
