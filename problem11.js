// Subset Sum Problem
// Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.

// Sample Input
// set = {3, 34, 4, 12, 5, 2}, sum = 8
// Sample Output
// True
// Sample Explanation
// The subset (3,5) gives the required sum 8.

// Expected Time Complexity
// O(sum * n), where sum is the ‘target sum’ and ‘n’ is the size of array.

// Expected Space Complexity
// O(sum * n)

// Constraints
// 1 <= N <= 100
// 1 <= A[i] <= 100
// 1 <= sum <= 10^5

function isSubsetSum(nums, targetSum) {
  const n = nums.length;

  const dp = Array.from({ length: n + 1 }, () =>
    Array(targetSum + 1).fill(false)
  );

  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= targetSum; j++) {
      if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  return dp[n][targetSum];
}

const nums = [3, 34, 4, 12, 5, 2];
const targetSum = 8;
console.log(isSubsetSum(nums, targetSum));
