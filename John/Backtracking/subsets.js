const { expect } = require('chai');

/*
78. Subsets

LEETCODE MEDIUM

https://leetcode.com/problems/subsets/

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.
*/

var subsets = function(nums) {
  const output = []
  backTrack(output, [], nums, 0)
  return output
};

function backTrack(output, current, nums, startIdx) {
  output.push([...current])
  for (let i = startIdx; i < nums.length; i++) {
      current.push(nums[i])
      backTrack(output, current, nums, i + 1)
      current.pop()
  }
}

describe('subsets', () => {
  it('Test case 1', () => {
      expect(subsets([1,2,3])).to.equal([
        [3],
        [1],
        [2],
        [1,2,3],
        [1,3],
        [2,3],
        [1,2],
        []
      ]);
  });
});
