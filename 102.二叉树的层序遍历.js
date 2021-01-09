/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  if(!root){
    return []
  }
  const result = []
  const queue = []
  queue.push(root)
  while(queue.length){
    const currentLength = queue.length
    const currentArr = []
    for(let i =0;i<currentLength;i++){
      const currentItem = queue.shift()
      currentArr.push(currentItem.val)
      if(currentItem.left){
        queue.push(currentItem.left)
      }
      if(currentItem.right){
        queue.push(currentItem.right)
      }
    }
    result.push(currentArr)
  }
  return result
};
// @lc code=end

