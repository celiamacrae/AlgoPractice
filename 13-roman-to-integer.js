const { expect } = require('chai');

/*
13. Roman to Integer

https://leetcode.com/problems/roman-to-integer/

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

var romanToInt = function(s) {
    
    let values = {
        'M' : 1000,
        'D' : 500,
        'C' : 100,
        'L' : 50,
        'X' : 10,
        'V' : 5,
        'I' : 1,
        'IV' : 4,
        'IX' : 9,
        'XL' : 40,
        'XC' : 90,
        'CD' : 400,
        'CM' : 900
    }
    
    let sum = 0
    let ptr = 0
    
    while(ptr < s.length){
        let singleSymbol = s.substring(ptr, ptr+1)
        if(ptr < s.length -1){
            let doubleSymbol = s.substring(ptr, ptr+2)
            if(values.hasOwnProperty(doubleSymbol)){
                sum += values[doubleSymbol]
                ptr+=2
            }else{
                sum += values[singleSymbol]
                ptr++
            }
        }else{
            sum += values[singleSymbol]
            ptr++    
        }
    }
    return sum  
};



describe('romanToInt', () => {
    it('Test case 1', () => {
        expect(romanToInt("III")).to.equal(3);
    });
    it('Test case 2', () => {
        expect(romanToInt("IV")).to.equal(4);
    });
    it('Test case 3', () => {
        expect(romanToInt("IX")).to.equal(9);
    });
    it('Test case 4', () => {
        expect(romanToInt("LVIII")).to.equal(58);
    });
    it('Test case 5', () => {
        expect(romanToInt("MCMXCIV")).to.equal(1994);
    });
}); 