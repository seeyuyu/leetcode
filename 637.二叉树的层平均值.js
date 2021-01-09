/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
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
    let average  = getAverage(arr)
    result.push(average)
  }
  return result
};
let getAverage = (arr)=>{
  let length = arr.length
  if(length ===1){
    return arr[0]
  }else{
    let sum = arr.reduce((item,sum)=>{
      return sum + item
    },0)
    return sum/length
  }
}
// @lc code=end

