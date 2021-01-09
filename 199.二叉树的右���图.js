/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const result =[]
  if(!root){
    return result
  }
  const queue = []
  queue.push(root)
  while(queue.length){
    const curL = queue.length
    const arr = []
    for(let i=0;i<curL;i++){
      const curI = queue.shift()
      arr.push(curI.val)
      if(curI.left){
        queue.push(curI.left)
      }
      if(curI.right){
        queue.push(curI.right)
      }
    }
    result.push(arr.pop())
  }
  return result
};
// @lc code=end

