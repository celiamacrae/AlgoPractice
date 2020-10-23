const { expect } = require('chai');

/*
43. Multiply Strings

LEETCODE MEDIUM

https://leetcode.com/problems/multiply-strings/

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

var multiply = function(num1, num2) {
    let longer = num1.length > num2.length ? num1 : num2
    let shorter = num2.length < num1.length ? num2 : num1
    
    if(longer === '0' || shorter ==='0'){
        return '0'
    }
  
    let carry = 0
    let res = new Array(num1.length + num2.length).fill(0)
  
    for(let i=shorter.length -1; i>=0; i--){
      for(let j=longer.length-1; j>= 0; j--){
  
        let curr = (shorter[i] * +longer[j]) + res[i+j+1]
        let num = curr
  
        if(curr > 9){
          num = curr % 10
        }
        res[i+j] += Math.floor(curr/10) 
  
        res[i+j+1] = num 
      }
    }
  
    let start = 0
    while(res[start] === 0){
      start ++
    }
    return res.slice(start).join('')
  };

describe('multiply', () => {
    it('Test case 1', () => {
        expect(multiply('2','3')).to.equal('6');
    });
    it('Test case 2', () => {
        expect(multiply('123', '456')).to.equal('56088');
    });
    it('Test case 3', () => {
        expect(multiply('0', '9')).to.equal('0');
    });
}); 