/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let result = []
  let length = nums.length
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < length - 2; j++) {
      if (nums[j] === nums[j - 1] && j > i + 1) continue
      let L = j + 1, R = length - 1
      while (L < R) {
        let sum = nums[i] + nums[j] + nums[L] + nums[R]
        if (sum === target) {
          // console.log('i,j,LL,R is', i, j, L, R)
          result.push([nums[i], nums[j], nums[L], nums[R]])
          while (nums[L] === nums[L + 1]) {
            L++
          }
          while (nums[R] === nums[R - 1]) {
            R--
          }
          L++;
          R--;
        } else if (sum > target) {
          R--;
        } else {
          L++
        }
      }
    }

  }
  // console.log('result is ', result)
  return result
};
// @lc code=end

