/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

//  Your runtime beats 96.94 % of typescript submissions
//  Your memory usage beats 59.26 % of typescript submissions (39.9 MB)
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let index1 = list1, index2 = list2
  let head = new ListNode(-1)
  let list = head
  while(index1 || index2){
    if(!index1){
      list.next = index2
      return head.next
    }else if(!index2){
      list.next = index1
      return head.next
    }else if(index1.val < index2.val){
      list.next = new ListNode(index1.val)
      index1 = index1.next
      list = list.next
      // console.log('head1',head)
    }else {
      list.next = new ListNode(index2.val)
      index2 = index2.next
      list = list.next
      // console.log('head2',head)

    }
  }
  return head.next
};
// @lc code=end

