/**
 * Takes in a number integer, returns a roman numeral string
 * @param decimal 
 * @returns {string}
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

  if(number <= 0 || isNaN(number)) {
    throw new Error('Invalid number!')
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