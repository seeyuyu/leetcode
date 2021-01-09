/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
/**
 * 把复杂问题分解为简单问题，1、先先序获取顺序，2、根据这个顺序，拼出一个二叉树
 * @param {} root 
 */
var flatten = function (root) {
  if(!root){
    return null
  }
  let arr = []
  preOrder(root,arr)
  // console.log('arr is',arr)
  arr.forEach((item,index)=>{
    item.left = null
    item.right = arr[index +1] ||null
  })
};
function preOrder(root, arr) {
  if(!root){
    return null
  }
  arr.push(root)
  preOrder(root.left, arr)
  preOrder(root.right, arr)

}

// @lc code=end

