/*
 * @lc app=leetcode.cn id=559 lang=typescript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */
// type Node = {
//   children:any
// }

function maxDepth(root: Node | null): number {
  if (!root) return 0
  let result = 0
  let queue = [root]
  while (queue.length) {
    result ++
    let curL = queue.length
    for (let i = 0; i < curL; i++) {
      let current = queue.shift()
      current.children.forEach(item =>{
        queue.push(item)
      })
    }
  }
  return result
};
// @lc code=end

