/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = []
  // for (let i = 0; i < nums1.length; i++) {
  //   for (let j = 0; j < nums2.length; j++) {
  //     if()
  //   }
  // }
  let iMax = nums1.length;
  let jMax = nums2.length;
  let i = 0, j = 0
  while (i <= iMax && j <= jMax) {
    if (nums1[i] < nums2[j] || -Infinity) {
      console.log('nums1 is', nums1[i], i)
      nums.push(nums1[i++])
      console.log('nums1 is', nums1[i], i)

    } else {
      console.log('nums2 is', nums2[j], j)
      nums.push(nums2[j++])
      console.log('nums2 is', nums2[j], j)

    }
  }
  console.log('nums is', nums)
  return nums[1]
};
// @lc code=end

