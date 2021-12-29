/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start

// Your runtime beats 35.9 % of typescript submissions
// Your memory usage beats 14.81 % of typescript submissions (50 MB)
function threeSum(nums: number[]): number[][] {
  let newArr = nums.sort((a, b) => a - b)
  console.log(newArr)
  let result = []
  // let hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    // 如果当前值大于0，后面的值只会更大，不用继续遍历
    if (nums[i] > 0) break;
    // 如果有相同的值，跳过本次循环
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    
    let L = i + 1, R = nums.length - 1

    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] == nums[L + 1]) L++;
        while (L < R && nums[R] == nums[R - 1]) R--;
        L++
        R--
      } else if (sum > 0) {
        R--
      } else {
        L++
      }
    }
  }

  return result
};
// @lc code=end

