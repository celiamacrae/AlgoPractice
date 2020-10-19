const { expect } = require('chai');

/*
1338. Reduce Array Size to The Half

LEETCODE MEDIUM

https://leetcode.com/problems/reduce-array-size-to-the-half/

Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

Return the minimum size of the set so that at least half of the integers of the array are removed.
*/

var minSetSize = function(arr) {
    let ht = {}
    
    for(let i=0; i<arr.length; i++){
        if(ht.hasOwnProperty(arr[i])){
            ht[arr[i]] += 1
        }else{
            ht[arr[i]] =1
        }
    }
    
    let nums = Object.values(ht).sort((a,b) => b-a)
    
    let totalSub = 0
    let ptr = 0
    
    while(totalSub < arr.length/2){
        totalSub += nums[ptr]
        ptr ++   
    }
    
    return ptr 
};

describe('minSetSize', () => {
    it('Test case 1', () => {
        expect(minSetSize([3,3,3,3,5,5,5,2,2,7])).to.equal(2);
    });
    it('Test case 2', () => {
        expect(minSetSize([7,7,7,7,7,7])).to.equal(1);
    });
    it('Test case 3', () => {
        expect(minSetSize([1,9])).to.equal(1);
    });
    it('Test case 4', () => {
        expect(minSetSize([1000,1000,3,7])).to.equal(1);
    });
}); 