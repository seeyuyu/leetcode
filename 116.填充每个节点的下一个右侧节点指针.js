/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root){
    return null
  }
  const queue = []
  queue.push(root)
  while(queue.length){
    const arr = []
    const curL = queue.length
    for(let i=0;i<curL;i++){
      const curI = queue.shift()
      arr.push(curI)
      if(curI.left){
        queue.push(curI.left)
      }
      if(curI.right){
        queue.push(curI.right)
      }
    }
    // console.log('arr is ',arr)
    for(let i=0;i<curL-1;i++){
      arr[i].next = arr[i+1]
      // console.log('arr[i] is ',arr[i])

    }
    // arr[curL-1].next = null
  }
  return root
};
// @lc code=end

