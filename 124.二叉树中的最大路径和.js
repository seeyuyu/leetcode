/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let res = -Infinity
  // 后续遍历，当遍历完left,right才开始处理当前值
  function getMax(root) {
    if (!root) {
      return 0
    }
    let left = Math.max(0, getMax(root.left))
    let right = Math.max(0, getMax(root.right))
    res = Math.max(res, left + right + root.val)
    return root.val + Math.max(left, right) 
  }
  getMax(root)
  return res
};
// @lc code=end

