/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const solveSudoku = (board) => {
  const hasConflit = (r, c, val) => {
    for (let i = 0; i < 9; i++) {
      if (board[i][c] == val || board[r][i] == val) {
        return true
      }
    }
    const subRowStart = Math.floor(r / 3) * 3
    const subColStart = Math.floor(c / 3) * 3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (val == board[subRowStart + i][subColStart + j]) {
          return true
        }
      }
    }
    return false
  }

  const fill = (i, j) => {
    if (j == 9) {
      i++;
      j = 0
      if (i == 9) return true
    }
    if (board[i][j] != ".") return fill(i, j + 1)

    for (let num = 1; num <= 9; num++) {
      if (hasConflit(i, j, String(num))) continue
      board[i][j] = String(num)
      if (fill(i, j + 1)) return true
      board[i][j] = '.'
    }
    return false
  }
  fill(0, 0)
  return board
};
// @lc code=end

