// Find the largest no. from an array time complexity should be O(n)

function solution(nums) {
  let n = nums.length;
  let max = nums[0];
  for (let index = 1; index < n; index++) {
    if (max < nums[index]) {
      max = nums[index];
    }
  }
  return max;
}

console.log(solution([-5, -2, -3, 0, -1]));
