/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

//  208/208 cases passed (68 ms)
//  Your runtime beats 98.46 % of typescript submissions
//  Your memory usage beats 65.44 % of typescript submissions (39.4 MB)
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null
  let fast = head;
  let low = head
  let fastNum = 0
// 这样写法情况两个if，一个while，有点复杂
  while (fast) {
    // console.log('fastNum, fast is', fastNum, fast)
    fast = fast.next
    if (fastNum > n) {
      low = low.next
    }
    fastNum++
  }
  // 上面fast到头了，因为fastNum = 链表length,如果fastNum = n,
  // 说明，应该删除的是第一个节点，直接return head.next
  if(fastNum===n){
    return head.next
  }
  // console.log('fast,low is ', fast, low)
  if(low.next){
    low.next = low.next.next
  }
  return head
};
"[1] \n 1"
// @lc code=end

