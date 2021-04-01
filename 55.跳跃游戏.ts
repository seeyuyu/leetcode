/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let len = nums.length
  // max为当前可以跳的最远距离
  // 当为一个元素的时候，最后一个下标，就是出发点，value无意义
  if (len === 1) return true
  let max = 0
  // 这里不需要到len,只需要到len-1即可，因为对比的是下标，不是下标的value,最后一个下标的value其实是无意义的，
  // 问题是，我们能不能到达最后一个下标，不用比较最后一个值
  for (let i = 0; i < len - 1; i++) {
    max = Math.max(max, i + nums[i])
    // console.log(' max i is', max, i)
    if (max < i + 1) return false
  }
  return true
};
// "[0]"
// "[0,1]"
// "[3,2,1,0,4]"
// "[3,2,2,0,4]"
// "[2,0,0]"
// @lc code=end

