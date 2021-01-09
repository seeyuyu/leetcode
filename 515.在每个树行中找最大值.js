/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
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
    let average  = getMax(arr)
    result.push(average)
  }
  return result   
};
let getMax = (arr)=>{
  let length = arr.length
  if(length ===1){
    return arr[0]
  }else{
    let max = arr[0]
    for(let i = 1;i<length;i++){
      if(arr[i]>max){
        max = arr[i]
      }
    }
    return max
  }
}
// @lc code=end

