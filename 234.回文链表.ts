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

function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return true
  }
  let oldHead = copyLinkList(head)
  let newHead = reverse(head)
  while (oldHead && newHead) {
    // console.log('oldHead, newHead is', oldHead, newHead)
    if (oldHead.val != newHead.val) {
      return false
    }
    oldHead = oldHead.next
    newHead = newHead.next
  }
  return true
};
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
function copyLinkList(head) {
  let start = head
  let copyLinkList = new ListNode(-1)
  let copyHead = copyLinkList
  while (start) {
    copyLinkList.next = new ListNode(start.val)
    start = start.next
    copyLinkList = copyLinkList.next
  }
  return copyHead.next
}

// "[1,1,2,1]"
// "[1,2,3,2,1]"
// "[1,2,1]"
// @lc code=end

