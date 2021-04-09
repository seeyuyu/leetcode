/*
 * @lc app=leetcode.cn id=887 lang=typescript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
// k是鸡蛋，n是楼层
// 状态时当前问题的变量，k,和n都是变量，是否在某一层丢鸡蛋是选择
// function superEggDrop(k: number, n: number): number {
//   // const table = new Array(k).fill(0).map(() => new Array(n + 1).fill(0))
//   let memo = {}
//   function dp(k, n) {
//     if (k === 1) return n
//     if (n === 0) return 0
//     let key = `${k},${n}`
//     if (memo[key]) return memo[key]
//     let res = Infinity
//     // i代表着从第i层扔鸡蛋，相当于穷举
//     // 如果鸡蛋碎了，那么0到i-1,继续寻找不碎的楼层，如果鸡蛋没有碎，则鸡蛋从i+1到n层开始寻找
//     for (let i = 1; i <= n; i++) {
//       res = Math.min(res, 1 + Math.max(
//         dp(k - 1, i - 1), dp(k, n - i)
//       ))
//     }
//     memo[key] = res
//     return res
//   }
//   return dp(k, n)
// };
// 二分法 前提，上文dp(k,n)是，鸡蛋固定，楼层越高，需要测试的数量越高，
// 当i增加，dp(k-1,i-1)中的楼层i-1在变大，单调递增
// 当i增加，dp(k-1.n-i)中的楼层n-i在变小，单调递减
// 上面两个函数必有交叉点，
// 如果说dp(k-1,i-1),dp(k,n-i)是两个函数，那么max(fn)也是个函数，
// 然后求这个max(fn)的最小值，最小值就是它们的交叉点
function superEggDrop(k: number, n: number): number {
  let memo = {}
  // dp(k,n) 定义为；有k个鸡蛋，n层楼，最少需要扔几次
  function dp(k, n) {
    if (k === 1) return n
    if (n === 0) return 0
    let key = `${k},${n}`
    if (memo[key]) return memo[key]
    let res = Infinity
    // i代表着从第i层扔鸡蛋，相当于穷举
    // 如果鸡蛋碎了，那么0到i-1,继续寻找不碎的楼层，如果鸡蛋没有碎，则鸡蛋从i+1到n层开始寻找
    let left = 1, right = n
    while (left <= right) {
      // let mid = Math.floor(left+(right-left)/2)
      let mid = Math.floor((right+left)/2)
      // 碎鸡蛋，鸡蛋减一， mid递增导致，楼层变高，单调递增，value变大
      const breakEgg = dp(k - 1, mid - 1) 
      // 鸡蛋没碎，鸡蛋不变，mid递增会导致n-mid减小，单调递减，value变小
      const noBreak = dp(k, n - mid)
      if(breakEgg >noBreak){
        right = mid-1
        res = Math.min(res, breakEgg+1)
      }else{
        left = mid +1
        res = Math.min(res, noBreak+1)
      }
    }
    memo[key] = res
    return res
  }
  return dp(k, n)
};

// "2 \n 3 "
// "4 \n 30 "

// "4 \n 5000 "
// "4 \n 1000 "

// @lc code=end

