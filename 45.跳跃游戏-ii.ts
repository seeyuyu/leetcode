/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
// function jump(nums: number[]): number {
//   // 选择和状态，选择是某一个下标，向前跳几部，状态是到达i个下标，需要最短的路程
//   // dp[i]表示到达i位置，需要几步
//   const len = nums.length
//   let dp = new Array(len).fill(0)

//   for (let i = 1; i < len; i++) {
//     // 拿出当前下标可以取得步数，然后一个一个尝试
//     let value = nums[i]
//     for (let j = 1; j <= value; j++) {
//       // 当前要求的下标，肯定大于等于j,  j+ dp[i-j] = dp[i]
//       if (i >= j) {
//         console.log('i j is', i, j)
//         dp[i] = Math.min(i, 1 + dp[i - j],)
//       }
//     }
//     console.log(`dp[${i}] is`, dp[i])
//   }
//   console.log(dp)
//   return dp[len - 1]
// };
// 贪心算法
function jump(nums: number[]): number {
  let end = 0, jumps = 0, farthest = 0, len = nums.length
  if (len <= 1) return 0
  // 为何不是 0到 len-1， 因为退出条件为到了len-1项的数字无任何意义，只要到达前一位即可，当end>i时候，本次跳跃自然可以到达这个值，
  // 当end===i时候，说明正好跳到了前一位，jumps顺势++即可
  for (let i = 0; i < len - 1; i++) {
    // 当前i，最远能跳到的距离保存
    farthest = Math.max(farthest, i + nums[i])
    // end记录当前第jumps步，最远可以跳到的距离，当跳到这个极限值的时候，也就是i===end了，期间记录farthest，看看这个阶段，最远能跳哪里
    // 算一下jumps+1 步可以跳到极限的距离，并且更新end,当前i到end就是jumps+1步的跳跃范围，然后更新farthest值
    if (end === i) {
      jumps++;
      end = farthest
      // console.log('jumps, end, farthest is', jumps, end, farthest)
    }
  }
  return jumps
}
// "[2,1]"
// "[1,2,1,1,1]"
// "[3,1,4,2,1,1,1,1]"

// @lc code=end

