// Reverse a linked list
// Given pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes.

// Sample Input
// list = 1->2->3->4->NULL
// Sample Output
// list = 4->3->2->1->NULL
// Sample Explanation
// On reversing the linked list by changing the link between the nodes, the linked list is transformed as shown in the sample output

// Expected Time Complexity
// O(N), where N is the number elements in the linked list.

// Expected Space Complexity
// O(1), i.e. , constant space complexity.

// Constraints
// A linked list can be reversed either iteratively or recursively. The task is to implement both the implementations.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log("Original linked list:");
linkedList.printList();

linkedList.reverse();

console.log("\nReversed linked list:");
linkedList.printList();
