/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

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
 * @return {number[][]}
 */
// var zigzagLevelOrder = function (root) {
//   if (!root) {
//     return []
//   }
//   let queue = []
//   let result = []
//   queue.push(root)
//   while (queue.length > 0) {
//     let length = queue.length
//     let arr = []

//     for (let i = 0; i < length; i++) {
//       let current = queue.shift()
//       arr.push(current.val)
//       if (current.left) {
//         queue.push(current.left)
//       }
//       if (current.right) {
//         queue.push(current.right)
//       }
//     }
//     if (result.length % 2 !== 0) {
//       arr.reverse()
//       result.push(arr)
//       // console.log('42 is ',arr)
//     } else {
//       result.push(arr)
//     }
//   }
//   return result
// };

// @lc code=end

