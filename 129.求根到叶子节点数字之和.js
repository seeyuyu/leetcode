/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 */

const { root } = require("postcss");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var sumNumbers = function (root) {
//   if (!root) {
//     return null
//   }
//   let queue = [root]
//   let arr = [String(root.val)]
//   let result = 0
//   while (queue.length > 0) {
//     let current = queue.shift()
//     let currentValue = arr.shift()
//     if (!current.left && !current.right) {
//       result = result+ +currentValue
//     }
//     if (current.left) {
//       queue.push(current.left)
//       arr.push(currentValue + current.left.val)
//     }
//     if (current.right) {
//       queue.push(current.right)
//       arr.push(currentValue + current.right.val)
//     }
//   }
//   return result
// };

/**
 * 深度优先算法
 * @param {} root 
 */
var sumNumbers = function (root) {
  if (!root) {
    return null
  }
  let result = [0]
  preOrder(root, '', result)
  return result[0]
};
function preOrder(root, sum, result) {
  if (!root) {
    return null
  }
  sum = sum + root.val
  if (!root.left && !root.right) {
    // console.log(' sum is',sum)
    result[0] = result[0] + +sum
  }
  // console.log(' sum is',sum)
  preOrder(root.left, sum, result)
  preOrder(root.right, sum, result)
}
// @lc code=end

