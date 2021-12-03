/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

// bfs性能较差
// Your runtime beats 6.45 % of typescript submissions
// Your memory usage beats 82.8 % of typescript submissions (39.5 MB)
function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []
  let result = []
  let queue = [root]
  while (queue.length) {
    let curL = queue.length
    for (let i = 0; i < curL; i++) {
      let current = queue.shift()
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
      if (i === curL - 1) {
        result.push(current.val)
      }
    }
  }
  return result
};
// @lc code=end

