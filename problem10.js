// Minimum Jumps to reach the End
// Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps. You can assume that you can always reach the last index.

// Sample Input
// array = [2,3,1,1,4]
// Sample Output
// 2
// Sample Explanation
// The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Note: Remember you can jump less than the mentioned value at any index of array.
// Expected Time Complexity
// O(N*N), where N is the length of the array

// Expected Space Complexity
// O(N), Space Complexity.

// Constraints
// 1 <= nums.length <= 3 * 10^4
// 0 <= nums[i] <= 10^5

function solution(arr) {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    farthest = Math.max(farthest, i + arr[i]);

    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}

console.log(solution([2, 3, 1, 1, 4]));
