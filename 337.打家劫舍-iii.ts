/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
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
let memo = new Map()
function rob(root: TreeNode | null): number {
  if (!root) return 0
  if (memo.has(root)) return memo.get(root)
  let a = root.val +
    (root.left ? rob(root.left.left) + rob(root.left.right) : 0) +
    (root.right ? rob(root.right.left) + rob(root.right.right) : 0)
  let b = rob(root.left) + rob(root.right)
  // 一层隔一层来计算
  let max = Math.max(a, b)
  memo.set(root, max)
  return max
};
// 设计loop可以返回以root为底，最多抢的钱

// "[3,4,5,1,3,null,1]"
// "[1]"
// "[1,2]"
// "[0]"
// @lc code=end

