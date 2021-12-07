/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 环形链表法
// O（n）的时间复杂度，O(1)的空间复杂度，只保存了几个常量
//  16/16 cases passed (92 ms)
//  Your runtime beats 27.51 % of typescript submissions
//  Your memory usage beats 96.83 % of typescript submissions (40.6 MB)

// function detectCycle(head: ListNode | null): ListNode | null {
//   let fast = head, low = head;
//   while (fast && fast.next) {
//     fast = fast.next.next
//     low = low.next
//     if (low === fast) {
//       // 先找到相遇点k，设环起始点m，画个图
//       // k-m = k-m，k到m的距离 == head到m的距离，利用head和k在 k-m 相遇,找到 m点
//       let m = head
//       fast = fast
//       while (fast !== m) {
//         fast = fast.next
//         m = m.next
//       }
//       return m
//     }
//   }
//   return null
// };

// 哈希表法
// 16/16 cases passed (84 ms)
// Your runtime beats 69.84 % of typescript submissions
// Your memory usage beats 23.81 % of typescript submissions (41.2 MB)
function detectCycle(head: ListNode | null): ListNode | null {
  let newSet = new Set()
  let fast = head
  while (fast ) {
    if(newSet.has(fast)){
      return fast
    }
    newSet.add(fast)
    fast = fast.next
  }
  return null
};
"[1,2] \n 0"
// @lc code=end

