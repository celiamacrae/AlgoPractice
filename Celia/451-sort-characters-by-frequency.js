const { expect } = require('chai');

/*
451. Sort Characters By Frequency

LEETCODE MEDIUM

https://leetcode.com/problems/sort-characters-by-frequency/

Given a string, sort it in decreasing order based on the frequency of characters.
*/

var frequencySort = function(s) {
    let max = 0
    let ht = {}
    let newStr = ''
    
    for(let i=0; i<s.length; i++){
        if(! ht.hasOwnProperty(s[i])){
            ht[s[i]] = 0
        }
        ht[s[i]] ++
        
    }
    
    let letters = Object.keys(ht).sort((a ,b) => ht[b] - ht[a])
    
    for(let i=0; i<letters.length; i++){
        newStr += letters[i].repeat(ht[letters[i]]) 
    }
    
    return newStr
};

describe('frequencySort', () => {
    it('Test case 1', () => {
        expect(frequencySort("tree")).to.equal("eetr");
    });
    it('Test case 2', () => {
        expect(frequencySort("cccaaa")).to.equal("cccaaa");
    });
    it('Test case 3', () => {
        expect(frequencySort("Aabb")).to.equal("bbAa");
    });
}); 