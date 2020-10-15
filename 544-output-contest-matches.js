const { expect } = require('chai');

/*
544. Output Contest Matches

LEETCODE MEDIUM

https://leetcode.com/problems/output-contest-matches/


During the NBA playoffs, we always arrange the rather strong team to play with the rather weak team, like make the rank 1 team play with the rank nth team, which is a good strategy to make the contest more interesting. Now, you're given n teams, you need to output their final contest matches in the form of a string.

The n teams are given in the form of positive integers from 1 to n, which represents their initial rank. (Rank 1 is the strongest team and Rank n is the weakest team.) We'll use parentheses('(', ')') and commas(',') to represent the contest team pairing - parentheses('(' , ')') for pairing and commas(',') for partition. During the pairing process in each round, you always need to follow the strategy of making the rather strong one pair with the rather weak one.
*/

var findContestMatch = function(n) {
    let pairs = []
    for(let i=1; i<=n/2; i++){
        let top = i
        let bottom = n - i + 1
        pairs.push(`(${top},${bottom})`)
    }
    if(pairs.length === 1){
        return pairs[0]
    }
    return generateOutput(pairs)
};

function generateOutput(pairs){
    if(pairs.length === 2){
        return `(${pairs[0]},${pairs[1]})`
    }
    else{
        let newPairs =[]
        for(let i=0; i<=pairs.length/2 -1; i++){
            let first = pairs[i]
            let second = pairs[pairs.length -1-i]
            newPairs.push(`(${first},${second})`)
        }
        return generateOutput(newPairs)   
    }
}

describe('findContestMatch', () => {
    it('Test case 1', () => {
        expect(findContestMatch(4)).to.equal("((1,4),(2,3))");
    });
    it('Test case 2', () => {
        expect(findContestMatch(2)).to.equal("(1,2)");
    });
    it('Test case 3', () => {
        expect(findContestMatch(8)).to.equal("(((1,8),(4,5)),((2,7),(3,6)))");
    });
}); 