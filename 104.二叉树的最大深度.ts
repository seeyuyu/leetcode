/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
  let result = 0
  if (!root) return 0
  let queue = []
  queue.push(root)
  while (queue.length) {
    let curL = queue.length
    result++
    for (let i = 0; i < curL; i++) {
      let current = queue.shift()
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
  }
  return result
};
// @lc code=end

