/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false
  let fast = head, low = head;
  // 当fast存在的时候，ye
  while (fast && fast.next) {
    fast = fast.next.next
    low = low.next
    if(low==fast) return true
  }
  return false
};
"[1] \n -1"
// @lc code=end

