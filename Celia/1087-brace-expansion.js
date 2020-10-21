const { expect } = require('chai');

/*
1087. Brace Expansion

LEETCODE MEDIUM

https://leetcode.com/problems/brace-expansion/

A string S represents a list of words.

Each letter in the word has 1 or more options.  If there is one option, the letter is represented as is.  If there is more than one option, then curly braces delimit the options.  For example, "{a,b,c}" represents options ["a", "b", "c"].

For example, "{a,b,c}d{e,f}" represents the list ["ade", "adf", "bde", "bdf", "cde", "cdf"].

Return all words that can be formed in this manner, in lexicographical order.
*/

var expand = function(S) {

}

describe('expand', () => {
    it('Test case 1', () => {
        expect(expand("{a,b}c{d,e}f")).to.deep.equal(["acdf","acef","bcdf","bcef"]);
    });
    it('Test case 2', () => {
        expect(expand("abcd")).to.deep.equal(["abcd"]);
    });
}); 