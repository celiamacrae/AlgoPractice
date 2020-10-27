const { expect } = require('chai');

/*
6. ZigZag Conversion

LEETCODE MEDIUM

https://leetcode.com/problems/zigzag-conversion/

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
*/

var convert = function(s, numRows) {

}

describe('convert', () => {
    it('Test case 1', () => {
        expect(convert("PAYPALISHIRING", 3)).to.equal("PAHNAPLSIIGYIR");
    });
    it('Test case 2', () => {
        expect(convert("PAYPALISHIRING", 4)).to.equal("PINALSIGYAHRPI");
    });
    it('Test case 3', () => {
        expect(convert("A", 1)).to.equal("A");
    });
}); 