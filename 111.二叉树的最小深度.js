/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// 递归，dfs
var minDepth = function(root) {
  if(!root){
    return 0
  }
  if(!root.left&&!root.right){
    return 1
  }
  let min = Math.pow(10,5)
  if(root.left){
    min = Math.min(min, minDepth(root.left))
  }
  if(root.right){
    min = Math.min(min, minDepth(root.right))
  }
  console.log(min)
 return min+1
};

// @lc code=end

