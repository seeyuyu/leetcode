/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */

/**
 * 先序遍历，arr,因为被很多人公用，所有capy一份代码，这样子就能保证每次的arr不被他人污染
 * @param {*} root 
 * @param {*} sum 
 */

// var pathSum = function (root, sum) {
//   let arr = []
//   let result = []
//   preOrder(root, sum, arr, result)
//   return result
// };
// function preOrder(root, sum, arr, result) {
//   if (!root) {
//     return null
//   }

//   let subArr = [].concat(arr)
//   subArr.push(root.val)
//   if (!root.left && !root.right && sum === root.val) {
//     result.push(subArr)
//     return
//   }

//   sum -= root.val
//   preOrder(root.left, sum, subArr, result)
//   preOrder(root.right, sum, subArr, result)
// }


/**
 * 广度优先，需要维护二个队列，一个放元素，一个放路径详情(路径和可以靠此遍历出来)
 */
var pathSum = function (root, sum) {
  if (!root) {
    return []
  }
  let queue = [root]            //维护每层节点的队列
  let resultArr = [[root.val]]  //维护每层total和的具体数据列表
  let returnArr = []
  while (queue.length > 0) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      let current = queue.shift()
      let result = resultArr.shift()
      let total = result.reduce((item, sum) => { return item + sum }, 0)
      if (!current.left && !current.right && total === sum) {
        returnArr.push(result)
      }
      if (current.left) {
        queue.push(current.left)
        let leftResult = [].concat(result)
        leftResult.push(current.left.val)
        resultArr.push(leftResult)
      }
      if (current.right) {
        queue.push(current.right)
        let rightResult = [].concat(result)
        rightResult.push(current.right.val)
        resultArr.push(rightResult)
      }
    }
  }
  return returnArr 
};

// @lc code=end

