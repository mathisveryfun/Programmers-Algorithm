// https://leetcode.com/problems/number-of-good-pairs/


/* 
내 답 : 
 var numIdenticalPairs = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
          if (nums[i] === nums[j] && i < j) {
              count++
          }
      }
  }
  return count
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
*/

/* 
좋은 풀이 :

*/