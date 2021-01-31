/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 递归处理
// var reverseList = function (head) {
//   if (!head) return null
//   if (head.next === null) return head
// 第一步： 将 head.next处理完毕，得到结果
//   let last = reverseList(head.next)
// 第二步: 将head指针，变成尾部，
//   head.next.next = head
// 第三步：将dead指针变成最后一个，
//   head.next = null
// 第四步：将last也就是后面的头指针，返回
//   return last
// };

// 迭代算法
// var reverseList = function (head) {
//   let cur = null, pre = head;
//   while (pre != null) {
//     // 第一步，先把后面不动的内容保存起来
//     let temp = pre.next;
//     // 第二步，指针反转，pre变为cur的头了，
//     pre.next = cur;
//     // cur后移，继续后面的迭代（关键部分：cur指针向尾部移动）
//     cur = pre;
//     // 第四步：后面不动的部分，续上
//     pre = temp
//   }
//   return cur
// }

// 奇怪的迭代
// 迭代的本质，首先需要一个指针来确定迭代结束；
// 然后依次访问每个元素，将其指针改变，涉及到其前驱和后继，
// 相当于数组内两个元素换位置，需要一个temp临时变量来保存，帮助交换
var reverseList = function (head) {
  if (!head) {
    return null
  }
  let cur = head;
  while (head.next) {
    let temp = head.next.next
    head.next.next = cur
    cur = head.next
    head.next = temp
  }
  return cur
}

// @lc code=end

