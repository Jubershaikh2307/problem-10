// Stack Using Two Queues
// Implement a Stack using two queues q1 and q2 such that the stack supports two operations push() and pop()

// Sample Input
// push(2)
// push(3)
// pop()
// push(4)
// pop()
// Sample Output
// 3 4
// Sample Explanation
// push(2) the stack will be {2}
// push(3) the stack will be {2 3}
// pop()   poped element will be 3 the stack will be {2}
// push(4) the stack will be {2 4}
// pop()   poped element will be 4
// Expected Time Complexity
// O(1) for push() and O(N) for pop() (or vice-versa).

// Expected Space Complexity
// O(N), auxilliary Space required for storing data in queues.

// Constraints
//  1 <= Number of operations on the stack <= 100
//  1 <= Values in the stack <= 100

class StackUsingQueues {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(value) {
    this.q1.push(value);
  }

  pop() {
    if (this.q1.length === 0) {
      return "UnderFlow";
    }

    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }

    const poppedValue = this.q1.shift();

    [this.q1, this.q2] = [this.q2, this.q1];

    return poppedValue;
  }
}

const stack = new StackUsingQueues();

stack.push(2);
stack.push(3);
console.log(stack.pop());
stack.push(4);
console.log(stack.pop());
