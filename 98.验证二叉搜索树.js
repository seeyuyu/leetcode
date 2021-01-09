/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
/**
 * 递归把大问题拆解为小问题，1、所有左节点都小于root,所有右节点都大于root，从上到下，依次判断，
 */
// var isValidBST = function (root) {
//   return helper(root, -Infinity, Infinity)
// };

// function helper(root, lower, upper) {
//   if (!root) {
//     return true
//   }
//   let value = root.val
//   if (value <= lower || value >= upper) {
//     return false
//   }
//   return helper(root.left, lower, value) && helper(root.right, value, upper)
// }

/**
 * 暴力法：中序遍历一遍，生成一个arr,检测数组是否不符合升序
 * @param {*} root
 */
// var isValidBST = function (root) {
//   if (!root) { return true }
//   let arr = []
//   inOrder(root, arr)
//   let value = arr.filter(item=>{return item === null})
//   console.log('value is',value)
//   return value.length===0
// };

// function inOrder(root, arr) {
//   if (!root) { return true }
//   inOrder(root.left, arr)
//   // 如果当前小于arr的最后一项，那么不是递增，为false
//   if (root.val <= arr[arr.length - 1]) {
//     arr.push(null)
//     return false
//   } else {
//     arr.push(root.val)
//   }
//   console.log('47 is ', arr)
//   inOrder(root.right, arr)
//   return arr
// }

// @lc code=end

//  [5,1,4,null,null,3,6]  [24,-60,null,-60,-6]   [5,14,null,1]