/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start

/**
 * 回溯法处理
 * @param nums 
 * @param target 
 * @returns 
 */
// function findTargetSumWays(nums: number[], target: number): number {
//   let result = 0
//   const n = nums.length
//   function backTrack(i, value) {
//     if (i === n) {
//       if (value === 0) { result += 1 }
//       return null
//     }
//     // 假设当前是+号，value像0靠拢
//     value -= nums[i]
//     backTrack(i + 1, value)
//     value += nums[i]
//     // 假设当前是-号码
//     value += nums[i]
//     backTrack(i + 1, value)
//     value -= nums[i]
//   }
//   backTrack(0, target)
//   return result
// };

// DFS
/**
 * 带备忘录的递归，也就是深度优先，时间复杂度提高了很多，但是空间复杂度降低了好些，牺牲了空间，换了时间
 * @param nums 
 * @param target 
 * @returns 
 */
// function findTargetSumWays(nums: number[], target: number): number {
//   const n = nums.length
//   const memo = new Map()
//   function dp(i, target) {
//     if (i === n) {
//       if (target === 0) return 1
//       return 0
//     }
//     let key = `${i},${target}`
//     if (memo.has(key)) return memo.get(key)
//     const result = dp(i + 1, target - nums[i]) + dp(i + 1, target + nums[i])
//     memo.set(key, result)
//     // console.log(memo)
//     return result
//   }
//   return dp(0, target)
// }

// 不带备忘录的DFS，空间复杂度降低很多，时间复杂度提高
function findTargetSumWays(nums: number[], target: number): number {
  const n = nums.length
  function dp(i, target) {
    if (i === n) {
      if (target === 0) return 1
      return 0
    }
    const result = dp(i + 1, target - nums[i]) + dp(i + 1, target + nums[i])
    // console.log(memo)
    return result
  }
  return dp(0, target)
}

// "[1,1,1,1,1] \n 3"
// @lc code=end

