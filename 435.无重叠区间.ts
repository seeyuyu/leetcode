/*
 * @lc app=leetcode.cn id=435 lang=typescript
 *
 * [435] 无重叠区间
 */

// @lc code=start
function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length == 0) return 0
  let newArr = intervals.sort((a, b) => a[1] - b[1])

  // console.log(newArr)
  let min = newArr[0][1]
  let count = 1
  for (let item of newArr) {
    // 如果min的start >= min
    if (item[0] >= min) {
      count++;
      min = item[1]
    }
  }
  // console.log(count)
  return newArr.length - count
};
// "[[1,2],[2,4],[2,3]]"
// @lc code=end

