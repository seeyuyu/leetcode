/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  let len = nums.length
  let left = 0, right = 0, result = []
  if (len === 1) {
    return nums
  }
  if (len <= k) {
    let arr = nums.sort((a, b) => b - a)
    console.log('arr is',arr)
    return [arr[0]]
  }
  let max = -Infinity
  while (right < len) {
    // max = Math.max(max, nums[right])
    // console.log('right, left', right,left)
    right++
    // 左侧窗口缩进至窗口大小
    if (right - left >= k) {
      let arr = nums.slice(left, right).sort((a, b) => b - a)
      console.log(arr)
      left++
      result.push(arr[0])
      // max = -Infinity
    }else{
       max = Math.max(max, nums[right])
    }
    console.log(result)
  }
  console.log(result)

  return result 
};

"[9,11] \n 2"
// @lc code=end

