const { expect } = require('chai');

/*
1215. Stepping Numbers

LEETCODE MEDIUM

https://leetcode.com/problems/stepping-numbers/

A Stepping Number is an integer such that all of its adjacent digits have an absolute difference of exactly 1. For example, 321 is a Stepping Number while 421 is not.

Given two integers low and high, find and return a sorted list of all the Stepping Numbers in the range [low, high] inclusive.
*/

var countSteppingNumbers = function(low, high) {
    let res = []
    
    const find = (current) => {
        if(current > high){
            return
        }
        if(current >= low){
            res.push(current)
        }
        
        const lastDigit = current % 10
        if(lastDigit > 0){
            find(current * 10 + lastDigit -1)
        }
        if(lastDigit < 9){
            find(current * 10 + lastDigit + 1)
        }
    }
    
    if(low === 0){
        res.push(0)
    }
    for(let i=1; i<10; i++){
        find(i)
    }
    
    return res.sort((a,b) => a-b)
};

describe('countSteppingNumbers', () => {
    it('Test case 1', () => {
        expect(countSteppingNumbers(0, 21)).to.deep.equal([0,1,2,3,4,5,6,7,8,9,10,12,21]);
    });
}); 