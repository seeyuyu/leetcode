/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let board = Array(n).fill(Array(n).fill(0))
  let rows = Array(n).fill(false) //横列 [false,false,false,false,……]
  let cols = Array(n).fill(false) //竖列 [false,false,false,false,……]
  let result = []
  let total = 0
  // 如果发生斜线相同，那就返回true,撞车了
  const judgeXie = (i, j) => {
    // console.log('开始判断斜率了 total is', total++)
    for (let k = i; k > 0; k--) {
      if (board[k][j++] === 1 || board[k][j--] === 1) return true
    }
    for (let k = i; k < n; k++) {
      if (board[k][j++] === 1 || board[k][j--] === 1) {
        return true
      }
    }
    return false
  }
  const fill = (i, lasted) => {
    console.log('total is', total++)
    if (i === n && lasted === 0) {
      // 到底说明搞定一个，result自动加一
      result.push([].concat(board))
      return true
    }
    // if (j == n) {
    //   i++;
    //   j = 0
    //   if (i == n) {
    //     // 到此处说明 n*n 遍历完成，但是还有lasted，那就说明没放完成
    //     return false
    //   }
    // }
    if (i === n) {
      return false
    }
    // 遍历当前一行元素
    for (let k = 0; k < n; k++) {
      // console.log('i, k is', i, k)
      // 如果当前行和当前列已经有value,则不能填入
      if (rows[i] || cols[k] || judgeXie(i, k)) continue
      // 如果可以继续填入
      board[i][k] = 1
      rows[i] = true
      cols[k] = true
      
      // 填入之后，我们开始下一行的填写，i+1,从左侧0开始尝试填写
      fill(i + 1, lasted - 1)

      board[i][k] = 0
      rows[i] = false
      cols[k] = false
    }
    return false
  }
  fill(0, n)
  console.log('result is', result)
  return result.length
};
// totalNQueens(4)
// @lc code=end

