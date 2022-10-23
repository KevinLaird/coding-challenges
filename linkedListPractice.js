class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    if (index > this.length) return 'Could not find the Node!';
    let currentNode = this.head;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    if (index >= this.length) {
      this.append(value);
      return this;
    }

    const selectedNode = this.traverseToIndex(index - 1);
    if (!selectedNode) return 'Something went wrong!';

    const newNode = new Node(value, selectedNode.next);
    selectedNode.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    const selectedNode = this.traverseToIndex(index - 1);
    const nodeToDelete = selectedNode.next;
    selectedNode.next = nodeToDelete.next;
    this.length--;
  }
}

// 1 --> 2 --> 3
// myLinkedList.insert(1, 4)
// 1 --> 4 --> 2 --> 3
// curr = this.head (1), index 0
// if (curr.next === )
// curr = curr.next (2), index 1
// const newNode = new Node(value, curr)
// 1 --> 2

const myLinkedList = new LinkedList(10);
myLinkedList.append(11);
myLinkedList.append(12);
myLinkedList.append(13);
myLinkedList.remove(2);

console.log(myLinkedList.printList());
