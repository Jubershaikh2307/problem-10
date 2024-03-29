// Check for anagrams
// Check whether two given strings X and Y of sizes N and M respectively are anagram of each other or not.

// Sample Input
// input: N = 4, X = abcd, M = 4, Y = dacb
// Sample Output
// Output: Yes
// Sample Explanation
// All the characters of string "abcd" is present in "dacb" and in same frequencies. Hence both are anagram of each other.

// Expected Time Complexity
// O(NLog(N)), where N is the lenght of the given string

// Expected Space Complexity
// O(1), i.e., constant space complexity.

// Constraints
// 1 <= N,M <= 100000

function solution(str1, str2) {
  return str1.split("").sort().join("") == str2.split("").sort().join("");
}

console.log(solution("abcd", "dacb"));
