// Search in Rotated Sorted Array
// You are given an integer array nums sorted in ascending order (with distinct values), and an integer target. Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]). If target is found in the array return its index, otherwise, return -1.

// Sample Input
// nums = [4,5,6,7,0,1,2], target = 0
// Sample Output
// 4
// Sample Explanation
// In the array given in the sample test case, the target element 0 is stored at index 4.
// Expected Time Complexity
// O(log(N)), where N is the size of the array.

// Expected Space Complexity
// O(1),Auxilliary Space

// Constraints
//   1 <= nums.length <= 5000
//  -10^4 <= nums[i] <= 10^4
//  All values of nums are unique. nums is guaranteed to be rotated at some pivot.
//  -10^4 <= target <= 10^4

function solution(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + (right - left / 2);

    if (arr[mid] === k) {
      return mid;
    }

    if (arr[left] <= arr[mid]) {
      if (arr[left] <= k && k < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] < k && k <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

console.log(solution([4, 5, 6, 7, 0, 1, 2], 0));
