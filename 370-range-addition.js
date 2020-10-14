const { expect } = require('chai');

/*
370. Range Addition

LEETCODE MEDIUM

https://leetcode.com/problems/range-addition/

Assume you have an array of length n initialized with all 0's and are given k update operations.

Each operation is represented as a triplet: [startIndex, endIndex, inc] which increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.

Return the modified array after all k operations were executed.
*/

var getModifiedArray = function(length, updates) {
    let output = new Array(length).fill(0)
    
    for(let i=0; i<updates.length; i++){
        for(let j=updates[i][0]; j<= updates[i][1]; j++){
            output[j] = output[j] + updates[i][2]
        }
    }
    
    return output 
};

describe('getModifiedArray', () => {
    it('Test case 1', () => {
        expect(getModifiedArray(5, [[1,3,2],[2,4,3],[0,2,-2]])).to.deep.equal([-2,0,3,5,3]);
    });
}); 