/**
 * Takes in a number integer, returns a roman numeral string.
 * @param {number} number range [1-3999]
 * @return {string}
*/
function decimalToRoman(number) {
  let symbols = '';
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  if(number === undefined || number.length == 0) {
    throw new Error('Empty argument!')
  }

  if(isNaN(number)) {
    throw new Error('Invalid number!')
  }

  if(number <= 0 || number > 3999 ) {
    throw new Error('Number out of range [1-3999]!')
  }

  for (let i of Object.keys(roman)) {
    let q = Math.floor(number / roman[i]);
    number -= q * roman[i];
    symbols += i.repeat(q);
  }

  return symbols
}

module.exports = {
  decimalToRoman
}