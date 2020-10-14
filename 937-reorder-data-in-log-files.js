const { expect } = require('chai');

/*
937. Reorder Data in Log Files

LEETCODE EASY

https://leetcode.com/problems/reorder-data-in-log-files/

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.
*/

var reorderLogFiles = function(logs) {

    return logs.sort((a,b) => {
      if(+a.slice(-1) == a.slice(-1) && +b.slice(-1) == b.slice(-1)){
        return 0
      }
  
      else if(+a.slice(-1) == a.slice(-1)){
        return 1
      }
  
      else if(+b.slice(-1) == b.slice(-1)){
        return -1
      }
      else{
        let tagA = a.split(' ')[0]
        let tagB = b.split(' ')[0]
        let strA = a.split(' ').slice(1).join(' ')
        let strB = b.split(' ').slice(1).join(' ')
        if(strB === strA){
          if(tagA < tagB){
            return -1
          }
          return 1
        }
        if(strA < strB){
          return -1
        }
        return  1
      }
    })
      
  };

describe('getModifiedArray', () => {
    it('Test case 1', () => {
        expect(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])).to.deep.equal(["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]);
    });
}); 