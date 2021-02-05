/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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


interface ListNode {
  val: number
  next: ListNode | null
}

// function isPalindrome(head: ListNode | null): boolean {
//   if (!head) {
//     return true
//   }
//   let oldHead = copyLinkList(head)
//   let newHead = reverse(head)
//   while (oldHead && newHead) {
//     // 
//     if (oldHead.val != newHead.val) {
//       return false
//     }
//     oldHead = oldHead.next
//     newHead = newHead.next
//   }
//   return true
// };
// function reverse(head: ListNode | null): ListNode | null {
//   let cur = null, pre = head, temp = null
//   while (pre) {
//     temp = pre.next
//     pre.next = cur
//     cur = pre
//     pre = temp
//   }
//   head.next = null
//   return cur
// }
// function copyLinkList(head) {
//   let start = head
//   let copyLinkList = new ListNode(-1)
//   let copyHead = copyLinkList
//   while (start) {
//     copyLinkList.next = new ListNode(start.val)
//     start = start.next
//     copyLinkList = copyLinkList.next
//   }
//   return copyHead.next
// }

// 深度遍历法-后序遍历链表，到最后一位，然后向中间夹逼
// let left
// function isPalindrome(head: ListNode | null): boolean {
//   left = head
//   return contrast(head)
// }
// function contrast(right) {
//   if (!right) return true
//   let res = contrast(right.next)
//   res = res && (right.val === left.val)
//   left = left.next
//   return res
// }

/**
 * 此方法为找到中位值，然后中位值向左右扩散对比值，时间复杂度为N,空间复杂度也为n
 * 如果不能修改原链表结构，可以引入新的指针来对比，return之前再次反转反转过得后半截链表
 * @param head 
 */
function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true
  let newHead = new ListNode(-1)
  newHead.next = head
  let fast = newHead, slow = newHead
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  // 
  // 如果是fast存在，说明是偶数长度如果不存在是奇数
  // 如果是奇数，那说明slow指的是正中间，需要向后继挪位置，以比较两段是否对称
  if (!fast) slow = slow.next

  slow = reverse(slow)
  // 
  while (head&& slow) {
    if (head.val !== slow.val) {
      return false
    }
    head = head.next
    slow = slow.next
  }
  
  return true
}
function reverse(head: ListNode | null): ListNode | null {
  let cur = null, pre = head, temp = null
  while (pre) {
    temp = pre.next
    pre.next = cur
    cur = pre
    pre = temp
  }
  head.next = null
  return cur
}
// "[1,1,2,1]"
// "[1,2,3,2,1]"
// "[1,2,1]" "[0,0]"
// @lc code=end

