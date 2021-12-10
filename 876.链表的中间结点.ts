/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
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

// function middleNode(head: ListNode | null): ListNode | null {
//   if (!head) return null
//   let arr = []
//   while (head) {
//     arr.push(head)
//     head = head.next
//   }
//   let mid = arr.length / 2
//   // 偶数，说明mid是个整数
//   if (arr.length % 2 === 0) {
//     return arr[mid ]
//   } else {
//     // console.log(Math.floor(arrL))
//     return arr[Math.floor(mid)]
//   }
// };

// 快慢指针
// 36/36 cases passed (72 ms)
// Your runtime beats 78.78 % of typescript submissions
// Your memory usage beats 76.73 % of typescript submissions (39.3 MB)
function middleNode(head: ListNode | null): ListNode | null {
  // let pre = new ListNode(-1, head)
  let fast = head
  let low = head
  while (fast && fast.next) {
    fast = fast.next.next
    low = low.next
    // console.log(low)
  }
  // console.log(low)
  return low
}
" [1,2,3,4,5,6] "
// @lc code=end

