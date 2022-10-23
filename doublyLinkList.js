class Node {
  constructor(value, next = null, prev = null) {
    (this.value = value), (this.next = next), (this.prev = prev);
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
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

    const newNode = new Node(value, selectedNode.next, selectedNode);
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

// this.head = {0, next}
// this.next = {1, null}
// lastNode = this.head
// lastNode

const myLinkedList = new DoublyLinkedList(5);
myLinkedList.append(10);

// console.log(myLinkedList.printList());
