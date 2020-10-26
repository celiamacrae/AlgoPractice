const { expect } = require('chai');

/*
336. Palindrome Pairs

LEETCODE HARD

https://leetcode.com/problems/palindrome-pairs/

Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list, so that the concatenation of the two words words[i] + words[j] is a palindrome.
*/

var palindromePairs = function(words) {
    let output = []
    
    for(let i=0; i<words.length -1; i++){
        for(let j=i+1; j<words.length; j++){
            if(isPal(words[i], words[j])){
                output.push([i, j])
            }
            if(isPal(words[j], words[i])){
                output.push([j, i])
            }
        }
    }
    return output
};

function isPal(s1, s2){
    let word = s1 + s2
    for(let i=0; i< word.length /2 ; i++){
        if(word[i] != word[word.length -1 -i]){
            return false
        }
    }
    return true
}

describe('minFallingPathSum', () => {
    it('Test case 1', () => {
        expect(palindromePairs(["abcd","dcba","lls","s","sssll"])).to.deep.equal([[0,1],[1,0],[3,2],[2,4]]);
    });
    it('Test case 2', () => {
        expect(palindromePairs(["bat","tab","cat"])).to.deep.equal([[0,1],[1,0]]);
    });
    it('Test case 3', () => {
        expect(palindromePairs(["a",""])).to.deep.equal([[0,1],[1,0]]);
    });
}); 