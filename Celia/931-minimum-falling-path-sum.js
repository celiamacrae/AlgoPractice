const { expect } = require('chai');

/*
931. Minimum Falling Path Sum

LEETCODE MEDIUM

https://leetcode.com/problems/minimum-falling-path-sum/

Given a square array of integers A, we want the minimum sum of a falling path through A.

A falling path starts at any element in the first row, and chooses one element from each row.  The next row's choice must be in a column that is different from the previous row's column by at most one.
*/

var minFallingPathSum = function(A) {

}

describe('minFallingPathSum', () => {
    it('Test case 1', () => {
        expect(minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]])).to.equal(12);
    });
}); 