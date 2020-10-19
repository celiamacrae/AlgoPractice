const { expect } = require('chai');

/*
911. Online Election

LEETCODE MEDIUM

https://leetcode.com/problems/online-election/

In an election, the i-th vote was cast for persons[i] at time times[i].

Now, we would like to implement the following query function: TopVotedCandidate.q(int t) will return the number of the person that was leading the election at time t.  

Votes cast at time t will count towards our query.  In the case of a tie, the most recent vote (among tied candidates) wins.
*/

var TopVotedCandidate = function(persons, times) {
    this.persons = persons
    this.times = times
  
    let totalVotes = {}
    let maxCandidate = persons[0]
    let maxVotes = 1
  
    for(let i=0; i<persons.length;i++){
      if(totalVotes.hasOwnProperty(persons[i])){
        totalVotes[persons[i]] +=1
      }else{
        totalVotes[persons[i]] = 1
      }
  
      if(totalVotes[persons[i]] >= maxVotes){
        maxVotes = totalVotes[persons[i]]
        maxCandidate = persons[i]
      }
  
      this.persons[i] = maxCandidate
    }
  }
  
TopVotedCandidate.prototype.q = function(t) {
    let left = 0
    let right = this.times.length

    while(left < right){
        let mid = left + Math.floor((right-left)/2)

        if(t >= this.times[mid]){
        left = mid +1
        }else{
        right = mid
        }
    }
    return this.persons[right -1]
}

