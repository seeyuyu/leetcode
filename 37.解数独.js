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

// const solveSudoku = (board) => {
//   const hasConflit = (r, c, val) => {
//     // 判断横竖，是否有相同的数，如果有直接说明碰撞
//     for (let i = 0; i < 9; i++) {
//       if (board[i][c] == val || board[r][i] == val) { 
//         return true 
//       }
//     }
//     // 拿到3*3的小坐标，遍历所在的小框，小框有3个起始点，0，3，6
//     const subRowStart = Math.floor(r / 3) * 3
//     const subColStart = Math.floor(c / 3) * 3
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         // 如果3*3有碰撞也不行
//         if (val == board[subRowStart + i][subColStart + j]) {
//           return true
//         }
//       }
//     }
//     // 没有发生冲突
//     return false
//   }

//   const fill = (i, j) => {
//     if (j == 9) {  // 当j==9 ,我们要换行了
//       i++;     
//       j = 0
//       if (i == 9) return true //如果填入了最后一个数，那么是成功了
//     }
//     if (board[i][j] != ".") return fill(i, j + 1) // 如果当前坐标不为空白，即有默认值，我们填入下一个坐标
//     // 判断哪一个数字可以填入，并且开始递归
//     for (let num = 1; num <= 9; num++) {
//       if (hasConflit(i, j, String(num))) continue //如果冲突了,我们就继续
//       board[i][j] = String(num) //如果不冲突，那就填入
//       if (fill(i, j + 1)) return true //如果下一个也可以success,那就成功
//       board[i][j] = '.' //回溯回来，填入空
//     }
//     return false
//   }
//   fill(0, 0)
//   return board
// };

/**
 * 需要同时满足，横列，纵列，3*3小方格，均没有重复项
 * @param {} board 
 */
const solveSudoku = (board) => {
  const rows = new Array(9)
  const cols = new Array(9)
  const blocks = new Array(9)
  let options = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set(options)
    cols[i] = new Set(options)
    blocks[i] = new Set(options)
  }
  //获取得3*3小框的坐标，
  const getBlockIndex = (i, j) => {
    return (i / 3 | 0) * 3 + j / 3 | 0
  }
  // 挨个遍历board中的value, 删除对应的横列，竖列，3*3小方块的value
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let curValue = board[i][j] //当前行出现的值

      if (curValue != ".") { //如果原来的board有值，那么该值不能继续出现在横列，竖列，3*3小方块
        rows[i].delete(curValue)
        cols[j].delete(curValue)
        blocks[getBlockIndex(i, j)].delete(curValue)
      }
    }
  }
  const fill = (i, j) => {
    // 控制横列，竖列的状态转移
    if (j == 9) {
      i++
      j = 0;
      if (i == 9) return true
    }
    // 如果当前有值，则下一个继续填入
    if (board[i][j] != ".") return fill(i, j + 1)
    // 如果当前没有值，则遍历看看，哪个可以填入 
    // 获取当前的3*3小方块的索引
    const blockIndex = getBlockIndex(i, j)
    // 试着挨个将1-9填入，当前value
    for (let num = 1; num <= 9; num++) {
      const s = String(num)
      // 如果该横列，竖列，3*3小方块有一个不能填入当前值，那么剪枝
      if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blockIndex].has(s)) continue
      // board 填入当前value, 同时横列，竖列，3*3小方格，删除这个value 
      board[i][j] = s
      rows[i].delete(s)
      cols[j].delete(s)
      blocks[blockIndex].delete(s)
      // 继续下一步，如果填写
      if (fill(i, j + 1)) return true
      // 如果不行，状态回溯，放弃刚才的选择，继续下一个循环
      board[i][j] = "."
      rows[i].add(s)
      cols[j].add(s)
      blocks[blockIndex].add(s)
    }
    return false
  }

  fill(0, 0);
  return board
}
// @lc code=end

