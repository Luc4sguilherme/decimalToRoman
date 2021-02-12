let { expect } = require("chai");
let converter = require("../src/index");

describe("Convert from Decimal to Roman", function() {
  it("Argument empty", function() {
    expect(() => converter.decimalToRoman()).to.throw(Error, 'Empty argument!');
  });
  it("The argument is equal to zero", function() {
    expect(() => converter.decimalToRoman(0)).to.throw(Error, 'Number out of range [1-3999]!');
  });
  it("The argument is a number less than zero", function() {
    expect(() => converter.decimalToRoman(-1)).to.throw(Error, 'Number out of range [1-3999]!');
  });
  it("The argument is a number greater than 3999", function() {
    expect(() => converter.decimalToRoman(4000)).to.throw(Error, 'Number out of range [1-3999]!');
  });
  it("The argument is a empty string", function() {
    expect(() => converter.decimalToRoman('')).to.throw(Error, 'Empty argument!');
  });
  it("The argument is a letter", function() {
    expect(() => converter.decimalToRoman('a')).to.throw(Error, 'Invalid number!');
  });
  it("Convert 1 (string) to roman", function() {
    let roman = converter.decimalToRoman("1");
    expect(roman).to.equal('I');
  });
  it("Convert 1 to roman", function() {
    let roman = converter.decimalToRoman(1);
    expect(roman).to.equal('I');
  });
  it("Convert 2 to roman", function() {
    let roman = converter.decimalToRoman(2);
    expect(roman).to.equal('II');
  });
  it("Convert 3 to roman", function() {
    let roman = converter.decimalToRoman(3);
    expect(roman).to.equal('III');
  });
  it("Convert 4 to roman", function() {
    let roman = converter.decimalToRoman(4);
    expect(roman).to.equal('IV');
  });
  it("Convert 5 to roman", function() {
    let roman = converter.decimalToRoman(5);
    expect(roman).to.equal('V');
  });
  it("Convert 6 to roman", function() {
    let roman = converter.decimalToRoman(6);
    expect(roman).to.equal('VI');
  });
  it("Convert 7 to roman", function() {
    let roman = converter.decimalToRoman(7);
    expect(roman).to.equal('VII');
  });
  it("Convert 8 to roman", function() {
    let roman = converter.decimalToRoman(8);
    expect(roman).to.equal('VIII');
  });
  it("Convert 9 to roman", function() {
    let roman = converter.decimalToRoman(9);
    expect(roman).to.equal('IX');
  });
  it("Convert 10 to roman", function() {
    let roman = converter.decimalToRoman(10);
    expect(roman).to.equal('X');
  });
  it("Convert 14 to roman", function() {
    let roman = converter.decimalToRoman(14);
    expect(roman).to.equal('XIV');
  });
  it("Convert 19 to roman", function() {
    let roman = converter.decimalToRoman(19);
    expect(roman).to.equal('XIX');
  });
  it("Convert 24 to roman", function() {
    let roman = converter.decimalToRoman(24);
    expect(roman).to.equal('XXIV');
  });
  it("Convert 29 to roman", function() {
    let roman = converter.decimalToRoman(29);
    expect(roman).to.equal('XXIX');
  });
  it("Convert 40 to roman", function() {
    let roman = converter.decimalToRoman(40);
    expect(roman).to.equal('XL');
  });
  it("Convert 44 to roman", function() {
    let roman = converter.decimalToRoman(44);
    expect(roman).to.equal('XLIV');
  });
  it("Convert 100 to roman", function() {
    let roman = converter.decimalToRoman(100);
    expect(roman).to.equal('C');
  });
  it("Convert 500 to roman", function() {
    let roman = converter.decimalToRoman(500);
    expect(roman).to.equal('D');
  });
  it("Convert 1000 to roman", function() {
    let roman = converter.decimalToRoman(1000);
    expect(roman).to.equal('M');
  });
  it("Convert 235 to roman", function() {
    let roman = converter.decimalToRoman(235);
    expect(roman).to.equal('CCXXXV');
  });
  it("Convert 735 to roman", function() {
    let roman = converter.decimalToRoman(735);
    expect(roman).to.equal('DCCXXXV');
  });
  it("Convert 357 to roman", function() {
    let roman = converter.decimalToRoman(357);
    expect(roman).to.equal('CCCLVII');
  });
  it("Convert 3999 to roman", function() {
    let roman = converter.decimalToRoman(3999);
    expect(roman).to.equal('MMMCMXCIX');
  });
});