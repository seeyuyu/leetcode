/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// DFS
//  108/108 cases passed (92 ms)
//  Your runtime beats 10.84 % of typescript submissions
//  Your memory usage beats 97.59 % of typescript submissions (39.3 MB)
// function sumNumbers(root: TreeNode | null): number {
//   let result = 0
//   function preOrder(root, sum) {
//     if (!root) return null
//     if (!root.left && !root.right) {
//       result += +sum
//       return
//     }
//     root.left && preOrder(root.left, sum + String(root.left.val))
//     root.right && preOrder(root.right, sum + String(root.right.val))
//   }
//   preOrder(root, root.val)
//   console.log(result)
//   return result
// };


// 没想到bfs新能比dfs强好多
// 108/108 cases passed (76 ms)
// Your runtime beats 72.29 % of typescript submissions
// Your memory usage beats 100 % of typescript submissions (39.1 MB)
function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0
  let result = 0
  let queue = [{ current: root, value: root.val }]
  while (queue.length) {
    let curL = queue.length
    for (let i = 0; i < curL; i++) {
      let { current, value } = queue.shift()
      // console.log('current,value is', current, value)
      if (!current.left && !current.right) {
        result += +value
      }
      // console.log(current.left.val)
      // current.left && queue.push([current.left, value + String(current.left.val)])
      // current.right && queue.push([current.right, value + String(current.right.val)])
      current.left && queue.push({ current: current.left, value:+ (value + String(current.left.val)) })
      current.right && queue.push({ current: current.right, value:+ (value + String(current.right.val)) })
    }
  }
  // console.log(result)
  return result
}
// @lc code=end

