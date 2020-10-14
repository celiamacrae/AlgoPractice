const { expect } = require('chai');

/*
709. To Lower Case

LEETCODE EASY

https://leetcode.com/problems/to-lower-case/

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

*/

var toLowerCase = function(str) {
    let uppers = {
        'A' : 'a',
        'B' : 'b',
        'C' : 'c',
        'D' : 'd',
        'E' : 'e',
        'F' : 'f',
        'G' : 'g',
        'H' : 'h',
        'I' : 'i',
        'J' : 'j',
        'K' : 'k',
        'L' : 'l',
        'M' : 'm',
        'N' : 'n',
        'O' : 'o',
        'P' : 'p',
        'Q' : 'q',
        'R' : 'r',
        'S' : 's',
        'T' : 't',
        'U' : 'u',
        'V' : 'v',
        'W' : 'w',
        'X' : 'x',
        'Y' : 'y',
        'Z' : 'z'
    }
    
    let output = ''
    
    for(let i=0; i<str.length; i++){
        if(uppers.hasOwnProperty(str[i])){
            output += uppers[str[i]]
        }else{
            output += str[i]
        }
    }
    
    return output
};

describe('toLowerCase', () => {
    it('Test case 1', () => {
        expect(toLowerCase("Hello")).to.equal("hello");
    });
    it('Test case 2', () => {
        expect(toLowerCase("here")).to.equal("here");
    });
    it('Test case 3', () => {
        expect(toLowerCase("LOVELY")).to.equal("lovely");
    });
}); 