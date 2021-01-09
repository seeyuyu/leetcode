/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const arr = []
  preOrder(root, arr)
  // console.log('arr is ', arr)
  return arr
};

let preOrder = (root, arr) => {
  if (!root) {
    return null
  }
  arr.push(root.val)
  preOrder(root.left, arr)
  preOrder(root.right, arr)
}

// @lc code=end

