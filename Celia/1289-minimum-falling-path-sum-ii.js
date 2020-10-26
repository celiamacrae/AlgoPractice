const { expect } = require('chai');

/*
1289. Minimum Falling Path Sum II

LEETCODE HARD

https://leetcode.com/problems/minimum-falling-path-sum-ii/

Given a square grid of integers arr, a falling path with non-zero shifts is a choice of exactly one element from each row of arr, such that no two elements chosen in adjacent rows are in the same column.

Return the minimum sum of a falling path with non-zero shifts.
*/
var minFallingPathSum = function(arr) {

}

describe('minFallingPathSum', () => {
    it('Test case 1', () => {
        expect(minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]])).to.equal(13);
    });
}); 