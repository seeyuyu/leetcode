/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
// 设计dp[i] 表示从i房间索引开始到最后一位可以拿到的钱
function rob(nums: number[]): number {
  if(nums.length===1)return nums[0]
  let nums1 = [...nums]
  let nums2= [...nums]
  nums1.pop()
  nums2.shift()
  return Math.max(loop(nums1), loop(nums2))
};
function loop(nums) {
  const n = nums.length
  // console.log('nums is', nums, n)
  // 此处n+2是为了，for循环中少处理几个特殊节点，加入虚拟节点
  let dp = new Array(n + 2).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    // 第i个索引拿钱，意味着i+1个索引没有拿钱，或者i+2个索引拿钱了。
    dp[i] = Math.max(dp[i + 1], dp[i + 2] + nums[i])
  }
  // console.log(dp)
  return dp[0]
}
// "[0]"
// "[1]"
// "[1,2,3,1]"
// @lc code=end

