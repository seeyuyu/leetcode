/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board[0].length //横 几列
  let n = board.length    //竖 几行
  let length = word.length
  let used = new Array(n).fill([])
  used = used.map(() => { return new Array(m).fill(false) })
  // console.log('used is ', used)
  // row 为行，col为列
  function dfs(row, col, index) {
    if (index === length) { // 递归条件success
      return true
    }
    if (row >= n || row < 0 || col < 0 || col >= m) { // 越界情况，直接判false
      return false
    }
    // 当前元素被用过了，或者当前元素board[row][col] !== 期望值（word[index]）
    if (used[row][col] || board[row][col] != word[index]) {
      return false
    }
    used[row][col] = true
    let result = dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1)
    if (result) {
      return true
    }
    used[row][col] = false
    return false
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === word[0] && dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false
};
// @lc code=end

