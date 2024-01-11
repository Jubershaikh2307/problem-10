// Balanced parenthesis
// Given a string S having N characters. Any of the characters of the string are either of '(', '{', '[', ')', '}', ']'. Check whether the pairs and the orders of '{', '}', '(', ')', '[', ']' are correct or not.

// Sample Input
// input: N = 6
// S : [()]{}
// Sample Output
// A: -"Yes"
// Sample Input
// input: N = 4
// S : [(])
// Sample Output
// A: -"No"
// Sample Explanation
// Self explanatory.

// Expected Time Complexity
// O(N), where N is the size of the string S.

// Expected Space Complexity
// O(N), where N is the size of the string S.

// Constraints
// 1 <= N <= 100000

function solution(str) {
  const stack = [];
  const value = ["{", "}", "(", ")", "[", "]"];

  for (let char of str) {
    const charIndex = value.indexOf(char);

    if (charIndex % 2 === 0) {
      stack.push(char);
    } else {
      const top = stack.pop();
      const openExpected = value[charIndex - 1];

      if (!top || top !== openExpected) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

solution("[(])") ? console.log("Yes") : console.log("No");
