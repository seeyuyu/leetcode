/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
// Your runtime beats 99.68 % of typescript submissions
// Your memory usage beats 44.87 % of typescript submissions (39.9 MB)
// 遇到有序的数组，链表等要想到双指针处理
function twoSum(numbers: number[], target: number): number[] {
  let len = numbers.length
  let fast =0, slow = len -1
  while(fast<slow){
    let sum = numbers[fast] + numbers[slow]
    if(sum===target){
      return [fast+1, slow+1]
    }
    if(sum>target){
      slow--
    }else{
      fast++
    }
  }
};
// @lc code=end

