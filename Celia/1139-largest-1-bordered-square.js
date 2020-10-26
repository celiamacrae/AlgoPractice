const { expect } = require('chai');

/*
1139. Largest 1-Bordered Square

LEETCODE MEDIUM

https://leetcode.com/problems/largest-1-bordered-square/

Given a 2D grid of 0s and 1s, return the number of elements in the largest square subgrid that has all 1s on its border, or 0 if such a subgrid doesn't exist in the grid.
*/

var largest1BorderedSquare = function(grid) {

}

describe('largest1BorderedSquare', () => {
    it('Test case 1', () => {
        expect(largest1BorderedSquare([[1,1,1],[1,0,1],[1,1,1]])).to.equal(9);
    });
    it('Test case 2', () => {
        expect(largest1BorderedSquare([[1,1,0,0]])).to.equal(1);
    });
}); 