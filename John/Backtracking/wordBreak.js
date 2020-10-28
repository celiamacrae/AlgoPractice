const { expect } = require('chai');

/*
139. Word Break

LEETCODE MEDIUM

https://leetcode.com/problems/word-break/

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
*/
var wordBreak = function(s, wordDict) {
  const wordDictSet = new Set();
  const memo = {}

  for (let i = 0; i < wordDict.length; i++) {
      wordDictSet.add(wordDict[i])
  }

  return backTrack(s, wordDictSet, 0, memo)
};

function backTrack(s, wordDictSet, start, memo) {
  if (start === s.length) {
      return true
  }

  if(start in memo) {
      return memo[start]
  }

  for (let i = start; i < s.length; i++) {
      if(wordDictSet.has(s.substring(start, i + 1))) {
          const result = backTrack(s, wordDictSet, i + 1, memo)
          memo[start] = result
          if (result) {
              return true
          }
      }
  }

  return false
}

describe('wordBreak', () => {
  it('Test case 1', () => {
      expect(wordBreak("leetcode", ["leet", "code"])).to.equal(true);
  });
  it('Test case 2', () => {
      expect(wordBreak("applepenapple", ["apple", "pen"])).to.equal(true);
  });
  it('Test case 3', () => {
      expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).to.equal(false);
  });
});
