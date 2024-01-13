// Find the second largest no. from an array time complexity should be O(n)

function solution(nums) {
  let n = nums.length;
  let max = nums[0];
  let second = nums[1];
  for (let index = 0; index < n; index++) {
    if (max < nums[index]) {
      second = max;
      max = nums[index];
    } else if (nums[index] > max && nums[index] != max) {
      second = nums[index];
    }
  }
  console.log(max);
  return second;
}

console.log(solution([-5, -1, -3, 0, -2]));
