const { expect } = require('chai');

/*
96. Unique Binary Search Trees

LEETCODE MEDIUM

https://leetcode.com/problems/unique-binary-search-trees/

Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

var numTrees = function(n) { 
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    
    for(let i=2; i<= n; i++){
        for(let j=1; j<=i; j++){
            dp[i] += dp[i - j] * dp[j -1]
        }
    }

    return dp[n]
};

describe('numTrees', () => {
    it('Test case 1', () => {
        expect(numTrees(3)).to.equal(5);
    });
    it('Test case 2', () => {
        expect(numTrees(6)).to.equal(132);
    });
    it('Test case 3', () => {
        expect(numTrees(10)).to.equal(16796);
    });
}); 