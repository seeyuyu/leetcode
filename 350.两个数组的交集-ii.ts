/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  let arr1 = nums1.sort((a, b) => a - b), len1 = arr1.length
  let arr2 = nums2.sort((a, b) => a - b), len2 = arr2.length
  let index1 = 0, index2 = 0;
  let result = []
  // let map = new Map()
  while (index1 < len1 && index2 < len2) {
    if(nums1[index1] ===nums2[index2]){
      result.push(nums1[index1])
      // flushMap(nums1[index1])
      index1++
      index2++
    }else if(nums1[index1] > nums2[index2]){
      index2++
    }else{
      index1++
    }
  }

  return result
};
// @lc code=end

