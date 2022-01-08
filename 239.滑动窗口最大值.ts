/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  let newArr = []
  function findMax(arr){
    newArr = arr.slice(0)
    let max = -Infinity
    for(let item of newArr){
      if(+item  > max){
        max = +item
      }
    }
    return max
  }

  let len = nums.length
  let left = 0, right = 0, result = []
  if (len === 1) {
    return nums
  }
  if (len <= k) {
    let res =  findMax(nums)
    return [res]
  }
  let max = -Infinity
  while (right < len) {
    // max = Math.max(max, nums[right])
    // console.log('right, left', right,left)
    right++
    // 左侧窗口缩进至窗口大小
    if (right - left >= k) {
      let res =findMax(nums.slice(left, right))
      // console.log(res)
      left++
      result.push(res)
      // max = -Infinity
    }else{
       max = Math.max(max, nums[right])
    }
    // console.log(result)
  }
  // console.log(result)

  return result 
};

"[9,11] \n 2"
// @lc code=end

