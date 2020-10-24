const { expect } = require('chai');

/*
451. Sort Characters By Frequency

LEETCODE MEDIUM

https://leetcode.com/problems/sort-characters-by-frequency/

Given a string, sort it in decreasing order based on the frequency of characters.
*/

var frequencySort = function(s) {

}

describe('frequencySort', () => {
    it('Test case 1', () => {
        expect(frequencySort("tree")).to.equal("eert");
    });
    it('Test case 2', () => {
        expect(frequencySort("cccaaa")).to.equal("cccaaa");
    });
    it('Test case 3', () => {
        expect(frequencySort("Aabb")).to.equal("bbAa");
    });
}); 