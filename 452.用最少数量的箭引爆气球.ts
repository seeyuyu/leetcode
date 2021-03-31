/*
 * @lc app=leetcode.cn id=452 lang=typescript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
// 贪心算法，先排序
function findMinArrowShots(points: number[][]): number {
  let len = points.length
  if (len === 0) return 0
  let newArr = points.sort((a, b) => a[1] - b[1])
  // console.log(newArr)
  let min = newArr[0][1]
  let count = 1

  for (let item of newArr) {
    // 当start>min时候，意味着无法重叠，需要加一箭，
    if (item[0] > min) {
      // console.log('item[1],min is',item[0],min)
      count++
      min = item[1]
    }
  }
  return count
};
// @lc code=end

