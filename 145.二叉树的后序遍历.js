/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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

var postorderTraversal = function (root) {
  const arr = []
  postOrder(root, arr)
  // console.log('arr is ', arr)
  return arr
};

let postOrder = (root, arr) => {
  if (!root) {
    return null
  }
  postOrder(root.left, arr)
  postOrder(root.right, arr)
  arr.push(root.val)

}


// @lc code=end

