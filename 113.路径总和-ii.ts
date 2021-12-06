/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

//  115/115 cases passed (100 ms)
//  Your runtime beats 20.37 % of typescript submissions
//  Your memory usage beats 39.82 % of typescript submissions (44.8 MB)
// function pathSum(root: TreeNode | null, targetSum: number): number[][] {
//   return BFS(root, targetSum)
//   // return [[5,4,11,2],[5,8,4,5]]
// };

// function BFS(root, targetSum) {
//   let result:number[][] = []
//   if (!root) return result
//   let queue = [[root, targetSum, [root.val]]]
//   while (queue.length) {
//     let curL = queue.length
//     for (let i = 0; i < curL; i++) {
//       let [current, num, arr] = queue.shift()
//       if (!current.left && !current.right && num === current.val) {
//         result.push(arr)
//       }
//       if (current.left) {
//         queue.push([current.left, num - current.val, [...arr, current.left.val]])
//       }
//       if (current.right) {
//         queue.push([current.right, num - current.val, [...arr, current.right.val]])
//       }
//     }
//   }
//   // console.log(result)
//   return result
// }


// 115/115 cases passed (96 ms)
// Your runtime beats 35.19 % of typescript submissions
// Your memory usage beats 5.56 % of typescript submissions (48.9 MB)
// function pathSum(root: TreeNode | null, targetSum: number): number[][] {
//   let result = []
//   function preOrder(root, targetSum, arr) {
//     if (!root) return
//     arr.push(root.val)
//     if (targetSum === root.val && !root.left && !root.right) {
//       result.push([...arr])
//     }
//     let val = root.val
//     root.left && preOrder(root.left, targetSum - val, [...arr])
//     root.right && preOrder(root.right, targetSum - val, [...arr])
//   }
//   preOrder(root, targetSum, [])
//   return result
// };


// 回溯，处理arr过多的问题
// 115/115 cases passed (88 ms)
// Your runtime beats 69.44 % of typescript submissions
// Your memory usage beats 64.82 % of typescript submissions (42.2 MB)
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let result = []
  let arr= []
  function preOrder(root, targetSum) {
    if (!root) return
    arr.push(root.val)
    
    if (targetSum === root.val && !root.left && !root.right) {
      result.push([...arr])
    }
    let val = root.val
    root.left && preOrder(root.left, targetSum - val, )
    root.right && preOrder(root.right, targetSum - val, )
    arr.pop()
  }
  preOrder(root, targetSum)
  return result
};

// @lc code=end

// "[1,2,3] \n 5"